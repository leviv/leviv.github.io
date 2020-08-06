---
layout: post
title:  "Intersection of Two Arrays"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given two arrays, write a function to compute their intersection.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

**Note:**

- Each element in the result must be unique.
- The result can be in any order.

## Solution

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
      HashSet<Integer> set1 = new HashSet<>();
      HashSet<Integer> results = new HashSet<>();

      for (int num1: nums1) { set1.add(num1); }
      for (int num2: nums2) {
        if (set1.contains(num2)) {
          results.add(num2);
        }
      }

      int[] resultsArr = new int[results.size()];
      int i = 0;
      for (int num: results){
        resultsArr[i] = num;
        i++;
      }

      return resultsArr;
    }
}
```



## Why This Works

This problem is pretty simple, we find the integers that exist in both arrays using a HashSet and add it to a resulting array.
