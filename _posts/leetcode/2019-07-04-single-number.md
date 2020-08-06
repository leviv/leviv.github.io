---
layout: post
title:  "Single Number"
category: leetcode
tag: bit operations
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a **non-empty** array of integers, every element appears *twice* except for one. Find that single one.

**Note:**

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**

```
Input: [2,2,1]
Output: 1
```

**Example 2:**

```
Input: [4,1,2,1,2]
Output: 4
```

## Solution

```java
class Solution {
    public int singleNumber(int[] nums) {

        for (int i = 1; i < nums.length; i++) {
            nums[i] = nums[i] ^ nums[i-1];
        }

        return nums[nums.length-1];
    }
}
```

## How it works

If you xor (^) 2 (or more) numbers together, the resulting bitstring will represent the difference between the bitstrings. I used this to my advantage to xor all of the numbers together to find the difference between all of them. Since only one number is different and all of the others will cancel out to 0, we will be left with the resulting bitstring.
