---
title: 日志书写规范
date: 2023/06/07
categories:
  - 总结
---

## 卡片

::: tip
这是一个提示
:::

::: info
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

## 代码组

:::: code-group
::: code-group-item FOO

```js
//代码块1;
const foo = 'foo';
```

:::
::: code-group-item BAR

```js
//代码块2;
const bar = 'bar';
```

:::
::::

## 单行代码

```bash
//这是一个命令行
npm run dev
npm run build
```

## 链接

[link](https://www.bilibili.com/video/BV1As411R7e3?from=search&seid=8836255303393949866)

## 图标

vuepress-theme-reco@2.x 是通过 Xicons 来配置图标的，Xicons 只集成了 [carbon](https://carbondesignsystem.com/guidelines/icons/library/) 一种图标，几乎可以满足绝大部分场景。

如果想要在 markdown 中输出一个星星图标 <xicons icon="Star" />，你就可以在 markdown 中这样比编辑代码：

```vue
<xicons icon="Star" />
```

## 表格

| 标题1 | 标题2 | 标题3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |