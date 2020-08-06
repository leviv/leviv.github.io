---
layout: post
title:  "Uncommon Words from Two Sentences"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

We are given two sentences `A` and `B`. (A *sentence* is a string of space separated words. Each *word* consists only of lowercase letters.)

A word is *uncommon* if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.

**Example 1:**

```
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
```

**Example 2:**

```
Input: A = "apple apple", B = "banana"
Output: ["banana"]
```

**Note:**

1. `0 <= A.length <= 200`
2. `0 <= B.length <= 200`
3. `A` and `B` both contain only spaces and lowercase letters.

## Solution

```java
class Solution {
    public String[] uncommonFromSentences(String A, String B) {
      HashMap<String, Integer> freq = new HashMap<>();

      // Loop through characters of A and B and get the frequency of each word
      for (String str : (A + " " + B).split(" ")) {
        freq.put(str, freq.getOrDefault(str, 0) + 1);  
      }

      ArrayList<String> res = new ArrayList<>();

      // Find all the words that appeared once
      for (String str : freq.keySet()) {
        if (freq.get(str) == 1) {
          res.add(str);
        }
      }

      // Convert result to an array
      return res.toArray(new String[0]);
    }
}
```



## Why It Works

This problem boils down to wanting to find all words that occur only once across both strings. To do this I loop over both strings and only consider words with a frequency of 1. One interesting feature I used in this solution that I wanted to note is `getOrDefault`, which is part of the Java `Map` interface. This call will either get the value associated with the given key, or return a default (in this case, 0) if that key does not exist in the map. This makes the solution a bit cleaner than the alternative which is:

```java
if (map.containsKey(key)) {
  map.put(key, default);
}
map.put(key, map.get(key) + 1);
```
