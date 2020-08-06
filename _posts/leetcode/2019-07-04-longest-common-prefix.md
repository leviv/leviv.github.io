---
layout: post
title:  "Longest Common Prefix"
category: leetcode
tag: string manipulation
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.



## Solution

```java
import java.util.Arrays;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Special case, given array is empty
        if (strs.length == 0)
            return "";

        Arrays.sort(strs);

        int i = 0;
        StringBuilder res = new StringBuilder();

        // Grab the first and last string in sorted array
        String first = strs[0];
        String last = strs[strs.length-1];

        // See how many letters they have in common
        while (i < first.length() && i < last.length()) {
             if (first.charAt(i) != last.charAt(i))
                 return res.toString();

            res.append(first.charAt(i));
            i++;
        }

        return res.toString();
    }
}
```

## Why it works

By sorting the array, we will ensure that the strings on either side of the array have the largest difference in characters, and compare those to find the longest common prefix.
