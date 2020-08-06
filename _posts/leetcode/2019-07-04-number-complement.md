---
layout: post
title:  "Number Complement"
category: leetcode
tag: bit operations
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

**Note:**

1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2. You could assume no leading zero bit in the integer’s binary representation.

**Example 1:**

```
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

**Example 2:**

```
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

## Solution

```java
class Solution {
    public int findComplement(int num) {
        int numShifts = 0;

        while (num >> numShifts != 0) {
            numShifts++;
        }

        // Unsigned right shift
        int mask = 0xffffffff >>> (32 - numShifts);
        return num ^ mask;
    }
}
```

## How it works

The while loop essentially counts how long the the binary string is using a right shift. Then we need to create a mask that is the same length as the binary representation of that number. Using xor (^) with a mask of all 1's (0xffffffff) essentially flips all 0's to 1's and 1's to 0's.
