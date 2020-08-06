---
layout: post
title:  "Longest Word in Dictionary"
category: leetcode
tag: trie
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a list of strings `words` representing an English Dictionary, find the longest word in `words` that can be built one character at a time by other words in `words`. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.

**Example 1:**

```
Input:
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation:
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
```



**Example 2:**

```
Input:
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation:
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
```



**Note:**

All the strings in the input will only contain lowercase letters.

The length of `words` will be in the range `[1, 1000]`.

The length of `words[i]` will be in the range `[1, 30]`.

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
      this.word = "";
    }
  }

  public String longestWord(String[] words) {

    Trie trie = new Trie();

    for (String word: words) {
      trie.insert(word);
    }

    return trie.getLongestWord();
  }


  // Nested class that represents a trie data structure
  public class Trie {
    public TrieNode root;

    public Trie (){
      root = new TrieNode();
    }

    // Insert a single word into the trie, adding nodes as we go
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

    // Find the longest word in words that can be built one
    // character at a time by other words in the dictionary
    public String getLongestWord () {
      return helper(root);
    }

    // Recurse all the nodes that can be built by other nodes
    private String helper (TrieNode tracker) {
      String biggestWord = tracker.word;

      for (TrieNode curNode : tracker.children) {
        if (curNode != null && curNode.isWord) {
          String child = helper(curNode);

          // We've found a bigger word
          if (child.length() > biggestWord.length()) {
            biggestWord = child;
          // The two words are the same length
          } else if (child.length() == biggestWord.length()) {
            biggestWord = child.compareTo(biggestWord) > 0 ? biggestWord : child;
          }
        }
      }

      return biggestWord;
    }
  }
}
```

## Why this works

The trie solution I built (namely the `insert` method), is the same as [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/), so if you haven't worked on that problem yet I would suggest giving it a go.

The `helper` method is a recursive method that loops through the entire tree along paths where every node has isWord set to true. From there we keep track of the longest word (with tiebreakers), and update it if we find a longer one.
