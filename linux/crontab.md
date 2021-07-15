---
title: Crontab
date: 2021-07-15
tags:
 - Linux
categories: 
 - Linux
---

## 简介

Linux crontab是用来定期执行程序的命令。

当安装完成操作系统之后，默认便会启动此任务调度命令。

crond 命令每分锺会定期检查是否有要执行的工作，如果有要执行的工作便会自动执行该工作。

注意：新创建的 cron 任务，不会马上执行，至少要过 2 分钟后才可以，当然你可以重启 cron 来马上执行。

而 linux 任务调度的工作主要分为以下两类：

1、系统执行的工作：系统周期性所要执行的工作，如备份系统数据、清理缓存
2、个人执行的工作：某个用户定期要做的工作，例如每隔10分钟检查邮件服务器是否有新信，这些工作可由每个用户自行设置

## 安装
```cmd
ubuntu安装cron:
apt-get install cron

centOS安装:
yum install vixie-cron
yum install crontabs
```

## 常规命令
```cmd
启动：service cron start
重启：service cron restart
停止：service cron stop
检查状态：service cron status
查询cron可用的命令：service cron
检查Cronta工具是否安装：crontab -l
编辑crontab -e
```
## 语法
```cmd
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期中星期几 (0 - 6) (星期天 为0)
|    |    |    +---------- 月份 (1 - 12) 
|    |    +--------------- 一个月中的第几天 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
```

## 语法示例：
```bash
0 */2 * * * /sbin/service httpd restart  意思是每两个小时重启一次apache 

50 7 * * * /sbin/service sshd start  意思是每天7：50开启ssh服务 

50 22 * * * /sbin/service sshd stop  意思是每天22：50关闭ssh服务 

0 0 1,15 * * fsck /home  每月1号和15号检查/home 磁盘 

1 * * * * /home/bruce/backup  每小时的第一分执行 /home/bruce/backup这个文件 

00 03 * * 1-5 find /home "*.xxx" -mtime +4 -exec rm {} \;  每周一至周五3点钟，在目录/home中，查找文件名为*.xxx的文件，并删除4天前的文件。

30 6 */10 * * ls  意思是每月的1、11、21、31日是的6：30执行一次ls命令

```
## 应用示例
1. 需要执行的文件
```php
<?php
/**
 * 删除一个月前数据
 *
 * @author cyber
 * @version 1.0
 */

// 获取当前路径
define('BASE_PATH',str_replace('\\','/',realpath(dirname(__FILE__).'/'))."/");
$BASE_PATH = str_replace("/controllers/commands/", "", BASE_PATH);

include($BASE_PATH.'/config/database.php');

$databaseConfig = new DATABASE_CONFIG();
$conn=null;
global $conn;

$host = $databaseConfig->default["host"];
$login = $databaseConfig->default["login"];
$password = $databaseConfig->default["password"];
$database = $databaseConfig->default["database"];


try{
    $conn=mysqli_connect($host, $login, $password);
    mysqli_select_db($conn, $database);
    $sql = "DELETE FROM xxx WHERE regist_datetime IS NOT NULL AND DATE( regist_datetime ) <= DATE( DATE_SUB( NOW(), INTERVAL 1 MONTH )) AND category = 'sssss'";
    mysqli_query($conn, $sql);
}catch (Exception $e){}
$conn->close();
?>
```
2. docker 容器配置crontab
```cmd
apt-get install cron
apt-get install rsyslog
service rsyslog start
```
3. crontab执行还遇到了一个坑，手动执行脚本没有问题，因为读取了环境变量，php要写绝对路径  /usr/local/bin/php commands
4. crontab -e 添加以下代码
```cmd
0 0 * * *  /usr/bin/php /home/xxx/lib/help/controllers/xxxx_batch.php
```