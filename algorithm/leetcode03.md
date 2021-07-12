---
title: 链表的中间节点
date: 2021-07-09
tags:
 - 双指针
categories: 
 - 算法
---

## 快慢指针

### 简介

给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。


### 链表
链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。 相比于线性表顺序结构，操作复杂。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而线性表和顺序表相应的时间复杂度分别是O(logn)和O(1)。

![Image text](../.vuepress/public/algorithm/linked%20list.jpg)


### 代码

```java
/**
 * 第一次编写版本
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode tmpNode = head;
        while (head.next != null){
            if(tmpNode != null && tmpNode.next == null){
                return head;
            }
            head = head.next;
            tmpNode = tmpNode.next;
            if(tmpNode.next != null){
               tmpNode = tmpNode.next;
            }
        }
        return head;
    }
}
```
快慢指针：是定义两根指针，移动的速度一快一慢，以此来创造出不同的差值，通过这个差值来实现不同的需求。

eg：
1. 找中间值
2. 判断链表中的环
3. 删除倒数第n个节点

```java
/**
 * 修正版本
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode tmpNode = head;
        while (tmpNode != null && tmpNode.next != null){
            tmpNode = tmpNode.next.next;
            head = head.next;
        }
        return head;
    }
}
```

<Vssue  />


