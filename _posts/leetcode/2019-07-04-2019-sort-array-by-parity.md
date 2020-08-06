---
layout: post
title:  "Sort Array by Parity"
category: leetcode
tag: arrays
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given an array `A` of non-negative integers, return an array consisting of all the even elements of `A`, followed by all the odd elements of `A`.

You may return any answer array that satisfies this condition.

**Example 1:**

```
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```

**Note:**

1. `1 <= A.length <= 5000`
2. `0 <= A[i] <= 5000`

## Solution

```java
class Solution {
    public int[] sortArrayByParity(int[] A) {
        int length = A.length;
        int[] res = new int[length];
        int oddTracker = length - 1;
        int evenTracker = 0;

        // Loop through each element in the array
        for (int i = 0; i < length; i++) {
            // If the element is odd
            if (A[i] % 2 == 1) {
                res[oddTracker] = A[i];
                oddTracker--;
            // Element is even
            } else {
                res[evenTracker] = A[i];
                evenTracker++;
            }
        }

        return res;
    }
}
```

## How it works

The code makes one pass through the array, and checks if each element is even or odd. It starts by putting all of the even elements at the beginning of the array and the odds at the end, and gradually moves the index for evens/odds backwards and forwards respectively, until all the elements are placed.
