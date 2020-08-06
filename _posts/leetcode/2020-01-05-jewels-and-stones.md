---
layout: post
title:  "Jewels and Stones"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

**Example 1:**

```
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

**Example 2:**

```
Input: J = "z", S = "ZZ"
Output: 0
```

**Note:**

- `S` and `J` will consist of letters and have length at most 50.
- The characters in `J` are distinct.

## Solution

```java
class Solution {
    public int numJewelsInStones(String J, String S) {
        HashSet<Character> jewels = new HashSet<>();

        // Add all the elements to the hashSet
        for (int i = 0; i < J.length(); i++) {
            jewels.add(J.charAt(i));
        }

        // Count the
        int numJewels = 0;
        for (int i = 0; i < S.length(); i++) {
            if (jewels.contains(S.charAt(i))) {
                numJewels++;
            }
        }

        return numJewels;
    }
}
```

## How it works

First we loop through the string containing jewels and add them to a hashSet. This allows for us to loop through the second string and check if those stones are jewels in constant time, as the `contains()` method is O(1) for a hashSet.
