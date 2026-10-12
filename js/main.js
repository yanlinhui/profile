/* ============================================================
   main.js — 列表渲染与语言切换
   论文按年份倒序分组、自动编号 [1..N]；切换语言时全部重渲染。
   ============================================================ */

(function () {
  'use strict';

  var t = window.i18n.t;

  /* 成果类型徽标文案 */
  var TYPE = {
    journal:    { zh: '期刊',       en: 'Journal' },
    conference: { zh: '会议',       en: 'Conference' },
    preprint:   { zh: '预印本',     en: 'Preprint' },
    patent:     { zh: '发明专利',   en: 'Invention Patent' },
    software:   { zh: '软件著作权', en: 'Software Copyright' }
  };

  /* 项目状态 */
  var STATUS = {
    ongoing:   { zh: '进行中', en: 'Ongoing' },
    completed: { zh: '已完成', en: 'Completed' }
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function el(id) { return document.getElementById(id); }

  /* 作者：支持 'Name'、{ name: 'Name', me: true }、
     { zh: '…', en: '…', me: true } 三种写法 */
  function authorHtml(a, lang) {
    var name, me;
    if (typeof a === 'string') { name = a; me = false; }
    else if (a && a.name != null) { name = t(a.name, lang); me = !!a.me; }
    else { name = t(a, lang); me = !!(a && a.me); }
    name = esc(name);
    return me ? '<span class="me">' + name + '</span>' : name;
  }

  /* ── 02 研究方向 ─────────────────────────────────────── */
  function renderInterests(lang) {
    el('interest-list').innerHTML = window.DATA.interests.map(function (it) {
      return '<div class="interest-item">' +
               '<span class="interest-kw">' + esc(t(it.kw, lang)) + '</span>' +
               '<span class="interest-desc">' + esc(t(it.desc, lang)) + '</span>' +
             '</div>';
    }).join('');
  }

  /* ── 03 经历时间线 ───────────────────────────────────── */
  function renderTimeline(targetId, items, lang) {
    var host = el(targetId);
    if (!host) return;
    host.innerHTML = items.map(function (it) {
      return '<div class="tl-item">' +
               '<div class="tl-period">' + esc(t(it.period, lang)) + '</div>' +
               '<div class="tl-head">'   + esc(t(it.head, lang)) + '</div>' +
               (it.sub ? '<div class="tl-sub">' + esc(t(it.sub, lang)) + '</div>' : '') +
             '</div>';
    }).join('');
  }

  /* ── 04 课程成绩 ─────────────────────────────────────── */
  /* 按分数分档：95 分及以上 / 90–94 / 90 分以下 */
  function gradeBand(g) {
    var n = parseFloat(g);
    if (isNaN(n)) return '';
    if (n >= 95) return ' grade-high';
    if (n >= 90) return ' grade-good';
    return ' grade-low';
  }

  function renderCourses(lang) {
    el('course-stats').innerHTML = window.DATA.courseStats.map(function (s) {
      return '<div class="stat">' +
               '<span class="stat-value">' + esc(s.value) + '</span>' +
               '<span class="stat-label">' + esc(t(s.label, lang)) + '</span>' +
             '</div>';
    }).join('');

    el('course-groups').innerHTML = window.DATA.courses.map(function (g) {
      var items = g.items.map(function (c) {
        var grade = c.grade
          ? '<span class="course-grade' + gradeBand(c.grade) + '">' + esc(c.grade) + '</span>'
          : '';
        return '<div class="course-item' + (c.grade ? '' : ' course-item-plain') + '">' +
                 '<span class="course-name">' + esc(t(c.name, lang)) + '</span>' +
                 grade +
               '</div>';
      }).join('');

      return '<div class="course-group">' +
               '<p class="course-subhead">' + esc(t(g.group, lang)) + '</p>' +
               '<div class="course-list">' + items + '</div>' +
             '</div>';
    }).join('');
  }

  /* ── 05 学术成果 ─────────────────────────────────────── */
  function renderPublications(lang) {
    var pubs = window.DATA.publications.slice().sort(function (a, b) {
      if (b.year !== a.year) return b.year - a.year;
      return (b.month || 0) - (a.month || 0);
    });

    var n = 0;                 // 全局编号，最新在前
    var html = '';
    var curYear = null;

    pubs.forEach(function (p) {
      if (p.year !== curYear) {
        if (curYear !== null) html += '</div></div>';   // 关闭上一组
        curYear = p.year;
        html += '<div class="pub-group">' +
                  '<h3 class="pub-year" id="y' + curYear + '">' + curYear + '</h3>' +
                  '<div class="pub-list">';
      }
      n += 1;

      var typeLabel = t(TYPE[p.type] || TYPE.journal, lang);
      var authors = p.authors.map(function (a) { return authorHtml(a, lang); }).join(', ');

      var venueLine = esc(t(p.venue, lang));
      if (p.volume) {
        venueLine += ', ' + esc(p.volume) +
                     (p.issue ? '(' + esc(p.issue) + ')' : '') +
                     (p.pages ? ': ' + esc(p.pages) : '');
      }
      venueLine += ', ' + p.year + '.';

      var links = [];
      if (p.doi)   links.push('<a href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">DOI</a>');
      if (p.arxiv) links.push('<a href="https://arxiv.org/abs/' + esc(p.arxiv) + '" target="_blank" rel="noopener">arXiv</a>');
      if (p.pdf)   links.push('<a href="' + esc(p.pdf) + '" target="_blank" rel="noopener">PDF</a>');

      html += '<div class="pub-item" id="' + esc(p.id) + '">' +
                '<span class="pub-num">[' + n + ']</span>' +
                '<div class="pub-title"><span class="tag">' + esc(typeLabel) + '</span>' +
                  esc(t(p.title, lang)) +
                  (p.featured ? '<span class="pub-star" title="代表作">★</span>' : '') +
                '</div>' +
                '<div class="pub-authors">' + authors + '</div>' +
                '<div class="pub-venue">' + venueLine + '</div>' +
                (p.note ? '<div class="pub-note">' + esc(t(p.note, lang)) + '</div>' : '') +
                (links.length ? '<div class="pub-links">' + links.join('') + '</div>' : '') +
                (p.bibtex ? '<details class="pub-bibtex"><summary>BibTeX</summary><pre>' +
                            esc(p.bibtex) + '</pre></details>' : '') +
              '</div>';
    });

    if (curYear !== null) html += '</div></div>';
    el('pub-container').innerHTML = html;
  }

  /* ── 06 科研项目 ─────────────────────────────────────── */
  function renderProjects(lang) {
    el('proj-grid').innerHTML = window.DATA.projects.map(function (p) {
      var meta = [t(p.role, lang)];
      if (p.funder) meta.push(t(p.funder, lang));
      meta.push(t(p.period, lang));

      return '<div class="proj-card">' +
               '<div class="proj-name">' +
                 '<span class="tag' + (p.status === 'ongoing' ? ' tag-ongoing' : '') + '">' +
                   esc(t(STATUS[p.status] || STATUS.completed, lang)) + '</span>' +
                 esc(t(p.name, lang)) +
               '</div>' +
               '<div class="proj-meta">' + esc(meta.join(' · ')) + '</div>' +
               '<div class="proj-desc">' + esc(t(p.desc, lang)) + '</div>' +
             '</div>';
    }).join('');
  }

  /* ── 07 荣誉奖项（按类别分组） ───────────────────────── */
  function renderAwards(lang) {
    el('award-list').innerHTML = window.DATA.awards.map(function (g) {
      var items = g.items.map(function (a) {
        return '<div class="award-item">' +
                 '<span class="award-name">' + esc(t(a.name, lang)) + '</span>' +
                 '<span class="award-level">' + esc(t(a.level, lang)) + '</span>' +
               '</div>';
      }).join('');

      return '<div class="award-group">' +
               '<p class="award-subhead">' + esc(t(g.group, lang)) + '</p>' +
               '<div class="award-list">' + items + '</div>' +
             '</div>';
    }).join('');
  }

  /* ── 总渲染 ──────────────────────────────────────────── */
  function renderAll(lang) {
    if (!window.DATA) return;
    renderInterests(lang);
    renderTimeline('edu-timeline',     window.DATA.education, lang);
    renderTimeline('work-timeline',    window.DATA.work, lang);
    renderTimeline('service-timeline', window.DATA.service, lang);
    renderCourses(lang);
    renderPublications(lang);
    renderProjects(lang);
    renderAwards(lang);
  }

  /* ── 启动 ────────────────────────────────────────────── */
  window.i18n.snapshot();          // 先存中文原文
  window.i18n.on(renderAll);       // 语言变化时重渲染列表
  window.i18n.setLang(window.i18n.initialLang());

  /* 语言切换按钮 */
  var btns = document.querySelectorAll('.lang-toggle button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      window.i18n.setLang(this.getAttribute('data-lang'));
    });
  }
})();
