---
title: Patroit · 录入端
description: 锐赛体育智慧平台 — 赛事成绩录入与采集前端
---

<div class="project-page">
<div class="project-header">
  <div class="logo-box">
    <img src="/logos/patroit.svg" alt="Patroit Logo" />
  </div>
  <div>
    <h1>Patroit</h1>
    <span class="role-tag">录入端</span>
  </div>
</div>

## 概述

Patroit 是锐赛体育智慧平台的**赛事成绩录入前端**，面向赛事一线工作人员（裁判员 / 录入员），提供轻量级、高效率的成绩采集界面。基于 Next.js 16 + React 19 + TypeScript 构建，对接 Verlion 后端 REST API，支持现场扫码即用的快速启动方式。

> 仓库地址：[github.com/CN-MRZZJ/Patroit](https://github.com/CN-MRZZJ/Patroit)

## 技术构成

| 类别 | 选型 |
|------|------|
| 框架 | Next.js 16 + React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 数据交互 | 对接 Verlion REST API |

## 核心功能

### 成绩录入

- **编号 + 成绩**双字段录入表单，操作极简
- 已录入成绩列表实时展示，带**跑动总分汇总**
- 录入数据持久化至 `localStorage`，**浏览器刷新不丢失**

<img src="/img/patroit录入.png" alt="Patroit 录入界面" style="width:100%;max-width:700px;height:auto;" />

### URL 参数化启动

通过 URL 查询参数一键初始化录入环境：

```
?init=操作员姓名&event_id=1&athlete_type=成人组
```

参数首次加载后自动存入本地存储，后续访问无需重复传递。适合赛场现场"扫码即用"的快速启动场景。管理员可通过 Patroit-QR-Gen 批量生成带参数的二维码，分发给各裁判员。

### 环境配置

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_API_ENDPOINT` | 后端 API 地址（指向 Verlion） |
| `NEXT_PUBLIC_ORG_NAME` | 组织名称 |

## 典型使用流程

1. 管理员通过 QR 码或链接下发录入入口（含 URL 参数）
2. 录入员打开页面，自动加载赛事、组别配置
3. 逐项录入运动员编号 + 成绩，实时查看累计总分
4. 数据经 Verlion API 持久化，管理端 Dervany 同步可见

---

> 此处展示 Patroit 项目 Logo，可将 `/public/logos/patroit.svg` 替换为实际 Logo 文件。
</div>
