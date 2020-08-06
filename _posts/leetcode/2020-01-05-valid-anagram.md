---
layout: post
title:  "Valid Anagram"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given two strings *s* and *t* , write a function to determine if *t* is an anagram of *s*.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

**Note:**
You may assume the string contains only lowercase alphabets.

**Follow up:**
What if the inputs contain unicode characters? How would you adapt your solution to such case?



## Solution

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        // We can safely assume the two strings are not anagrams
        if (s.length() != t.length())
            return false;

        HashMap<Character, Integer[]> map = new HashMap<>();

        // Add all of the characters and their frequency in the first string
        for (int i = 0; i < s.length(); i++) {
            char curChar = s.charAt(i);

            if (!map.containsKey(curChar))
                map.put(curChar, new Integer[]{0});

            map.get(s.charAt(i))[0]++;
        }

        // Check that all the same letters are in the second string
        for (int i = 0; i < t.length(); i++) {
            char curChar = t.charAt(i);

            if (!map.containsKey(curChar) || map.get(curChar)[0] == 0)
                return false;

            map.get(curChar)[0]--;
        }

        return true;
    }
}
```

## How it works

We add all of the characters and their frequency to a hash map, using an array for the frequency so that we have a mutable object. Then we check to make sure that all of the characters in the second string match those in the first.
