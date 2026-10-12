/* ============================================================
   i18n.js — 中英双语切换
   机制：HTML 里写中文原文（单一来源），本文件只存英文。
        初始化时把每个 [data-i18n] 元素的中文 textContent 快照下来，
        切回中文时从快照恢复 —— 中文零重复维护，且无 JS 时是完整中文站。
   ============================================================ */

(function () {
  'use strict';

  /* 英文文案字典：key 与 HTML 中 data-i18n 的值一一对应 */
  var EN = {
    affil: 'School of Business, Southwest University · Big Data Management and Application',

    navAbout:    'About',
    navResearch: 'Research',
    navExp:      'Experience',
    navCourse:   'Coursework',
    navPubs:     'Publications',
    navProjects: 'Projects',
    navAwards:   'Awards',
    navLife:     'Life',

    secAbout:    'About',
    secResearch: 'Research Interests',
    secExp:      'Education & Experience',
    secCourse:   'Coursework',
    secPubs:     'Academic Output',
    secProjects: 'Research Projects',
    secAwards:   'Honors & Awards',
    secLife:     'Life & Activities',

    bio1: 'Linhui Yan is an undergraduate in the School of Business at Southwest University, majoring in Big Data Management and Application (Class of 2027). She ranks 1st out of 97 in her cohort (top 1%) with a GPA of 4.21/5, and has received the National Scholarship and the SWU First-Class Scholarship. Her research interests lie in data mining, machine learning, and urban computing, at the intersection of management science, data science, and public policy.',
    bio2: 'She has published two first-author EI conference papers at ICAIBD 2026 and ICCCBDA 2026, both on the price drivers of the second-hand housing market in Chongqing Liangjiang New Area. She is the first student inventor of a published invention patent and the first author of three registered software copyrights.',
    bio3: 'She has long been involved in research projects and academic writing, and is proficient in Python data analysis, machine learning modeling, and text mining. She plans to pursue graduate study and a long-term academic career, and welcomes correspondence by email.',

    expEdu:     'Education',
    expWork:    'Internships',
    expService: 'Student Leadership & Volunteering',

    footerCopy:    '© 2026 Linhui Yan',
    footerUpdated: 'Last updated: October 2026'
  };

  /* 标题与 meta description 也需要随语言切换 */
  var META = {
    zh: {
      title: '延琳慧 — 个人主页',
      desc:  '延琳慧，西南大学商贸学院大数据管理与应用专业本科生，研究方向为数据挖掘、机器学习与城市计算。'
    },
    en: {
      title: 'Linhui Yan — Homepage',
      desc:  'Linhui Yan, an undergraduate in Big Data Management and Application at Southwest University, working on data mining, machine learning, and urban computing.'
    }
  };

  var snapshots = {};   // key -> 中文原文
  var listeners = [];   // 语言变化时的回调（供 main.js 重渲染列表）

  function nodes() {
    return document.querySelectorAll('[data-i18n]');
  }

  /* 把 HTML 里的中文原文存下来，只存一次 */
  function snapshot() {
    var els = nodes();
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (!(key in snapshots)) snapshots[key] = els[i].textContent;
    }
  }

  function applyText(lang) {
    var els = nodes();
    for (var i = 0; i < els.length; i++) {
      var el  = els[i];
      var key = el.getAttribute('data-i18n');
      el.textContent = (lang === 'en' && EN[key] != null) ? EN[key] : snapshots[key];
    }
  }

  function applyMeta(lang) {
    var m = META[lang] || META.zh;
    document.title = m.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', m.desc);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
  }

  function updateToggle(lang) {
    var btns = document.querySelectorAll('.lang-toggle button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed',
        btns[i].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
  }

  /* 初始语言优先级：?lang= 参数 → localStorage → 默认中文 */
  function initialLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (q === 'en' || q === 'zh') return q;
    try {
      var s = localStorage.getItem('lang');
      if (s === 'en' || s === 'zh') return s;
    } catch (e) {}
    return 'zh';
  }

  function setLang(lang) {
    if (lang !== 'en') lang = 'zh';
    applyText(lang);
    applyMeta(lang);
    updateToggle(lang);

    try { localStorage.setItem('lang', lang); } catch (e) {}

    /* 同步地址栏 ?lang=en，方便把英文版链接分享出去；
       用 replaceState 不产生历史记录，浏览器后退不会在语言间打转。 */
    try {
      var u = new URL(location.href);
      if (lang === 'en') u.searchParams.set('lang', 'en');
      else u.searchParams.delete('lang');
      history.replaceState(null, '', u.pathname + u.search + u.hash);
    } catch (e) {}

    for (var i = 0; i < listeners.length; i++) listeners[i](lang);
  }

  window.i18n = {
    snapshot: snapshot,
    setLang: setLang,
    initialLang: initialLang,
    on: function (cb) { listeners.push(cb); },
    /* 取可翻译字段的值：字段形如 {zh: '…', en: '…'}，缺失时回退中文；
       语言无关的字段可直接写字符串。 */
    t: function (field, lang) {
      if (field == null) return '';
      if (typeof field === 'object') return field[lang] || field.zh || '';
      return String(field);
    }
  };
})();
