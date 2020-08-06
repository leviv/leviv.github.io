---
layout: post
title:  "Groups of Special-Equivalent Strings"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

You are given an array `A` of strings.

A *move onto `S`* consists of swapping any two even indexed characters of `S`, or any two odd indexed characters of `S`.

Two strings `S` and `T` are *special-equivalent* if after any number of *moves onto `S`*, `S == T`.

For example, `S = "zzxy"` and `T = "xyzz"` are special-equivalent because we may make the moves `"zzxy" -> "xzzy" -> "xyzz"` that swap `S[0]` and `S[2]`, then `S[1]` and `S[3]`.

Now, a *group of special-equivalent strings from `A`* is a non-empty subset of A such that:

1. Every pair of strings in the group are special equivalent, and;
2. The group is the largest size possible (ie., there isn't a string S not in the group such that S is special equivalent to every string in the group)

Return the number of groups of special-equivalent strings from `A`.

**Example 1:**

```
Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
Output: 3
Explanation:
One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings are all pairwise special equivalent to these.

The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in particular, "zzxy" is not special equivalent to "zzyx".
```

**Example 2:**

```
Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
```

**Note:**

- `1 <= A.length <= 1000`
- `1 <= A[i].length <= 20`
- All `A[i]` have the same length.
- All `A[i]` consist of only lowercase letters.

## Solution

```java
class Solution {
  public int numSpecialEquivGroups(String[] A) {
    HashSet<String> uniqueBitmaps = new HashSet<>();

    // Loop through all of the given words
    for (String str : A) {

      // Create array representations of the letters and their frequency
      int[] newOddBitmap = new int['z' - 'a' + 1];
      int[] newEvenBitmap = new int['z' - 'a' + 1];

      // Loop through each char in the string to add it's frequency to the respectivearray
      for (int i = 0; i < str.length(); i++) {
        char c = str.charAt(i);
        if (i % 2 == 1) {
          newOddBitmap[c - 'a']++;
        } else {
          newEvenBitmap[c - 'a']++;
        }
      }

      // Convert the arrays to a string because java will compare
      // addresses of arrays to determine uniqueness, NOT value
      uniqueBitmaps.add(Arrays.toString(newOddBitmap) +
                       Arrays.toString(newEvenBitmap));
    }

    return uniqueBitmaps.size();
  }
}
```



## Why This Works

The *special equivalent* part of this problem can be confusing, but how I approached it was that I realized if you can perform a swapping of any two even and any two odd characters, then *special equivalent* really means that two strings need to have the exact same even letters and the exact same odd letters, although in any order. To implement this, each word is turned into 2 array of ints(odd and even), 1-26, that represent the 26 letters of the alphabet. We use a hashset to store the array representation of the words, because a hashset will ensure that all of the elements in the set are unique. Becasue words that are *special equivalent* will not be unique, we know that every element in the set will represent a group of *special equivalent* strings, and thus the size of the set is the number of groups.
