---
layout: post
title:  "Detect Capital"
category: leetcode
tag: string manipulation
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

1. All letters in this word are capitals, like "USA".
2. All letters in this word are not capitals, like "leetcode".
3. Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.

**Example 1:**

```
Input: "USA"
Output: True
```

**Example 2:**

```
Input: "FlaG"
Output: False
```

**Note:** The input will be a non-empty word consisting of uppercase and lowercase latin letters.

# Solution

```java
class Solution {
    public boolean detectCapitalUse(String word) {
        // Special case if there is 1 or 0 letters
        if (word.length() < 2)
            return true;

        boolean isCap = word.charAt(1) < 97;

        // If the format is aAAA
        if (isCap && word.charAt(0) >= 97)
            return false;

        // Check to make sure that all of the letters match casing
        for (int i = 2; i < word.length(); i++)
            if ((word.charAt(i) < 97) != isCap)
                return false;

        return true;
    }
}
```

## Why it works

I used the fact that any letter below the ASCII value of 97 is uppercase, and anything above or equal to is lowercase (as 'a' is ASCII value 97).
