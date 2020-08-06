---
layout: post
title:  "Valid Palindrome"
category: leetcode
tag: string manipulation
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Note:** For the purpose of this problem, we define empty string as valid palindrome.

**Example 1:**

```
Input: "A man, a plan, a canal: Panama"
Output: true
```

**Example 2:**

```
Input: "race a car"
Output: false
```

## Solution

```java
class Solution {
    public boolean isPalindrome(String s) {
        // Ignore case and non-alphanumeric chars
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        for (int i = 0; i < s.length() / 2; i++) {
            char cur = s.charAt(i);

            if (cur != s.charAt(s.length() - 1 - i))
                return false;
        }

        return true;
    }

}
```

## Why it works

I used the regex expression `[^a-zA-Z0-9]` to select all non-alphanumberic and replace them with an empty string. Then from there we just need to check that the corresponding letters match up on either side of the string.
