---
layout: post
title:  "Distribute Candies"
category: leetcode
tag: hashmaps and sets
---

<span style="color:green;">Leetcode Easy</span>

## Problem

Given an integer array with **even** length, where different numbers in this array represent different **kinds** of candies. Each number means one candy of the corresponding kind. You need to distribute these candies **equally** in number to brother and sister. Return the maximum number of **kinds** of candies the sister could gain.

**Example 1:**

```
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
The sister has three different kinds of candies.
```

**Example 2:**

```
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of candies.
```

**Note:**

1. The length of the given array is in range [2, 10,000], and will be even.
2. The number in given array is in range [-100,000, 100,000].

## Solution

```java
class Solution {
  public int distributeCandies(int[] candies) {
    HashSet<Integer> uniqueCandy = new HashSet<>();

    for (int candy : candies){
      uniqueCandy.add(candy);
    }

    // We always use every type of candy, but the max we can use is candies/2
    return Math.min(candies.length / 2, uniqueCandy.size());
  }
}
```

### Why it Works

Answering this question really invloves understanding what the question is asking, so read the problem description again if you are having trouble understanding the solution. So because of the problem description, we know that the "maximum number of **kinds** of candies the sister could gain" means that we want to give the sister every possible unique candy. Thus, in the best situation (where we return the highest number), all of the candies the sister has would be unique. In this case, the answer would be the number of candies divided by 2, because her brother still needs to get half. If the sister cannot have all unique candies, we want to give her all of the unique candies possible, which is the total number of unique candies.

The 'uniqueness' problem is solved using a HashSet, because a HashSet's size will only increase when unique items are added.
