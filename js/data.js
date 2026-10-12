/* ============================================================
   data.js — 结构化内容数据（未来维护的主入口）
   ------------------------------------------------------------
   规则：每个可翻译字段写成 { zh: '…', en: '…' }，
        论文标题、人名、年份、卷期页等语言无关字段可直接写字符串。

   加一篇论文 = 在 publications 数组里新增一个对象，页面上的
   年份分组与 [1..N] 编号会自动重排，无需改动 HTML/CSS。
   ============================================================ */

window.DATA = {

  /* ── 02 研究方向 ─────────────────────────────────────── */
  interests: [
    {
      kw:   { zh: '数据挖掘与城市计算', en: 'Data mining & urban computing' },
      desc: { zh: '面向城市多源数据的特征挖掘与可视化分析，以城市住房市场为典型应用场景。',
              en: 'Feature mining and visual analytics for urban multi-source data, with urban housing markets as a primary application.' }
    },
    {
      kw:   { zh: '机器学习与预测建模', en: 'Machine learning & predictive modeling' },
      desc: { zh: '回归、随机森林等模型的对比建模与特征重要性分析，用于价格等连续变量的预测与解释。',
              en: 'Comparative modeling with regression and random forests, and feature-importance analysis for predicting and explaining continuous outcomes such as prices.' }
    },
    {
      kw:   { zh: '文本挖掘与政策量化', en: 'Text mining & policy quantification' },
      desc: { zh: '运用 LDA 主题模型与 Word2Vec 词向量，量化政策文本的主题演变与语义协同关系。',
              en: 'Using LDA topic models and Word2Vec embeddings to quantify topic evolution and semantic alignment across policy documents.' }
    },
    {
      kw:   { zh: '教育数字化与科学教育', en: 'Digital education & science education' },
      desc: { zh: '关注大数据驱动的科学教师培育与优质科教资源的精准匹配。',
              en: 'Big-data-driven training of science teachers and the precise matching of high-quality educational resources.' }
    }
  ],

  /* ── 03 教育经历 ─────────────────────────────────────── */
  education: [
    {
      period: { zh: '2023 – 2027（预计）', en: '2023 – 2027 (expected)' },
      head:   { zh: '本科 · 西南大学商贸学院', en: 'B.Sc. · School of Business, Southwest University' },
      sub:    { zh: '大数据管理与应用专业 · 学业排名 1/97（前 1%）· 绩点 4.21/5',
                en: 'Big Data Management and Application · Ranked 1/97 (top 1%) · GPA 4.21/5' }
    }
  ],

  /* ── 03 实习经历 ─────────────────────────────────────── */
  work: [
    {
      period: { zh: '2026.02 – 2026.05', en: 'Feb 2026 – May 2026' },
      head:   { zh: '科技教育业务拓展实习生 · 北斗遨翔（重庆）科技有限公司',
                en: 'Business Development Intern, STEM Education · Beidou Aoxiang (Chongqing) Technology Co., Ltd.' },
      sub:    { zh: '负责赛事商业化与资源整合，参与产品手册设计与资政报告撰写。',
                en: 'Led competition commercialization and resource integration; contributed to product brochures and policy advisory reports.' }
    },
    {
      period: { zh: '2025.07 – 2025.09', en: 'Jul 2025 – Sep 2025' },
      head:   { zh: '软件开发工程师 · 中国电信股份有限公司南宁分公司',
                en: 'Software Development Engineer · China Telecom, Nanning Branch' },
      sub:    { zh: '基于若依框架、Vue 3、Spring Boot 开发消防后台管理系统，完成 Docker 容器化部署与 Git 协作。',
                en: 'Built a fire-safety management backend with RuoYi, Vue 3, and Spring Boot; containerized it with Docker and collaborated through Git.' }
    },
    {
      period: { zh: '2025.06 – 2025.09', en: 'Jun 2025 – Sep 2025' },
      head:   { zh: '校园市场营销推广实习生 · 中国联合网络通信有限公司荣昌区分公司',
                en: 'Campus Marketing Intern · China Unicom, Rongchang Branch' },
      sub:    { zh: '负责校园卡的线上引流与私域转化，形成从获客、开卡到售后维护的完整销售闭环。',
                en: 'Ran online acquisition and private-domain conversion for campus SIM cards, forming a complete sales loop from lead generation to after-sales support.' }
    },
    {
      period: { zh: '2024.01 – 2024.02', en: 'Jan 2024 – Feb 2024' },
      head:   { zh: '政企业务经理 · 中国电信股份有限公司桂林分公司',
                en: 'Government & Enterprise Business Manager · China Telecom, Guilin Branch' },
      sub:    { zh: '开发并维护政府与企事业单位客户，负责项目从商机挖掘、招投标到交付售后的全流程管理。',
                en: 'Developed and maintained government and enterprise clients, managing projects from opportunity identification and bidding through to delivery and after-sales support.' }
    }
  ],

  /* ── 03 学生工作与志愿服务 ───────────────────────────── */
  service: [
    {
      period: { zh: '2025.09 – 至今', en: 'Sep 2025 – present' },
      head:   { zh: '团支书 · 西南大学商贸学院',
                en: 'Class League Branch Secretary · School of Business, Southwest University' },
      sub:    { zh: '依托“智慧团建”落实基础团务与推优入党，协同推进班级建设。',
                en: 'Manages League affairs and Party membership recommendations through the Smart League platform, and coordinates class development.' }
    },
    {
      period: { zh: '2024.09 – 2025.09', en: 'Sep 2024 – Sep 2025' },
      head:   { zh: '青年志愿服务团办公室部长 · 西南大学商贸学院',
                en: 'Head of Office, Youth Volunteer Service Corps · School of Business, Southwest University' },
      sub:    { zh: '负责志愿者招募与管理、活动物资调度与志愿活动策划。',
                en: 'Managed volunteer recruitment and coordination, event logistics, and the planning of volunteer programs.' }
    },
    {
      period: { zh: '2024 – 至今', en: '2024 – present' },
      head:   { zh: '志愿服务 · 累计 300+ 小时', en: 'Volunteering · 300+ hours in total' },
      sub:    { zh: '参与“返家乡”云支教、天府 AI 医疗大会、图书馆与美术馆等志愿服务 22 项，获评西南大学五星级志愿者。',
                en: 'Took part in 22 volunteer programs, including online rural tutoring, the Tianfu AI Healthcare Conference, and library and art-museum services; named a Five-Star Volunteer of Southwest University.' }
    }
  ],

  /* ── 04 课程成绩 ─────────────────────────────────────────
     grade 为成绩字符串；渲染时按分数分档着色
     （95 分及以上 / 90–94 / 90 分以下）
     ─────────────────────────────────────────────────────── */
  courseStats: [
    { value: '4.21/5', label: { zh: '绩点',           en: 'GPA' } },
    { value: '1/97',   label: { zh: '专业排名',       en: 'Class rank' } },
    { value: '5',      label: { zh: '满绩课程',       en: 'Full-GPA courses' } },
    { value: '24',     label: { zh: '95 分以上课程',  en: 'Courses scored 95+' } },
    { value: '43',     label: { zh: '90 分以上课程',  en: 'Courses scored 90+' } },
    { value: '509',    label: { zh: 'CET-6',          en: 'CET-6' } }
  ],

  courses: [
    {
      group: { zh: '数学与统计', en: 'Mathematics & Statistics' },
      items: [
        { name: { zh: '高等数学ⅡA',           en: 'Advanced Mathematics IIA' },                  grade: '99' },
        { name: { zh: '高等数学ⅡB',           en: 'Advanced Mathematics IIB' },                  grade: '97' },
        { name: { zh: '大数据统计与计量分析',  en: 'Big Data Statistics and Econometric Analysis' }, grade: '93' },
        { name: { zh: '系统工程与运筹学',      en: 'Systems Engineering and Operations Research' }, grade: '90' }
      ]
    },
    {
      group: { zh: '计算机与数据科学', en: 'Computing & Data Science' },
      items: [
        { name: { zh: '数据库原理及应用',      en: 'Database Principles and Applications' },      grade: '98' },
        { name: { zh: '大数据技术（Ⅰ）',       en: 'Big Data Technology I' },                     grade: '95' },
        { name: { zh: '大数据技术（Ⅱ）',       en: 'Big Data Technology II' },                    grade: '98' },
        { name: { zh: '大数据分析实训',        en: 'Big Data Analysis Practicum' },               grade: '96' },
        { name: { zh: '数据科学',              en: 'Data Science' },                              grade: '91' },
        { name: { zh: '人工智能与机器学习',    en: 'Artificial Intelligence and Machine Learning' }, grade: '91' },
        { name: { zh: '操作系统原理',          en: 'Operating Systems' },                         grade: '92' },
        { name: { zh: 'Web 前端开发',          en: 'Web Front-end Development' },                 grade: '95' }
      ]
    },
    {
      group: { zh: '经济与管理', en: 'Economics & Management' },
      items: [
        { name: { zh: '管理学原理',            en: 'Principles of Management' },                  grade: '92' },
        { name: { zh: '经济学基础',            en: 'Fundamentals of Economics' },                 grade: '95' },
        { name: { zh: '产业经济学',            en: 'Industrial Economics' },                      grade: '97' },
        { name: { zh: '产业经济大数据分析',    en: 'Big Data Analysis for Industrial Economics' }, grade: '93' },
        { name: { zh: '营销管理',              en: 'Marketing Management' },                      grade: '98' },
        { name: { zh: '市场调查',              en: 'Market Research' },                           grade: '94' }
      ]
    },
    {
      group: { zh: '信息资源管理', en: 'Information Resource Management' },
      items: [
        { name: { zh: '信息资源管理',          en: 'Information Resource Management' },           grade: '95' },
        { name: { zh: '大数据治理与安全',      en: 'Big Data Governance and Security' },          grade: '96' },
        { name: { zh: '信息技术导论',          en: 'Introduction to Information Technology' },    grade: '95' },
        { name: { zh: '日语（选修）',          en: 'Japanese (elective)' },                       grade: '93' }
      ]
    },
    {
      group: { zh: '职业资格与证书', en: 'Professional Certificates' },
      items: [
        { name: { zh: '计算机技术与软件专业技术资格（程序员）', en: 'Software Qualification Examination — Programmer' } },
        { name: { zh: '全国计算机等级考试二级（MS Office）',    en: 'National Computer Rank Examination, Level 2 (MS Office)' } }
      ]
    }
  ],

  /* ── 05 学术成果 ─────────────────────────────────────────
     type: conference | journal | preprint | patent | software
     authors 中本人所在条目加 me: true（页面会加粗显示）
     ─────────────────────────────────────────────────────── */
  publications: [
    {
      id: 'p2026-icaibd',
      type: 'conference',
      year: 2026, month: 5,
      title: 'Multidimensional Feature Visualization Analysis of the Second-hand Housing Market Integrating Multisource Data: A Case Study of Chongqing Liangjiang New Area',
      authors: [
        { name: 'Linhui YAN', me: true },
        { name: 'Liangming WEN' }
      ],
      venue: { zh: 'IEEE 人工智能与大数据国际会议（ICAIBD）· 中国成都',
               en: 'IEEE International Conference on Artificial Intelligence and Big Data (ICAIBD), Chengdu, China' },
      note:  { zh: '第一作者 · EI Compendex & Scopus 收录', en: 'First author · EI Compendex & Scopus indexed' }
    },
    {
      id: 'p2026-icccbda',
      type: 'conference',
      year: 2026, month: 4,
      title: 'Exploring Factors Influencing Second-Hand Housing Market Prices Through Multi-Source Data Integration: A Case Study of Chongqing Liangjiang New Area',
      authors: [
        { name: 'Linhui YAN', me: true },
        { name: 'Liangming WEN' }
      ],
      venue: { zh: 'IEEE 云计算与大数据分析国际会议（ICCCBDA）· 中国成都',
               en: 'IEEE International Conference on Cloud Computing and Big Data Analytics (ICCCBDA), Chengdu, China' },
      note:  { zh: '第一作者 · EI Compendex & Scopus 收录', en: 'First author · EI Compendex & Scopus indexed' }
    },
    {
      id: 'p2025-patent',
      type: 'patent',
      year: 2025, month: 12,
      title: { zh: '一种基于大数据的物业管理方法、装置、设备及介质',
               en: 'A Big-data-based Property Management Method, Apparatus, Device and Medium' },
      authors: [
        { name: { zh: '延琳慧（第一学生发明人）', en: 'Linhui YAN (First Student Inventor)' }, me: true }
      ],
      venue: { zh: '国家知识产权局 · 发明专利（已公开）',
               en: 'China National Intellectual Property Administration · Invention Patent (published)' }
    },
    {
      id: 'p2025-sw1',
      type: 'software',
      year: 2025, month: 12,
      title: { zh: '科研文献数据挖掘与情报分析核心平台', en: 'Core Platform for Research Literature Mining and Intelligence Analysis' },
      authors: [
        { name: { zh: '延琳慧（第一著作人）', en: 'Linhui YAN (First Author)' }, me: true }
      ],
      venue: { zh: '中华人民共和国国家版权局 · 计算机软件著作权',
               en: 'National Copyright Administration of China · Software Copyright' }
    },
    {
      id: 'p2025-sw2',
      type: 'software',
      year: 2025, month: 12,
      title: { zh: '商品价格采集分析系统', en: 'Commodity Price Collection and Analysis System' },
      authors: [
        { name: { zh: '延琳慧（第一著作人）', en: 'Linhui YAN (First Author)' }, me: true }
      ],
      venue: { zh: '中华人民共和国国家版权局 · 计算机软件著作权',
               en: 'National Copyright Administration of China · Software Copyright' }
    },
    {
      id: 'p2025-sw3',
      type: 'software',
      year: 2025, month: 12,
      title: { zh: '数据快速清洗与质量优化系统', en: 'Rapid Data Cleaning and Quality Optimization System' },
      authors: [
        { name: { zh: '延琳慧（第一著作人）', en: 'Linhui YAN (First Author)' }, me: true }
      ],
      venue: { zh: '中华人民共和国国家版权局 · 计算机软件著作权',
               en: 'National Copyright Administration of China · Software Copyright' }
    }
  ],

  /* ── 06 科研项目 ─────────────────────────────────────────
     status: ongoing（进行中） | completed（已完成）
     ─────────────────────────────────────────────────────── */
  projects: [
    {
      name:   { zh: '星途科教——大数据驱动的科学教师培育工程', en: 'Starpath STEM Education: Big-data-driven Training of Science Teachers' },
      role:   { zh: '项目负责人', en: 'Project Lead' },
      funder: { zh: '国家级大学生创新创业训练计划', en: 'National College Students Innovation and Entrepreneurship Training Program' },
      period: { zh: '2026.02 – 至今', en: 'Feb 2026 – present' },
      status: 'ongoing',
      desc:   { zh: '构建“北斗 + 大数据”双驱动的科学教师培育模式，形成“三挖掘 + 三产出”运行机制，开发北斗 + STEAM 跨学科课程体系与教师能力画像推送平台，累计开发课程模块 20 余个，覆盖中小学 50 余所。',
                en: 'Builds a “Beidou + big data” dual-driven model for training science teachers, with a three-mining / three-output mechanism, a Beidou + STEAM interdisciplinary curriculum, and a teacher-competency profiling platform; over 20 course modules developed and 50+ schools reached.' }
    },
    {
      name:   { zh: '中国高等教育中的学术霸凌：测量结构、网络枢纽与分层脆弱性', en: 'Academic Bullying in Chinese Higher Education: Measurement Structure, Network Hubs, and Stratified Vulnerability' },
      role:   { zh: '文献实证撰写', en: 'Literature Review & Empirical Analysis' },
      period: { zh: '2026.01 – 2026.03', en: 'Jan 2026 – Mar 2026' },
      status: 'completed',
      desc:   { zh: '基于布迪厄组织场域理论，运用验证性因子分析、网络心理测量学与潜在剖面分析，揭示学术霸凌的三维测量结构、核心行为枢纽与分层脆弱性。',
                en: 'Draws on Bourdieu’s field theory and applies confirmatory factor analysis, network psychometrics, and latent profile analysis to reveal the three-dimensional structure and stratified vulnerability of academic bullying.' }
    },
    {
      name:   { zh: '中国土地市场的政策协同研究', en: 'Policy Coordination in China’s Land Market' },
      role:   { zh: '文本挖掘与主题分析', en: 'Text Mining & Topic Analysis' },
      period: { zh: '2026.01 – 2026.02', en: 'Jan 2026 – Feb 2026' },
      status: 'completed',
      desc:   { zh: '负责 LDA 主题模型构建、Word2Vec 词向量训练与语义协同量化，利用 Gephi、Matplotlib 实现政策语义网络可视化，形成主题模型报告与政策协同矩阵。',
                en: 'Built LDA topic models and trained Word2Vec embeddings to quantify semantic alignment across policies, and visualized policy semantic networks with Gephi and Matplotlib.' }
    },
    {
      name:   { zh: '乡村教育数字研学共同体的理论逻辑、运作机理与建构路径', en: 'Theoretical Logic, Operating Mechanism, and Construction Path of Digital Study-travel Communities in Rural Education' },
      role:   { zh: '论文修改撰写', en: 'Manuscript Revision' },
      period: { zh: '2026.03', en: 'Mar 2026' },
      status: 'completed',
      desc:   { zh: '参与论文修改撰写，构建“制度—方向—情感”三位一体的实施路径，提出“政策—技术—主体—实践”整体分析框架。',
                en: 'Contributed to manuscript revision, developing an “institution–direction–emotion” implementation path and a holistic “policy–technology–actor–practice” analytical framework.' }
    },
    {
      name:   { zh: '科学数据共享与交易', en: 'Scientific Data Sharing and Trading' },
      role:   { zh: '全文初稿撰写', en: 'Draft Manuscript' },
      period: { zh: '2025.10 – 2025.11', en: 'Oct 2025 – Nov 2025' },
      status: 'completed',
      desc:   { zh: '独立完成全文初稿，设计自适应智能合约、可插拔条款库与可信预言机协同的科学数据交易机制，破解数据“定价难、权益乱、激励弱”困境。',
                en: 'Independently drafted the full manuscript, designing a scientific data trading mechanism that combines adaptive smart contracts, a pluggable clause library, and trusted oracles.' }
    },
    {
      name:   { zh: '重庆二手房数据分析实训', en: 'Chongqing Second-hand Housing Data Analysis (Course Practicum)' },
      role:   { zh: '项目负责人', en: 'Project Lead' },
      period: { zh: '2025.10 – 2025.12', en: 'Oct 2025 – Dec 2025' },
      status: 'completed',
      desc:   { zh: '使用 Python 爬虫采集 10 万余条真实房源数据，借助 Pandas、NumPy 完成清洗与特征工程，运用 Matplotlib、Seaborn、ECharts 绘制 38 张可视化图表，并训练线性回归、随机森林等模型进行深度挖掘。',
                en: 'Collected 100,000+ housing records with a Python crawler, cleaned and engineered features with Pandas and NumPy, produced 38 visualizations, and trained regression and random-forest models.' }
    },
    {
      name:   { zh: '全国大数据专业开设情况数据可视化', en: 'Visualization of Big-data Program Establishment Across China' },
      role:   { zh: '独立完成', en: 'Independent' },
      period: { zh: '2025.10 – 2025.12', en: 'Oct 2025 – Dec 2025' },
      status: 'completed',
      desc:   { zh: '从教育部官网采集全国各省市近 5 年大数据管理与应用专业开设数据 223 条，使用 pandas、matplotlib、seaborn、pyecharts 制作 18 张可视化图表，分析地区经济水平与教育政策对专业布点的影响。',
                en: 'Collected 223 records on the establishment of big-data programs nationwide, produced 18 charts with pandas, matplotlib, seaborn, and pyecharts, and analyzed the influence of regional economy and education policy.' }
    }
  ],

  /* ── 07 荣誉奖项（按类别分组） ───────────────────────── */
  awards: [
    {
      group: { zh: '奖学金', en: 'Scholarships' },
      items: [
        { name: { zh: '国家奖学金（2023–2024）', en: 'National Scholarship (2023–2024)' },
          level: { zh: '国家级', en: 'National' } },
        { name: { zh: '西南大学一等奖学金（2024–2025）', en: 'SWU First-Class Scholarship (2024–2025)' },
          level: { zh: '校级', en: 'University' } },
        { name: { zh: '西南大学一等奖学金（2025–2026）', en: 'SWU First-Class Scholarship (2025–2026)' },
          level: { zh: '校级', en: 'University' } }
      ]
    },
    {
      group: { zh: '竞赛奖项', en: 'Competitions & Awards' },
      items: [
        { name: { zh: '第十五届“挑战杯”中国大学生创业计划竞赛', en: 'The 15th “Challenge Cup” China College Students’ Entrepreneurship Competition' },
          level: { zh: '省级特等奖', en: 'Provincial Special Prize' } },
        { name: { zh: '中国国际大学生创新大赛（2026）· 北斗乐跑', en: 'China International College Students’ Innovation Competition (2026) · Beidou Lerun' },
          level: { zh: '省级一等奖', en: 'Provincial First Prize' } },
        { name: { zh: '中国国际大学生创新大赛（2026）· 北斗遨翔', en: 'China International College Students’ Innovation Competition (2026) · Beidou Aoxiang' },
          level: { zh: '省级一等奖', en: 'Provincial First Prize' } },
        { name: { zh: '第三届重庆市大学生商科创新能力大赛（财务大数据赛道）', en: 'The 3rd Chongqing College Students’ Business Innovation Competition (Financial Big Data Track)' },
          level: { zh: '省级二等奖', en: 'Provincial Second Prize' } },
        { name: { zh: '重庆市首届大学生新文科实践创新大赛', en: 'The 1st Chongqing College Students’ New Liberal Arts Practice Innovation Competition' },
          level: { zh: '省级二等奖', en: 'Provincial Second Prize' } },
        { name: { zh: '西南大学第六届“含弘杯”大学生创业计划竞赛', en: 'The 6th “Hanhong Cup” Entrepreneurship Competition, Southwest University' },
          level: { zh: '校级一等奖', en: 'University First Prize' } },
        { name: { zh: '西南大学“北斗之星”揭榜挂帅专项赛（负责人）', en: '“Beidou Star” Open Call Competition, Southwest University (Team Lead)' },
          level: { zh: '校级二等奖', en: 'University Second Prize' } },
        { name: { zh: '西南大学“荣光双阅·智链云帆”信息素养竞赛', en: 'Information Literacy Competition, Southwest University' },
          level: { zh: '校级一等奖', en: 'University First Prize' } },
        { name: { zh: '西南大学“4·23 世界读书日”朗读大赛', en: 'SWU World Book Day Recitation Contest' },
          level: { zh: '校级二等奖', en: 'University Second Prize' } },
        { name: { zh: '西南大学第二届“我心中的好老师”演讲比赛', en: 'The 2nd “A Good Teacher in My Heart” Speech Contest, Southwest University' },
          level: { zh: '校级三等奖', en: 'University Third Prize' } },
        { name: { zh: '西南大学“追光吧·少年”青春励志摄影比赛', en: 'SWU “Chase the Light, Youth” Inspirational Photography Contest' },
          level: { zh: '校级三等奖', en: 'University Third Prize' } }
      ]
    },
    {
      group: { zh: '荣誉称号', en: 'Honors' },
      items: [
        { name: { zh: '西南大学优秀学习奖（2023–2024）', en: 'SWU Outstanding Academic Award (2023–2024)' },
          level: { zh: '校级', en: 'University' } },
        { name: { zh: '西南大学三好学生（2025–2026）', en: 'SWU Merit Student (2025–2026)' },
          level: { zh: '校级', en: 'University' } },
        { name: { zh: '西南大学志愿服务奖（2024–2025）', en: 'SWU Volunteer Service Award (2024–2025)' },
          level: { zh: '校级', en: 'University' } },
        { name: { zh: '西南大学优秀共青团员（2024）', en: 'SWU Outstanding Communist Youth League Member (2024)' },
          level: { zh: '校级', en: 'University' } },
        { name: { zh: '西南大学优秀共青团干部（2025）', en: 'SWU Outstanding Communist Youth League Cadre (2025)' },
          level: { zh: '校级', en: 'University' } },
        { name: { zh: '西南大学五星级志愿者（志愿时长 300+ 小时）', en: 'SWU Five-Star Volunteer (300+ hours of service)' },
          level: { zh: '校级', en: 'University' } }
      ]
    }
  ]
};
