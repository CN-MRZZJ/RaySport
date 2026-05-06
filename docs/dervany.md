---
title: Dervany · 管理端
description: 锐赛体育智慧平台 — 赛事运营管理后台，数据看板、赛务管理、报表导出
---

<div class="project-page">
<div class="project-header">
  <div class="logo-box">
    <img src="/logos/dervany.svg" alt="Dervany Logo" />
  </div>
  <div>
    <h1>Dervany</h1>
    <span class="role-tag">管理端</span>
  </div>
</div>

## 概述

Dervany 是锐赛体育智慧平台的**赛事运营管理后台**，面向赛事主管与系统管理员，提供数据看板、赛务管理、规则配置、报表导出等全方位运营工具。基于 Next.js 16（App Router）+ TypeScript + Tailwind CSS 4 构建，编译为纯静态文件，通过 Nginx 部署。

> 仓库地址：[github.com/CN-MRZZJ/Dervany](https://github.com/CN-MRZZJ/Dervany)

## 技术构成

| 类别 | 选型 |
|------|------|
| 框架 | Next.js 16（App Router） |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 图标 | Lucide React |
| 部署 | 静态导出（`out/`） + Nginx |

## 功能模块总览

| 模块 | 页面 | 说明 |
|------|------|------|
| **概览** | 首页仪表盘 | 赛况总览，核心指标一览 |
| **赛务** | 比赛进度 · 成绩录入 · 成绩公示 · 轮次成绩 | 核心赛务全流程 |
| **数据** | 导入中心 · 导出中心 | 数据批量流转 |
| **管理** | 运动员 · 队伍 · 单位 | 基础数据管理 |
| **系统** | 规则配置 · 清理数据 · 系统状态 | 系统配置与运维 |

## 模块详解

### 概览仪表盘

赛事核心指标集中展示：进行中赛事数、参赛人数、项目进度、成绩录入率等，管理者打开即掌握全局。

<img src="/img/dervany主页.png" alt="Dervany 仪表盘主页" style="width:100%;max-width:700px;height:auto;" />

### 赛务模块

**比赛进度** — 查看各项目当前状态（记录 → 排名 → 成绩录入 → 公示），追踪整体赛事推进情况。

**成绩录入** — 管理员侧的成绩录入入口，与 Patroit 共享同一后端 API，适合集中式录入场景。

**成绩公示** — 审核并发布成绩，支持按项目、组别、轮次筛选查看。

<img src="/img/公示.png" alt="Dervany 成绩公示" style="width:100%;max-width:700px;height:auto;" />

**轮次成绩** — 按 `attempt_number` 筛选导出单轮成绩，支持 XLSX / PDF 预览。

<img src="/img/赛程.png" alt="Dervany 赛务 — 赛程管理" style="width:100%;max-width:700px;height:auto;" />

### 数据导入 / 导出

- CSV 批量导入赛事项目、运动员、报名数据
- 数据导出支持筛选条件 + 格式选择
- 导入 / 导出中心统一管理所有数据流转

### 基础数据管理

- **运动员管理**：查看、搜索、编辑全部运动员信息，按竞技组/趣味组筛选

<img src="/img/运动员.png" alt="Dervany 运动员管理" style="width:100%;max-width:700px;height:auto;" />

- **队伍管理**：管理参赛队伍（代表队/院系/班级等），查看队伍积分
- **单位管理**：维护参赛组织单元，支持批量添加

### 规则配置

**积分规则** — 个人 / 团体项目名次对应积分，支持**动态增删**，即时生效。

**成绩策略** — 项目类型（event-type）完整 CRUD：

| 属性 | 说明 |
|------|------|
| 代号 | 类型唯一标识 |
| 中文显示名 | 界面展示名称 |
| 比较策略 | `time` / `length` / `count` / `count_miss` |

通过 `/api/v1/event-types` 管理，前端无需硬编码。

**组别选项** — 运动员 / 项目的可选组别（如"成人组""学生组""教工组"），动态可配。

### 部署方式

项目配置为**静态导出模式**，编译后生成 `out/` 目录，可直接部署至 Nginx：

```bash
npm run build          # 编译到 out/
./deploy.sh 10.0.0.1  # 一键部署至服务器
```

内置 `nginx.conf` 包含 Gzip 压缩、缓存策略、SPA fallback 等生产环境最佳配置。

---

> 此处展示 Dervany 项目 Logo，可将 `/public/logos/dervany.svg` 替换为实际 Logo 文件。
</div>
