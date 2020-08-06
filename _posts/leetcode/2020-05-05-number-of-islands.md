---
layout: post
title:  "Number of Islands"
category: leetcode
tag: union find
---

<span style="color:orange;">Leetcode Medium</span>

## Problem

Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```
Input:
11110
11010
11000
00000

Output: 1
```

**Example 2:**

```
Input:
11000
11000
00100
00011

Output: 3
```

## Solution

```java
class Solution {
  public int numIslands(char[][] grid) {
    int numIslands = 0;

    for (int r = 0; r < grid.length; r++) {
      for (int c = 0; c < grid[r].length; c++) {
        char square = grid[r][c];

        // We're looking at a square of land
        if (square == '1'){
          numIslands++;
          findIsland(grid, r, c);
        }
      }
    }

    return numIslands;
  }

  /*
   * Find an entire island recursively
   */
  public void findIsland(char[][] grid, int r, int c){
    // Base cases for recursion
    // Check row bounds
    if (r < 0 || r >= grid.length) {
      return;
    }

    // Check col bounds
    if (c < 0 || c >= grid[r].length) {
      return;
    }

    // square is water
    if (grid[r][c] == '0'){
      return;
    }

    // Set current grid to water
    grid[r][c] = '0';

    // Check 4 directions
    findIsland(grid, r+1, c);
    findIsland(grid, r-1, c);
    findIsland(grid, r, c+1);
    findIsland(grid, r, c-1);
  }
}
```

## Why this works

When we find land, we check all 4 directions recursively to find all the pieces of land, stopping when we go out of bounds or encounter water. Then we mark the places visited in the given array, and continue finding all of the islands one by one.
