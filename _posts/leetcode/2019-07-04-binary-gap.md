---
layout: post
title:  "Number Complement"
category: leetcode
tag: bit operations
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a positive integer `N`, find and return the longest distance between two consecutive 1's in the binary representation of `N`.

If there aren't two consecutive 1's, return 0.

**Example 1:**

```
Input: 22
Output: 2
Explanation:
22 in binary is 0b10110.
In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
The first consecutive pair of 1's have distance 2.
The second consecutive pair of 1's have distance 1.
The answer is the largest of these two distances, which is 2.
```

**Example 2:**

```
Input: 5
Output: 2
Explanation:
5 in binary is 0b101.
```

**Example 3:**

```
Input: 6
Output: 1
Explanation:
6 in binary is 0b110.
```

**Example 4:**

```
Input: 8
Output: 0
Explanation:
8 in binary is 0b1000.
There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.
```



**Note:**

- `1 <= N <= 10^9`



## Solution

```java
class Solution {
    public int binaryGap(int N) {

        int highestGap = 0;
        int curGap = 0;
        boolean looking = false;

        while (N != 0) {

            // If the LSB is a 1
            if ((N & 1) == 1) {
                if (looking) {
                    highestGap = curGap > highestGap ? curGap : highestGap;
                    curGap = 0;
                }
                looking = true;
            }

            // Increment the gap length
            if (looking)
                curGap++;

            N >>>= 1;
        }

        return highestGap;
    }
}
```

## How it works

Starting from the right hand side of the bit string, we look for 1's, and count the distance between them. Upon finding our second+ 1, we check if the distance between the 1's is greater than the current highest total. If it is, it is the new highest.
