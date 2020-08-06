---
layout: post
title:  "Hamming Distance"
category: leetcode
tag: bit operations
---

<span style="color:green;">Leetcode Easy</span>

## Problem

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.

Given two integers `x` and `y`, calculate the Hamming distance.

**Note:**
0 ≤ `x`, `y` < 231.

**Example:**

```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```



## Solution

```java
class Solution {
    public int hammingDistance(int x, int y) {
        int diff = x ^ y;
        int hammingDist = 0;

        // Count the number of 1's in the bit string
        while (diff != 0) {
            hammingDist += diff & 1;
            diff >>>= 1;
        }

        return hammingDist;
    }
}
```

## Why it works

Using xor (^) will give us a bitstring that has a 1 in all of the places where the bits are different. From there we just need to count the number of 1's in the string to get the hamming distance. We do that by checking if the least significant bit is one, and then moving to the next bit.
