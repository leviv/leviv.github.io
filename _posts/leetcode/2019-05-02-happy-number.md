---
layout: post
title:  "Happy Number"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

**Example:**

```
Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

## Submission

```java
class Solution {
  public boolean isHappy(int n) {
    HashSet<Integer> sums = new HashSet<>();

    while (n != 1) {
      n = sumSquareDigits(n);
      // If we've seen this number before it's a cycle
      if (sums.contains(n)) {
        return false;
      }
      sums.add(n);
    }

    return true;
  }

  // Replace the number by the sum of the squared digits
  public int sumSquareDigits(int n) {
    int total = 0;
    // Loop one digit at a time
    while (n != 0) {
      total += (int) Math.pow((n % 10), 2);
      n /= 10;
    }

    return total;
  }
}
```

## Why This Works

We detect if there is a cycle by storing all of the previous sums we see in a hashSet, and if we see it again, it will already be in the set.
