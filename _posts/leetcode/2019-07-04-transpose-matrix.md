---
layout: post
title:  "Transpose Matrix"
category: leetcode
tag: arrays
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a matrix `A`, return the transpose of `A`.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

**Example 1:**

```
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
```

**Example 2:**

```
Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
```

**Note:**

1. `1 <= A.length <= 1000`
2. `1 <= A[0].length <= 1000`

## Solution

```java
class Solution {
    public int[][] transpose(int[][] A) {
        int[][] res = new int[A[0].length][A.length];

        for (int r = 0; r < A.length; r++) {
            for (int c = 0; c < A[0].length; c++) {
                // Place the element, switching row and col
                res[c][r] = A[r][c];
            }
        }

        return res;
    }
}
```

## How it works

We start by creating an array with the dimensions switched, as we are not guarenteed that the array will be square. We then visit each element and switch the row with the column in the resulting matrix.
