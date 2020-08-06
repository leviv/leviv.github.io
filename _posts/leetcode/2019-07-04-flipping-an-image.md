---
layout: post
title:  "Flipping an Image"
category: leetcode
tag: arrays
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a binary matrix `A`, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping `[1, 1, 0]` horizontally results in `[0, 1, 1]`.

To invert an image means that each `0` is replaced by `1`, and each `1` is replaced by `0`. For example, inverting `[0, 1, 1]` results in `[1, 0, 0]`.

**Example 1:**

```
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
```

**Example 2:**

```
Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
```

**Notes:**

- `1 <= A.length = A[0].length <= 20`
- `0 <= A[i][j] <= 1`



## Solution

```java
class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
        for (int r = 0; r < A.length; r++) {

            int middle = A[r].length / 2;

            for (int c = 0; c < middle; c++) {
                int temp = A[r][c] == 0 ? 1 : 0;
                int flippedC = A[0].length - 1 - c;

                A[r][c] = A[r][flippedC] == 0 ? 1 : 0;
                A[r][flippedC] = temp;
            }

            // If there is an odd number of elements in the row
            if (A[r].length % 2 != 0) {
                A[r][middle] = A[r][middle] == 0 ? 1 : 0;
            }
        }

        return A;
    }
}
```

## Why It works

For each row, we loop through half of the row to find the inverse of each int, and flip positions. However, on rows with an odd number of elements, we won't touch the center element, but we still need to flip it, hence the extra check with the if statement.
