---
layout: post
title:  "Implement Trie (Prefix Tree)"
category: leetcode
tag: trie
---

<span style="color:orange;">Leetcode Medium</span>

## Problem

Implement a trie with `insert`, `search`, and `startsWith` methods.

**Example:**

```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

**Note:**

- You may assume that all inputs are consist of lowercase letters `a-z`.
- All inputs are guaranteed to be non-empty strings.

## Solution

```java
class Trie {
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

  /** Returns if the word is in the trie. */
  public boolean search(String word) {
    TrieNode tracker = root;

    for (int i = 0; i < word.length(); i++) {
      char curChar = word.charAt(i);

      // If this path has not been seen before
      if (tracker.children[curChar] == null) {
        return false;
      }

      tracker = tracker.children[curChar];
    }

    return tracker.isWord;
  }

  /** Returns if there is any word in the trie that starts with the given prefix. */
  public boolean startsWith(String prefix) {
    TrieNode tracker = root;

    for (int i = 0; i < prefix.length(); i++) {
      char curChar = prefix.charAt(i);

      // If this path has not been seen before
      if (tracker.children[curChar] == null) {
        return false;
      }

      tracker = tracker.children[curChar];
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
```

## Why this works

A [trie](https://en.wikipedia.org/wiki/Trie) is a data structure that is typically used as a fast way to look up prefixes in a given dictionary. It stores letters as nodes and each path to a leaf node (or any node with isWord = true) represents a word in the dictionary.

**insert**

The insert method builds the tree one char at a time. If the path has not been been created yet, we will add a new child node that corresponds to the next char in the sequence. Once we are done traversing we set the final node (the leaf) to isWord = True.

**search**

We traverse the tree one char at a time, and when we are finished traversing the path (if it exists), we check to see that that node represented the ending of a word.

**startsWith**

We do the same process as search, but don't check if the ending node is a word or not, because as long as it exists, there are word(s) that use that string as a prefix.
