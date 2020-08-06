---
layout: post
title:  "Friend Circles"
category: leetcode
tag: union find
---

<span style="color:orange;">Leetcode Medium</span>

## Problem

There are **N** students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a **direct** friend of B, and B is a **direct** friend of C, then A is an **indirect** friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

Given a **N\*N** matrix **M** representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are **direct** friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

**Example 1:**

```
Input:
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle.
The 2nd student himself is in a friend circle. So return 2.
```

**Example 2:**

```
Input:
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends,
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
```

**Note:**

1. N is in range [1,200].
2. M\[i][i] = 1 for all students.
3. If M\[i][j] = 1, then M[j][i] = 1.

## Solution

```java
import java.util.Arrays;

class Solution {
    public int findCircleNum(int[][] M) {
        int res = 0;

        for (int r = 0; r < M.length; r++) {
            res += exploreFriends(M, r);;
         }

        return res;
    }

    /*
     * Get all of the friends of r, recursively
     */
    public int exploreFriends(int[][] M, int r) {

        int res = 0;

        // Loop through all the friends in this row
        for (int c = 0; c < M[0].length; c++) {
            if (M[r][c] == 1) {
                res = 1;
                // Make sure we don't count the friend twice
                 M[r][c] = -1;
                exploreFriends(M, c);

            // We've seen this friend before
            } else if (M[r][c] == -1) {
                return 0;
            } else {
              M[r][c] = -1;
            }          
        }

        return res;
    }
}
```

## Why this works

Whenever we encounter a friendship between one student and another, we explore all of the friends that **that** friend has, recursively, until we eventually find all of the friends that make up a single friend circle. Then we mark that spot in the array as visited (-1), so that we never count that friend circle again. This is a kind of depth first search that allows to to find all of the friend circles one at a time.
