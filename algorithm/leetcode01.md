---
title: 二分法
date: 2021-07-05
tags:
 - 算法
categories: 
 - 算法
---

## 二分查找

### 简介

首先，假设表中元素是按升序排列，将表中间位置记录的[关键字](https://baike.baidu.com/item/关键字)与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置[记录](https://baike.baidu.com/item/记录/1837758)将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，直到找到满足条件的[记录](https://baike.baidu.com/item/记录/1837758)，使查找成功，或直到子表不存在为止，此时查找不成功。

### 前提

1. 必须采用顺序存储结构
2. 必须按照关键字按照顺序排列

### 代码

```java
int binarySearch(int[] nums, int target) {
    int left = 0; 
    int right = nums.length - 1;
    while(left <= right) {
        int mid = (right + left) / 2; //以中间值为间隔
        if(nums[mid] == target)
            return mid; 
        else if (nums[mid] < target)
            left = mid + 1;
        else if (nums[mid] > target)
            right = mid - 1;
        }
    return -1;
}
```
<Vssue  />


