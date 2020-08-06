---
layout: post
title:  "Reverse Words in a String III"
category: leetcode
tag: string manipulation
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

**Note:** In the string, each word is separated by single space and there will not be any extra space in the string.



## Solution

```java
class Solution {
    public String reverseWords(String s) {
        String[] split = s.split(" ");
        StringBuilder res = new StringBuilder();

        for (String cur : split) {
            StringBuilder sb = new StringBuilder(cur);
            res.append(sb.reverse());
            res.append(" ");
        }

        // Delete the trailing space
        res.deleteCharAt(res.length()-1);
        return res.toString();
    }
}
```

## Why it works

I use a StringBuilder object to build my final string as it is considerably faster than using a String object.
