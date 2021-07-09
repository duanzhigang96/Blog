---
title: 反转字符串
date: 2021-07-09
tags:
 - 双指针
categories: 
 - 算法
---

## 二分查找

### 简介

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

### 代码

```java
public void reverseString(char[] s) {
        int left = 0;
        int right = s.length -1;
        while (left <= right){
            char tmp = s[left];
            s[left] = s[right];
            s[right] = tmp;
            left++;
            right--;
        }
    }
```


<Vssue  />


