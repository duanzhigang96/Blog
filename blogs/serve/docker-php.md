---
title: docker 部署php-apache遇到的问题
date: 2021-07-05
tags:
 - 服务器
categories: 
 - 服务器

---

1. docker pull php:5.6-apache 
   docker run -d --name bcxa -p 4040:80 -v G:\education\bcxa:/var/www/html php:5.6-apache
   docker exec -it 3f9a3a79c772 /bin/bash
2. 缺失拓展

3. 缺少mysql.so和mysqli.so

解决方案：

```bash
 cd /usr/local/etc/php
 cp php.ini-development php.ini
 vi php.ini
 ```
1. 在php.ini添加以下俩列
 ```bash
 extension=mysql.so
 extension=mysqli.so
 ```
2. 进入安装拓展目录执行以下命令

 ```bash
 cd /usr/local/bin
 ./docker-php-ext-install mysql
 ./docker-php-ext-install mysqli
 ```
3. 开启rewrite模块

 ```bash
 ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load
 ```
4. 确定其他模块是否开启

 ```bash
 cd /etc/apache2/mods-enabled
 ```
5. 开启apache功能

 ```xml
 <Directory /mnt/d/work/bcxa/>
    Options Indexes FollowSymLinks
    AllowOverride All
    Order Allow,Deny
    Allow from all
    Require all granted
 </Directory>
 ```

          

