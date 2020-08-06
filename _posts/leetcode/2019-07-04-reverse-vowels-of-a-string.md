---
layout: post
title:  "Reverse Vowels of a String"
category: leetcode
tag: string manipulation
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Write a function that takes a string as input and reverse only the vowels of a string.

**Example 1:**

```
Input: "hello"
Output: "holle"
```

**Example 2:**

```
Input: "leetcode"
Output: "leotcede"
```

**Note:**
The vowels does not include the letter "y".


## Solution

```java
class Solution {
    public String reverseVowels(String s) {

        int start = 0;
        int end = s.length() - 1;
        StringBuilder res = new StringBuilder();

        while (start != s.length()) {

            char curChar = s.charAt(start);

            // If the letter is a vowel
            if (isVowel(curChar)) {

                // Search for a corresponding vowel starting at the end
                while (end > -1 && !isVowel(s.charAt(end))) {
                    end--;
                }

                // If we found another vowel
                if (end != -1) {
                    res.append(s.charAt(end));
                    end--;
                } else {
                    res.append(curChar);
                }

            // The letter was not a vowel, we can append normally
            } else {
                res.append(curChar);
            }

            start++;
        }

        return res.toString();

    }

    /* Helper function to determine if c is a vowel */
    public boolean isVowel (char c) {
        String vowels = "aeiouAEIOU";
        return vowels.indexOf(c) > -1;
    }
}
```

## Why it Works

We traverse the string from the beginning, appending one character at a time to the result until we come across a vowel, at which point we start searching from the end of the string, looking for the corresponding vowel.
