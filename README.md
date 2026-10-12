# 延琳慧 · 个人学术主页

一个零依赖的静态个人主页，纯 HTML / CSS / JavaScript，中英双语可切换。
无需安装任何工具、无需构建，双击 `index.html` 即可本地预览。

## 文件结构

```
profile/
├── index.html          # 页面骨架：中文原文 + data-i18n 标记
├── css/style.css       # 全部样式（配色变量在最顶部）
├── js/i18n.js          # 英文文案字典 + 语言切换逻辑
├── js/data.js          # ★ 结构化内容：成果 / 项目 / 奖项 / 经历
├── js/main.js          # 列表渲染器（年份分组、自动编号）
├── assets/img/         # 头像 avatar.jpg、网站图标 favicon.svg
├── assets/img/life/    # 生活剪影照片（life-1.jpg … life-8.jpg）
└── 保研/               # ⚠️ 申请材料，已在 .gitignore 中忽略，不会上传
```

## 日常维护

### 加一项成果（论文 / 专利 / 软著）

编辑 `js/data.js`，在 `publications` 数组里加一个对象。年份分组和 `[1..N]`
编号会自动重排，**不用改 HTML 或 CSS**：

```js
{
  id: 'p2026-xxx',                  // 页面锚点，全站唯一
  type: 'conference',               // conference | journal | preprint | patent | software
  year: 2026, month: 5,             // month 仅用于同一年内排序
  title: 'English Title',           // 语言无关，直接写字符串
  // 中文标题用 { zh: '…', en: '…' }
  authors: [
    { name: 'Linhui YAN', me: true },   // me: true 会加粗
    { name: 'Liangming WEN' }
  ],
  venue:  { zh: '会议全称 · 地点', en: 'Full Conference Name, City, Country' },
  note:   { zh: '第一作者 · EI 收录', en: 'First author · EI indexed' },  // 可选
  volume: '21', issue: '6', pages: '1–10',   // 可选
  doi:   '10.xxxx/xxxxx',           // 可选
  pdf:   './assets/papers/x.pdf',   // 可选
  bibtex: '@article{...}'           // 可选，页面折叠显示
}
```

其余板块同理，都在 `js/data.js` 里：

| 板块 | 数组名 | 备注 |
|---|---|---|
| 研究方向 | `interests` | 关键词 + 一句描述 |
| 教育经历 | `education` | `period` / `head` / `sub` |
| 实习经历 | `work` | 同上 |
| 学生工作与志愿服务 | `service` | 同上 |
| 课程成绩（摘要） | `courseStats` | `value` + `label`，排成一行数字 |
| 课程成绩（明细） | `courses` | 按 `group` 分组，每门课 `{ name, grade }`；`grade` 是成绩字符串，页面按 95+ / 90–94 / 90 以下三档自动着色 |
| 学术成果 | `publications` | 见上方 schema |
| 科研项目 | `projects` | `status` 取 `ongoing` 或 `completed` |
| 荣誉奖项 | `awards` | 按 `group` 分组，每组一个 `items` 数组 |

规则只有一条——**会随语言变化的字段写成 `{ zh: '…', en: '…' }`**，
论文标题、人名、年份、卷期页这类语言无关的字段直接写字符串。

### 改中文 / 英文文案

- 中文：直接改 `index.html` 里对应元素的文字（中文是唯一来源）
- 英文：改 `js/i18n.js` 里 `EN` 字典中同名 key 的值

### 换头像

替换 `assets/img/avatar.jpg` 即可（保持文件名）。当前框是 2:3 竖版，
用正方形照片也可以，浏览器会居中裁切。

### 换配色

`css/style.css` 顶部的 `:root` 变量。改 `--crimson` 一个值即可换掉全站强调色。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（Public）。
   - 若仓库名为 `你的用户名.github.io`，站点地址是 `https://你的用户名.github.io/`（推荐）；
   - 否则站点地址是 `https://你的用户名.github.io/仓库名/`。两者都无需改代码。
2. 本地推送（`保研/` 已被忽略，不会上传）：
   ```bash
   git add -A
   git status          # 确认列表里没有「保研」目录
   git commit -m "Update site content"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
3. 仓库 `Settings → Pages → Source` 选 `Deploy from a branch`，
   分支选 `main`、目录选 `/ (root)`，保存。
4. 等 1–2 分钟，访问站点地址即可。

## 语言切换

- 默认中文。访客点右上角 `中文 | EN` 切换，选择会记在浏览器里。
- 在网址后加 `?lang=en` 直接把英文版发给别人，例如
  `https://你的用户名.github.io/?lang=en`。

## ⚠️ 隐私提醒

`保研/` 目录含身份证、学生证、成绩单等敏感材料，**已加入 `.gitignore`**。
推送到 GitHub 前请务必用 `git status` 确认该目录没有被跟踪。
GitHub Pages 站点是全网公开、可被搜索引擎收录的，任何提交上去的内容都无法撤回。
