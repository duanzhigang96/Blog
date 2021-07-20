---
title: mysql dump 导出数据
date: 2021-07-20
tags:
 - 数据库
categories: 
 - 数据库

---

```bash
# 导出指定表数据当前目录
# -d, --no-data 不导出任何数据，只导出数据库表结构。
# --default-character-set=utf-8 指定字符集导出
#

mysqldump -u username -h 123.111.123.167  -password database database_table --where="shop_id = 904980 and del_flg = 1"  > result.sql

# 导出数据库所有表数据到当前目录
mysqldump -u username -h 123.111.123.167  -password database > result.sql


# 执行 dump 文件 进入到mysql安装目录中的bin目录
create database databaseName character set utf8mb4 collate utf8mb4_general_ci;

use databaseName;

source C:/TEST/result.sql;

```