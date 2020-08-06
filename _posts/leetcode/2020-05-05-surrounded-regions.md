---
layout: post
title:  "Surrounded Regions"
category: leetcode
tag: union find
---

<span style="color:orange;">Leetcode Medium</span>

## Problem

Given a 2D board containing `'X'` and `'O'` (**the letter O**), capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

**Example:**

```
X X X X
X O O X
X X O X
X O X X
```

After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X
```

**Explanation:**

Surrounded regions shouldn’t be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.

## Solution

```java
class Solution {
  public void solve(char[][] board) {  
    // Check that the board is large enough to require flips
    if (board.length < 3 || board[0].length < 3) {
      return;
    }

    int numRows = board.length;
    int numCols = board[0].length;

    // Loop through the 4 edges of the board
    for (int r = 0; r < numRows; r++) {
      char firstSquare = board[r][0];
      char lastSquare = board[r][numCols-1];

      if (firstSquare == 'O'){
        findOs(board, r, 0);
      }
      if (lastSquare == 'O'){
        findOs(board, r, numCols-1);
      }
    }

    for (int c = 0; c < numCols; c++) {
      char firstSquare = board[0][c];
      char lastSquare = board[numRows-1][c];

      if (firstSquare == 'O'){
        findOs(board, 0, c);
      }
      if (lastSquare == 'O'){
        findOs(board, numRows-1, c);
      }
    }

    // Go through and flip remaining 'O's and change back '-'s
    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c < board[r].length; c++) {
        char square = board[r][c];

        // We're looking at the letter 'O'
        if (square == 'O'){
          board[r][c] = 'X';
        } else if (square == '-'){
          board[r][c] = 'O';
        }
      }
    }    
  }

  /*
   * Find an entire island recursively
   */
  public void findOs(char[][] board, int r, int c){
    // Base cases for recursion
    // Check row bounds
    if (r < 0 || r >= board.length) {
      return;
    }

    // Check col bounds
    if (c < 0 || c >= board[r].length) {
      return;
    }

    // square is not an 'O'
    if (board[r][c] != 'O'){
      return;
    }

    // Set current board to 'X'
    board[r][c] = '-';

    // Check 4 directions
    findOs(board, r+1, c);
    findOs(board, r-1, c);
    findOs(board, r, c+1);
    findOs(board, r, c-1);
  }
}
```

## Why this works

In this problem, the only time we cannot flip an 'O' character is whenever it is on the edge of the board, or next to an 'O' that is on the edge of the board. Thus, what I do is find all of the 'O's on the 4 edges of the board, and find all of the 'O's connected to them (changing them to '-'s as I go to know which I've visited). Then, after I find all of them, I flip all of the untouched 'O's to 'X's and the '-'s back to 'O's.

The solution to this problem to find all connected O's is very similar to the [number of islands](https://leetcode.com/problems/number-of-islands/) problem in that it uses a depth first search approach. In fact, I copy and pasted the `findOs` method in this solution from my solution to that problem.
