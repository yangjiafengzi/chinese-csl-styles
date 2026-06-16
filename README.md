# 中文学术期刊CSL引文样式

Collection of Chinese CSL (Citation Style Language) files for academic journals.

## 支持的期刊

| 期刊名称 | 引文格式 | 模板来源 |
|---------|---------|---------|
| 社会学研究 | author-date | chicago-author-date |
| 社会 | author-date | 社会学研究 |
| 社会学评论 | author-date | chicago-author-date |
| 清华社会学评论 | author-date | 社会学评论 |
| 开放时代 | author-date | chicago-author-date |
| 武汉大学学报（哲学社会科学版） | numeric | - |

## 安装方法

### 方法一：直接下载
1. 下载需要的 `.csl` 文件
2. 在Zotero中：编辑 → 首选项 → 引用 → 样式管理器
3. 将 `.csl` 文件拖入样式管理器窗口

### 方法二：使用Zotero样式仓库
1. 在Zotero中：编辑 → 首选项 → 引用 → 获取额外样式
2. 搜索期刊名称
3. 点击安装

## 使用方法

1. 在Word中安装Zotero插件
2. 点击"Add/Edit Citation"插入引文
3. 选择对应的CSL样式
4. 在文末点击"Add/Edit Bibliography"生成参考文献列表

## 项目结构

```
中文csl/
├── *.csl                    # CSL引文样式文件
├── 体例说明与参考/          # 各期刊投稿体例说明
├── test/                    # 测试文件
│   ├── test-items.json      # 测试条目（CSL-JSON格式）
│   ├── test-items.bib       # 测试条目（BibTeX格式）
│   ├── expected-output/     # 预期输出样本
│   └── README.md            # 测试说明
└── package.json             # Node.js项目配置
```

## 开发指南

### 环境要求
- Node.js 18+（用于自动化测试）
- Zotero（用于手动测试）

### 运行测试
```bash
# 安装依赖
npm install

# 运行自动化测试
npm test
```

### 修改样式
1. 编辑 `.csl` 文件
2. 运行 `npm test` 验证XML格式
3. 在Zotero中手动测试引文输出
4. 更新 `<info>` 中的 `<updated>` 时间戳

## 许可证

本项目采用 [MIT License](LICENSE) 许可。

## 相关链接

- [CSL规范文档](https://docs.citationstyles.org/en/stable/specification.html)
- [CSL在线验证器](https://validator.citationstyles.org/)
- [Zotero官网](https://www.zotero.org/)
- [中文CSL样式仓库](https://github.com/citation-style-language/styles/blob/master/locales/locales-zh-CN.xml)