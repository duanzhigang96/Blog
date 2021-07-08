---
title: 触发器小案例
date: 2021-07-08
tags:
 - 数据库
categories: 
 - 数据库
sidebar: 'auto'
---

其中用到了 mysql中的FIND_IN_SET（str1，str2）  是精确匹配，字段值以英文”,”分隔 寻找str1在str2中是否出现并且str2必须是以 ”，“  逗号分隔的字符



```sql
--在data_files表插入时将agreement_file_ids设置为null
CREATE TRIGGER `trigger_del_agreement_ids` AFTER INSERT ON `data_files` FOR EACH ROW
--判断是否需要执行更新操作
IF
	(
	SELECT
		(
			EXISTS (
			SELECT DISTINCT
				orders.id 
			FROM
				orders
				INNER JOIN data_files ON FIND_IN_SET( data_files.id, orders.agreement_file_ids ) 
				AND data_files.regist_datetime IS NOT NULL 
				AND DATE( data_files.regist_datetime ) <= DATE(
				DATE_SUB( NOW(), INTERVAL 1 MONTH )) 
				AND data_files.category = 'AGREEMENT' 
			))) THEN
		UPDATE orders 
		SET orders.agreement_file_ids = NULL 
	WHERE
		orders.id IN (
		SELECT
			o.id 
		FROM
			(
			SELECT DISTINCT
				orders.id 
			FROM
				orders
				INNER JOIN data_files ON FIND_IN_SET( data_files.id, orders.agreement_file_ids ) 
				AND data_files.regist_datetime IS NOT NULL 
				AND DATE( data_files.regist_datetime ) <= DATE(
				DATE_SUB( NOW(), INTERVAL 1 MONTH )) 
				AND data_files.category = 'AGREEMENT' 
			) o 
		);
	
END IF 

-- 在orders表中在插入之前删除1个月之前的数据
CREATE TRIGGER `trigger_del_agreement` AFTER INSERT ON `orders` FOR EACH ROW
DELETE 
FROM
	data_files 
WHERE
	regist_datetime IS NOT NULL 
	AND DATE( regist_datetime ) <= DATE(
	DATE_SUB( NOW(), INTERVAL 1 MONTH )) 
	AND category = 'AGREEMENT';
```
