---
layout: post
title:  "Word Search III"
category: leetcode
tag: trie
---

<span style="color:red;">Leetcode Hard</span>

## Problem

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

**Example:**

```
Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
```

**Note:**

1. All inputs are consist of lowercase letters `a-z`.
2. The values of `words` are distinct.

## Solution

```java
class Solution {
  // Nested class for a node in the Trie
  public class TrieNode {
    public boolean isWord;
    public TrieNode[] children;
    public String word;

    public TrieNode () {
      this.isWord = false;
      // 127 is the number of ascii characters in java
      this.children = new TrieNode[127];
    }
  }

  public List<String> findWords(char[][] board, String[] words) {
    Trie trie = new Trie();

    // Add all words to the trie
    for (String word: words) {
      trie.insert(word);
    }

    List<String> foundWords = new ArrayList<>();

    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c < board[0].length; c++) {
        findWordsFromCell(trie.root, foundWords, board, r, c);
      }
    }

    return foundWords;
  }

  public void findWordsFromCell (TrieNode cur, List<String> foundWords, char[][] board,
    int r, int c) {

    // Recursion base cases
    // Indices are out of bound
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
      return;
    }

    char curChar = board[r][c];
    TrieNode newNode = cur.children[curChar];

    // There is no possible words that start with this string
    if (newNode == null) {
      return;
    }

    // This is a word
    if (newNode.isWord) {
      foundWords.add(newNode.word);
      // Don't count the same word twice
      newNode.isWord = false;
    }

    // Try all 4 directions and don't come back this way
    board[r][c] = '-';
    findWordsFromCell(newNode, foundWords, board, r-1, c);
    findWordsFromCell(newNode, foundWords, board, r+1, c);
    findWordsFromCell(newNode, foundWords, board, r, c-1);
    findWordsFromCell(newNode, foundWords, board, r, c+1);
    board[r][c] = curChar;
  }


  class Trie {
    public TrieNode root;

    /** Initialize your data structure here. */
    public Trie() {
      root = new TrieNode();
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
      TrieNode tracker = root;

      for (int i = 0; i < word.length(); i++) {
        char curChar = word.charAt(i);

        // If this path has not been seen before
        if (tracker.children[curChar] == null) {
          tracker.children[curChar] = new TrieNode();
        }

        tracker = tracker.children[curChar];
      }

      // We are now at the end of a word
      tracker.isWord = true;
      tracker.word = word;
    }
  }
}
```

## Why this works

The trie solution I built (namely the `insert` method), is the same as [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/), so if you haven't worked on that problem yet I would suggest giving it a go.

First we build the trie with all of the words in the dictionary, and then we loop through the game board. At each cell, we recursively check all 4 directions, at each step building a path down the trie. We stop our recrusion when we've gone out of bounds, if the tree has run out of nodes, or if we visit a cell we've already seen before (shown by a '-' character). Everytime we find a valid word, we add it to the result list, and set isWord to false so that we don't count a word more than once.
