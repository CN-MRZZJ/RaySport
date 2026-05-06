---
title: Verlion · 后端
description: 锐赛体育智慧平台 — 核心后端服务，提供 REST API 与数据持久化
---

<div class="project-page">
<div class="project-header">
  <div class="logo-box">
    <img src="/logos/verlion.svg" alt="Verlion Logo" />
  </div>
  <div>
    <h1>Verlion</h1>
    <span class="role-tag">后端服务</span>
  </div>
</div>

## 概述

Verlion 是锐赛体育智慧平台的**核心后端服务**，承载全部业务逻辑处理、数据持久化与 API 接口服务。基于 Flask + Python 3.10+ 构建，使用 SQLite 数据库，为 Patroit 录入端与 Dervany 管理端提供统一的 REST API。

> 仓库地址：[github.com/CN-MRZZJ/Verlion](https://github.com/CN-MRZZJ/Verlion)

## 技术构成

| 类别 | 选型 |
|------|------|
| 框架 | Flask（Python 3.10+） |
| 数据库 | SQLite |
| 生产部署 | Waitress（Windows）/ Gunicorn（Linux） |
| API 规范 | RESTful，统一 JSON 响应 |
| 文档 | Swagger UI（`/docs`） |

## 核心功能

### 赛事项目管理

- 比赛项目完整 CRUD
- **项目类型动态管理**（`event_types` 表）：预置田径（track）、田赛（field）、趣味（fun）三类，可扩展自定义类型
- **项目状态流转追踪**：记录 → 排名 → 成绩录入 → 公示
- CSV 批量导入 / 导出

### 运动员管理

- 统一运动员库，分 **竞技组**（competitive）和 **趣味组**（fun）
- 支持 CSV 批量导入，可关联所属单位
- 完整 CRUD 接口

### 成绩录入与多轮次支持

四种计分策略，覆盖所有比赛类型：

| 策略 | 说明 | 适用场景 |
|------|------|----------|
| `time` | 时间（秒） | 径赛：100m、200m、接力等 |
| `length` | 长度（米/厘米） | 田赛：跳远、跳高、铅球等 |
| `count` | 次数（越多越好） | 跳绳、投篮等计数项目 |
| `count_miss` | 失误次数（越少越好） | 射箭脱靶、障碍失误等 |

- 支持**多轮次 / 多次试跳试投**（attempt），取 **最佳成绩**（best）或 **最新成绩**（latest）
- 个人项目与团体项目**分开录入**

### 积分与排名计算

- **可配置积分规则**：个人 / 团体前 8 名对应积分，通过 `PUT /api/v1/rules` 动态调整
- 自动计算**运动员积分榜、部门积分榜**及多维度排名
- 重复计算检测：防止同一成绩重复积分

### 公示与导出

- 4 种公示模板：单人成绩、多人成绩、单轮次、多轮次
- 轮次公示支持 `?attempt_number=N` 参数筛选
- 统一动态模板机制（`row_template` + `start_row` + `max_rows`）
- **XLSX + PDF** 双格式导出预览
- 模板布局通过 JSON 配置文件自定义

### 数据安全

- 破坏性操作需**二次确认**（DELETE 需输入校验码、清空数据需 `CLEAR-N` 动态确认）
- 规则配置首次从 JSON 文件迁移至数据库，后续以 DB 为准

## API 响应规范

所有接口统一返回 JSON：

```json
// 成功
{ "ok": true, ...data }

// 失败（HTTP 400）
{ "ok": false, "error": "错误描述" }

// 分页
{ "ok": true, "items": [...], "total": 100, "page": 1, "page_size": 20 }
```

---

> 此处展示 Verlion 项目 Logo，可将 `/public/logos/verlion.svg` 替换为实际 Logo 文件。
</div>
