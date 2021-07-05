---
title: frp内网穿透实现远程连接
date: 2021-07-05
tags:
 - 服务器
categories: 
 - 服务器
sidebar: 'auto'
---

## 服务器配置

1. 登陆https://github.com/fatedier/frp/releases 根据系统的版本下载所需的程序包

2. 解压压缩文件

   ```bash
   tar -zxvf frp_0.34.3_linux_amd64.tar.gz
   ```

3. 进入解压后的文件夹

   ```
   cd frp_0.34.3_linux_amd64
   ```

4. 打开配置服务器文件frps.ini

   ![image-20210511164835125.png](https://github.com/duanzhigang96/kafukaBlog/blob/main/img/image-20210511164835125.png?raw=true)

   bind_port 为服务器开放的端口 默认就可以

5. .配置完成后运行服务器，指令如下：

   ```bash
   nohup ./frps -c frps.ini > /dev/null 2> /dev/null &
   ```

#### 客户端配置

1. 登陆https://github.com/fatedier/frp/releases 根据系统的版本下载所需的程序包

2. 解压后放到自己的盘下

3. 用cd命令切换到frp_0.34.3_windows_amd64文件夹位置

4. 修改frpc.ini配置文件

   ```bash
   [common]
   server_addr = 121.196.155.76   # 服务器IP地址
   server_port = 7000 # 服务器frp服务端口
   
   [ssh]
   type = tcp
   local_ip = 127.0.0.1  #客户端IP 不需要修改
   local_port = 3389 #客户端端口
   remote_port = 7006 #远程连接时使用的端口 需要提前开启		
   ```

5. 在cmd命令窗口输入frpc -c frpc.ini![image-20210511165546945.png](https://github.com/duanzhigang96/kafukaBlog/blob/main/img/image-20210511165546945.png?raw=true)

6. 开启远程访问权限：（右击我的电脑-属性），如果客户端电脑没有密码需要先设置密码。
7. 在任何一台要访问的电脑搜索中输入remote找到远程桌面连接。
8. 填写访问地址格式:(服务器公网IP：端口号)（114.119.110.120:7006）