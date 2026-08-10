# 新出路官网

新出路的公开介绍页，围绕品牌故事、核心方法、项目共创、业务方向与联系路径展开。

## 本地运行

```bash
npm ci
npm run dev
```

## 质量检查

```bash
npm run check
npm run lint
npm run build
```

## 发布

推送到 `main` 分支后，GitHub Actions 会构建并发布到 GitHub Pages。Vite 会根据 GitHub 仓库名自动设置资源基础路径。

PDF 介绍册的源文件是 `public/xin-chulu-intro.pdf`。如需重排，可在安装 ReportLab 后运行：

```bash
python3 scripts/build_xin_chulu_pdf.py
```

## 内容边界

- 联系入口使用公众号「新出路」关键词，不在网页中收集个人信息。
- 对外案例采用匿名化表达；涉及第三方姓名、媒体、合作品牌或经营数据时，应在获得核实与授权后再补充。
- 原尺寸及未公开素材保留在本地项目的“官网未发布素材备份”目录，不进入公开仓库。
