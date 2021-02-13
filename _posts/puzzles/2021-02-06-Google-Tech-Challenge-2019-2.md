---
layout: post
title: "Google Tech Challenge 2019 - Puzzle Level 2"
category: puzzles
tag: puzzles
---

A follow up to my [previous post]({% post_url puzzles/2021-02-06-Google-Tech-Challenge-2019-1 %}). These puzzles were slightly harder, but just as enjoyable.

Puzzles in this level:

- [Animal Crossing](#animal-crossing)
- [Collaboration Radio Station](#collaboration-radio-station)
- [Collect the Tetraforce](#collect-the-tetraforce)
- [Escape the Dungeon](#escape-the-dungeon)
- [Forgotten Foes](#forgotten-foes)
- [Hit the Deck](#hit-the-deck)
- [Miencraft](#miencraft)
- [Na Naaaaaa Na Na Na Na Na Na Naaaa!](#na-naaaaaa-na-na-na-na-na-na-naaaa)
- [Rainbow Road](#rainbow-road)
- [Sequels](#sequels)
- [Summa Cum Laude](#summa-cum-laude)
- [The Nonary Game](#the-nonary-game)

<hr>

## Animal Crossing

Always look both ways and obey all signage before crossing.

![Lots of animals in a grid](/assets/img/2021-02-06-Google-Tech-Challenge-2019/crossing.png)

### Work

First, let's solve the names of animals and characters in the pictures. The numbers in the bottom right represent the number of letters in each's name.

```
Tortoise    Warthog     Rattata     Oyster        Kitten
Wildebeest  Gighee      Piranha     Tigger        Kit Fox
Mongoose    Hedgehog    Mazgamma    Badger        Kangaroo
Seahorse    Hen         Zebra       Beaver        Kermit
Archerfish  Krusher     Orca        Brittle Star  Krill
```

The signs represent the alignment of the words, so first let's align the columns according the the signs, which means all columns right aligned except for the right-most column.

```
  Tortoise    Warthog      Rattata        Oyster  Kitten
Wildebeest     Gighee      Piranha        Tigger  Kit Fox
  Mongoose   Hedgehog     Mazgamma        Badger  Kangaroo
  Seahorse        Hen        Zebra        Beaver  Kermit
Archerfish    Krusher         Orca  Brittle Star  Krill
        S         H              A             R  K
```

Looking vertically at each column, we can see that there is a letter that lines up all the way down. Extracting those letters, we get the word SHARK. Now let's do the same with the rows (which are all left aligned).

```
Tortoise  Wildebeest  Mongoose  Seahorse  Archerfish
Warthog   Gighee      Hedgehog  Hen       Krusher
Rattata   Piranha     Mazgamma  Zebra     Orca
Oyster    Tigger      Badger    Beaver    Brittle Star
Kitten    Kit Fox     Kangaroo  Kermit    Krill
   T       I             G       E         R
```

This gives us the word TIGER. Putting the two together will give us the answer.

### Answer

TIGERSHARK

<hr>

## Collaboration Radio Station

It's time for your team to work together on the soundtrack for your new game. Before you begin, why not look to existing collaborations for inspiration? Pairing up the artists in the best possible way will help spell out the secret to your future success.

## Songs

1.  Song 1: 〇--- ---'- --- (4, 4, 3)
2.  Song 2: -〇- --------- (3, 9)
3.  Song 3: 〇--- ---- (4, 4)
4.  Song 4: 〇- ----- (2, 5)
5.  Song 5: ---〇-- ---- (6, 4)
6.  Song 6: --〇------ (9)
7.  Song 7: --- -- ---- 〇-- (3, 2, 4, 3)

## Solution

〇 〇 〇 〇 〇 〇 〇

## Artist bank

```
Bruno Mars
Chris Stapleton
DJ Snake
Eve
Gwen Stefani
J Balvin
Justin Bieber
Justin Timberlake
Mark Ronson
Post Malone
Shakira
Swae Lee
Willy William
Wyclef Jean
```

### Work

Each of those songs are collaborations, so we just need to find collaborations between the artists in the bank that have the correct number of letters. The numbers in the parenthesis after the dashes just say how many letters are in each word so you don't have to count all of them.

1.  Song 1: **H**IPS DONT LIE Shakira and Wyclef Jean
2.  Song 2: S**A**Y SOMETHING by Chris Stapleton and Justin Timberlake
3.  Song 3: **R**ICH GIRL by Gwen Stefani and Eve
4.  Song 4: **M**I GENTE by J Balvin and Willy William
5.  Song 5: UPT**O**WN FUNK (6, 4) by Bruno Mars and Mark Ronson
6.  Song 6: SU**N**FLOWER by Post Malone and Swae Lee
7.  Song 7: LET ME LOVE **Y**OU by DJ Snake and Justin Bieber

Now we just combine all the circled letters

### Answer

HARMONY

<hr>
## Collect the Tetraforce

It is a dark time. The evil sorceress Ganglia has imprisoned Prince Zander in some kind of weird crystal, and the only thing that can open the crystal without killing him is the combined might of the Tetraforce. Unfortunately, the Tetraforce has been split into four pieces and scattered to the four corners of the land of Midrule. Lane, the Hero of the Ages, has set off on a quest to reunite these pieces and restore the rightful ruler of the land.

Unfortunately, Prince Zander never retained the services of a cartographer to document what Midrule looks like or how to get anywhere, and Lane doesn't believe in asking for directions. Lane knows that the landmass forms a rectangle and that each corner contains a piece of the Tetraforce, but Lane will have to search high and low to figure out how to get there. Help Lane find all four pieces and free the prince!

## Instructions

Start by visiting [/midrule/start](https://techchallenge.withgoogle.com/midrule/start). That page will give you a JSON object with some of the following keys set: NORTH, SOUTH, EAST, WEST, and TETRAFORCE. If TETRAFORCE is set, the corresponding value is the name of the piece of the Tetraforce in that location. The other values are strings with which you can replace start in the URL to access a different location in that direction.

Your answer is **the names of all four Tetraforce pieces**, in reading order (left to right, top to bottom).

Hey! Listen! It's dangerous to go alone. Take your computer! Midrule is very large, so you will need to write a program to traverse the maze in an automated way. Do not attempt to navigate the entire maze by visiting the links manually.

## Example

If the first response is {"WEST": "eXxUbSM7fWY="}, then you would go west by visiting [/midrule/eXxUbSM7fWY=](https://techchallenge.withgoogle.com/midrule/eXxUbSM7fWY=).

Say you explore all of Midrule and it looks like the following:

![Maze with 5 destinations](/assets/img/2021-02-06-Google-Tech-Challenge-2019/maze.png)

Then your answer would be **POWER WISDOM COURAGE CHICKENS**.

### Work

I wrote a function to traverse the entire maze, considering the given start (0, 0), and getting the coordinates of all the pieces to the tetraforce relative to the start.

```javascript
// Function to fetch the HTTP endpoint
function httpGet(theUrl) {
  const baseURL = "https://techchallenge.withgoogle.com/midrule/";
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", baseURL + theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

let seen = new Set();

function searchMaze(path, x, y) {
  // Base case, we don't have this direction
  if (path === undefined) {
    return;
  }
  // Base case, we've seen this spot in the maze before
  if (seen.has(path)) {
    return;
  }

  seen.add(path);

  const resp = httpGet(path);

  // See if we've found a tetraforce
  if (resp.TETRAFORCE !== undefined) {
    console.log(resp.TETRAFORCE + " x:" + x + " y:" + y);
  }

  searchMaze(resp.NORTH, x, y + 1);
  searchMaze(resp.SOUTH, x, y - 1);
  searchMaze(resp.EAST, x + 1, y);
  searchMaze(resp.WEST, x - 1, y);
}

searchMaze("eXxUbSM7fWY=", 0, 0);
```

The output of this function is

```
RESILIENCE x:51 y:49
INTELLIGENCE x:-48 y:-50
LUCK x:51 y:-50
PASSION x: -48 y: 49
```

Which easily shows us the order we should put the Tetraforce pieces in to get the answer (top left, top right, bottem left, bottem right).

### Answer

PASSIONRESILIENCEINTELLIGENCELUCK

<hr>
## Escape the Dungeon

### Description

You, an adventurer, have an unfortunate penchant for getting locked in dungeons. The good news is that your captors like to leave the keys to the doors just lying around.

Each dungeon is represented as a sequence of keys `&` and locked doors `|`. You encounter these from left to right, and you can only open a door if you have a key remaining to open it. For example, you can escape the dungeon `&&|&|` because you have enough keys, but `&|&|&&|&|||` is inescapable because you can’t open the last door.

For each dungeon, determine whether you can escape or not, then take the 10 bits this results in (escape = 1, no escape = 0) with the most significant bit first and submit the number represented by this binary string.

```
  &|&|&|&&&|&|||&&&|&&|||&||&||&|&&|||||&|&|&&&&||||&&&|&|&&||||&&&|&&|||&&|&&&|||
  &&||&&&|&||&&&||&|||&&&|&||&&&|||||||&&&&|&&||&||&&|||&|&&&&&&|&|||&&||&|||&&|&|
  &|&|&&&&|&&&|&|||&&&||||||&&|&&&&|&&|&&&|&||&|&&|||&&&|&&&&&|&&&&&&||&|&&||&&|&&
  &|&&|||||&&&&||&&&||||&&&&|||||&||&|&|&|&||&|&&|&|&||||||&&||||||&|&&|&&&&&&||||
  &||&&||&|&||&|&|&&&&&||&&&&&&&||&&|&&||&|&|&|&&&&|&&|||||&&&||||&||&&&|||&&&|||&
  &&&&|&&|&|&&&|||&&&||||&|&|&&|&&&|&&&|||&|&&&|&|&&&|&&|||&|&|&|&|&&|&&&&|&&|||||
  &&|&|&||||&||||&&|||&&&|||&&||&|&|||&||&&&||||&|&|&&|&&&|&&&|&&|&||&|&&&|&&&||||
  &&&||||&&&&&|&|&&&&||&&|&|||&&&||&&&&|&&&|&&|&||&|&&|&||||&|&|||&|&||&||&|&&&&||
  &&&|&&&||&||&||&|&|&||&&&|||||&|&&||&&&|||&|||||||&&|||&&||&|&|&|&|&&&&&&||&|&||
  &&||&&|&&|||||&&&||&|&|&|&|&||&|&||&&&&||||&|&|||||||&|&&&&|&&|||||&|&||&&&||&|&
```

### Work

Notice that we have to convert the binary string generated to a decimal number. I did this within the program, but you could easily generate the number then put it to an online binary converter.

```java
import java.util.*;
import java.io.*;

public class Test {
  public static void main (String[] args) {
    Scanner sc = null;

    // Get the input
    try {
      sc = new Scanner (new File("input.txt"));
    } catch (FileNotFoundException e) {}

    int total = 0;
    int exp = 9;

    // Read in the input
    while (sc.hasNextLine()) {
      String line = sc.nextLine();
      int numKeys = 0;
      int base = 2;

      for (int i = 0; i < line.length(); i++) {
        if (line.charAt(i) == '&') {
          numKeys++;
        } else {
          // Do we have enough keys
          if (numKeys > 0) {
            numKeys--;
          } else {
            base = 0;
            break;
          }
        }
      }
      // Account for 0^0
      if (base == 0 && exp == 0) exp = 2;

      // binary conversion
      total += Math.pow(base, exp);
      exp--;
    }

    System.out.println(total);
  }
}
```

### Answer

144

<hr>
## Forgotten Foes

### Description

A ragtag group of characters keeps foiling all your plans. If only you could remember who!

| Clue                                                           | Character   |
| -------------------------------------------------------------- | ----------- |
| Turtle that breathes fire, steals a princess                   | ---3--      |
| Best friend turned backstabbing assistant                      | ---10---    |
| Likes to throw barrels                                         | --5--- ---- |
| Bald and flies around in a hovercraft                          | 6- -------- |
| Evil guy with superhuman strength, king of thieves             | -----13---  |
| Viridian city gym leader                                       | -2------    |
| Omnipotent female AI who is still alive                        | -----9      |
| Short dinosaur that hates dragons                              | ----12      |
| Majestic and bashful ghost                                     | ---- -11-   |
| The menacing glove that terrorizes Mario, Link, Kirby and more | 1----- ---- |
| Evil ninja who fights turtles                                  | ------7-    |
| Lanky purple mischief maker                                    | ---4---     |
| Greedy, fat, mustachioed man                                   | --8--       |

**Final answer:**

1 2 3 4 5 6 7 8 9 10 11 12 13

### Work

Notice that all of the characters are villains, which makes it easier to deduce what character it is.

| Clue                                                           | Character        |
| -------------------------------------------------------------- | ---------------- |
| Turtle that breathes fire, steals a princess                   | Bowser -> S      |
| Best friend turned backstabbing assistant                      | Cortana -> T     |
| Likes to throw barrels                                         | Donkey Kong -> N |
| Bald and flies around in a hovercraft                          | Dr Robotnik -> D |
| Evil guy with superhuman strength, king of thieves             | Ganondorf -> D   |
| Viridian city gym leader                                       | Giovanni -> I    |
| Omnipotent female AI who is still alive                        | Glados -> S      |
| Short dinosaur that hates dragons                              | Ripto -> O       |
| Majestic and bashful ghost                                     | King Boo -> O    |
| The menacing glove that terrorizes Mario, Link, Kirby and more | Master Hand -> M |
| Evil ninja who fights turtles                                  | Shredder -> E    |
| Lanky purple mischief maker                                    | Waluigi -> U     |
| Greedy, fat, mustachioed man                                   | Wario -R         |

Put the letters in each number square in numberical order and we get the answer.

### Answer

MISUNDERSTOOD

<hr>

## Hit the Deck

### Description

Your favorite digital card game has a hot new deck that is taking the metagame by storm. Unfortunately, you don’t have any of the cards you need for it! **How many card packs are you expected to open** (rounded up to the nearest whole number) before you have all of the cards required to build the deck?

There are 4 rarities of card: common, rare, epic, and legendary. There are

- 80 unique commons numbered 1-80
- 40 unique rares numbered 1-40
- 20 unique epics numbered 1-20
- 10 unique legendaries numbered 1-10

Each pack contains 1 rare and 4 commons, but each card has an independent 20% chance to automatically upgrade to the next rarity when it is opened. Furthermore, this upgrade process can cascade, so there is a possibility for multiple upgrades. For example, a common has a 20% chance to upgrade to rare, and then that rare has a 20% chance to upgrade to epic, and that epic has a 20% chance to upgrade to legendary, so the chance for a common to upgrade to a legendary is 20%*20%*20%=0.8%. Once the rarity is chosen for a card, which card it is of that rarity is chosen uniformly at random.

The deck you would like to build consists of

- 2 copies each of commons 7, 9, 12, 45, 61, and 78
- 2 copies each of rares 3, 6, 20, and 34
- 2 copies each of epics 5, 11, and 19
- 1 copy each of legendaries 1, 4, 8, and 10

### Work

I am not very good at probability. I started looking up geometric distributions and other statistics terms, but I quickly realized it would take me a long time to do all of those calculations, so I instead wrote a simulation that ran 100,000 times and then spit out the average decks needed.

```java
import java.util.*;

public class Sim {
  public static void main (String[] args) {
    int numSims = 100_000;
    int sum = 0;

    for (int i = 0; i < numSims; i++) {
      sum += sim();
    }

    System.out.println(sum * 1.0 / numSims);
  }

  public static int sim (){
    HashMap<Integer, Integer> freqs = new HashMap<>();
    int numDecks = 0;

    while (!containsDeck(freqs)) {
      numDecks++;
      for (int card : openPack()) {
        if (!freqs.containsKey(card)) {
          freqs.put(card, 0);
        }
        freqs.put(card, freqs.get(card) + 1);
      }
    }

    return numDecks;
  }

  public static int[] openPack (){
    int card1 = getCard(0);
    int card2 = getCard(0);
    int card3 = getCard(0);
    int card4 = getCard(0);
    int card5 = getCard(1);

    return new int[]{card1, card2, card3, card4, card5};
  }

  // For rarity, 0 = common, 1 = rare, 2 = epic, 3 = legendary
  public static int getCard (int rarity) {
    // 20% chance of upgrading
    if (rarity < 3 && Math.random() >= .8) {
      return getCard(rarity+1);
    } else {
      int max = 0;
      // Get the bounds
      if (rarity == 0) {
        max = 80;
      } else if (rarity == 1) {
        max = 40;
      } else if (rarity == 2) {
        max = 20;
      } else {
        max = 10;
      }

      Random r = new Random();
      return (rarity * 100) + r.nextInt(max) + 1;
    }
  }

  public static boolean containsDeck (HashMap<Integer, Integer> freqs) {
    int[] commons = new int[]{7,9,12,45,61,78};
    int[] rares = new int[]{103,106,120,134};
    int[] epics = new int[]{205,211,219};
    int[] legendaries = new int[]{301,304,308,310};

    for (int card: commons) {
      if (!freqs.containsKey(card)) return false;
      if (freqs.get(card) < 2) return false;
    }
    for (int card: rares) {
      if (!freqs.containsKey(card)) return false;
      if (freqs.get(card) < 2) return false;
    }
    for (int card: epics) {
      if (!freqs.containsKey(card)) return false;
      if (freqs.get(card) < 2) return false;
    }
    for (int card: legendaries) {
      if (!freqs.containsKey(card)) return false;
    }

    return true;
  }
}
```

I ran this code a few times and the results usually hovered between 334 and 335. After trying both in the submissions box I found the correct answer was 335.

If you're a real nerd do this the math way and send me your work, I'm interested on what the actual calculations look like!

### Answer

335

<hr>

## Miencraft

### Description

Now with 49 crafting tables!

![Minecraft 9x9 table](/assets/img/2021-02-06-Google-Tech-Challenge-2019/table.png)

![Minecraft crafting recipe](/assets/img/2021-02-06-Google-Tech-Challenge-2019/crafts.png)

### Work

I eventually noticed that the grid in the first image is arranged much like a sudoku grid (9x9). I started solving the sudoku puzzle as intended, but quickly just converted each Minecraft item into a number and ran it through an online [sudoku solver](https://www.sudoku-solutions.com/) to get the solution. This gave me this grid:

![Minecraft final 9x9 table](/assets/img/2021-02-06-Google-Tech-Challenge-2019/final-table.png)

From there, I was not sure what to do with all of the crafting recipies listed in the puzzle description, so I started by just finding all of the craft recipies that appeared in the solved sudoku. Each recipie appeared only once, which meant I was on the right track. I started by coloring in the squares that made up a recipie, hoping that a word would appear.

![Minecraft final 9x9 table with creeper shaded in](/assets/img/2021-02-06-Google-Tech-Challenge-2019/creeper.png)

After staring at this for longer than I should have, I eventually relized that it looked exactly like the face of a [creeper](https://minecraft.gamepedia.com/Creeper), one of the most iconic enemies in the game of Minecraft (it's probably easier to see it here because it's colored green).

### Answer

CREEPER

<hr>

## Na Naaaaaa Na Na Na Na Na Na Naaaa!

### Description

**Wonderful _Count_! I see you have found your magic 6mm rolling orb!**
**Your magic rolling orb can pick up things! But they have to be _smaller_ than the current size of the orb!**

Each thing you add increases the orb's size by 20% of the thing's size (rounded down to the mm, so 20% of a 9mm object is 1.8mm, which rounds down to 1mm).

airtftiraput

**Ah, I remember the first time I rolled and picked up things…**
**So go roll and pick up things.**
**Don't worry about running out of things; there are more than enough around.**

**Oh, you don't see the rainbow?**
**I put it in on another star.**
**I don't remember the name of the star.**
**If you find the shortest sequence of objects you would need to pick up to be able to pick up the rainbow, then you can extract the name of the star.**

| Item                  | Size       |
| --------------------- | ---------- |
| 12 Ant                | 5mm        |
| 19 Short Screw        | 2cm7mm     |
| 2 Maple Leaf          | 7cm2mm     |
| 18 Check Book         | 10cm       |
| 1 Brick               | 46cm       |
| 20 Soccer Ball        | 55cm2mm    |
| 9 Bonsai              | 2m75cm2mm  |
| 15 Hotel Sign         | 7m70cm2mm  |
| 14 Apartment Building | 30m80cm2mm |
| 1 **Rainbow**         | 117m4cm2mm |

### Work

I coded a simple program to find how many of each type of object needed to be picked up to reach the target size of `117.042`. Since there is no penalty for picking up objects and we can pick up as many as we want, a greedy solution works fine, always picking up the largest object that will fit on the ball. I use bigdecimal here to make rounding easier.

I think you could have done this pretty easily by hand, but this made more sense to me at the time.

```java
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;

public class HelloWorld{
     public static void main(String []args){
        double[] data = new double[]{.005, .027, .072, .1, .46, .552, 2.752, 7.702, 30.802};
        int[] count = new int[9];

        double rainbow = 117.042; // target value
        BigDecimal orb = new BigDecimal("0.006"); // starting orb

        while (orb.doubleValue() < rainbow) {
          	// Greedily find largest object that fits the orb
            for (int i = data.length-1; i >= 0; i--) {
                double size = data[i];
                if (size < orb.doubleValue()) {
                    BigDecimal a = new BigDecimal(size * .2 + "");
                    BigDecimal b = a.setScale(3, RoundingMode.DOWN); // round
                    orb = orb.add(b);

                    count[i]++;
                    break;
                }
            }
        }

        System.out.println(Arrays.toString(count));
     }
}
```

When we run the program we get the object frequencies:

- 22 - Ant
- 9 - Short Screw
- 2 - Maple Leaf
- 18 - Check Book
- 1 - Brick
- 20 - Soccer Ball
- 9 - Bonsai
- 15- Hotel Sign
- 14 - ApartmentBuilding

With a total of 110 objects picked up (not including the rainbow), and a size of `117.043`, 1mm above the rainbow size, which let me know I was on the right track. From here I realized all the frequencies were between 1-22, which hinted that it might be appropriate to convert these numbers to letters and see what happens.

[12, 19, 2, 18, 1, 20, 9, 15, 14]

V I B R A T I O N

### Answer

VIBRATION

<hr>
## Rainbow Road

### Description

- 29.697938, -90.789363
- 51.495392, -0.084413
- 44.756498, -85.646674
- 40.750236, -74.183571
- 42.520516, -82.961528
- 37.305867, -80.063476
- 37.459740, -121.914996
- 51.429997, -0.387590

### Work

I started by looking up all of the coordinates, and quickly found that they all existed on streets that were named after colors of the rainbow..

- 29.697938, -90.789363
  - Red Street
- 51.495392, -0.084413
  - Green Walk
- 44.756498, -85.646674
  - Yellow Drive
- 40.750236, -74.183571
  - Orange Street
- 42.520516, -82.961528
  - Indigo Street
- 37.305867, -80.063476
  - Red Lane
- 37.459740, -121.914996
  - Violet Terrace
- 51.429997, -0.387590
  - Green Close

From here I was unsure what to do, I tried using the city name of all of the locations, or plotting them all on a map, but nothing emerged from doing that. However, I was suspicious of the street types, as some lone terrace and close were not common. Finally, I found that if I used the full name (Street instead of St., etc.), and indexed into the street type based on the position of the color in the rainbow, it spelled out the answer.

- Red (1) **S**treet - S
- Green (4) Wal**k** - K
- Yellow (3) Dr**i**ve - I
- Orange (2) S**t**reet - T
- Indigo (6) Stree**t** - T
- Red (1) **L**ane - L
- Violet (7) Terrac**e** - E
- Green (4) Clo**s**e - S

### Answer

SKITTLES

<hr>

## Sequels

### Description

Creating a new hit game in a popular franchise isn't easy. Even if players want new features, they still expect to dive into a title that feels familiar.

- **2007** - Equipment is modernized; killstreaks give you airstrikes
- **2013** - No longer just a Warcraft mod, now a popular battle arena franchise
- **2006** - No more random encounters; Mist lets you perform quickenings
- **2001** - This time it's all about Claude, plus 3D graphics
- **2011** - Now in a frigid open world, you can master the Thu'um
- **2006** - New jetway and wing animations; released on DVD for the first time
- **2013** - Not Connor, but Grandpa; can set sail to explore and plunder the new open world
- **2017** - More exploration means more horror; hopefully Ethan can solve the new puzzles
- **2016** - No more timers or co-op, but at least for Frank, it's Christmas now
- **2012** - Spartan Ops are introduced, and the Forge is back
- **2015** - More cars, more tracks; can now race in the dark and the rain

### Work

Based on the Flavortext and the title of the puzzle, you can infer that each bullet point is referring to a video game sequel that came out on that specfied year. I just did some basic googling to find all of the titles. From there I used the number installment of the game to index into the franchise title (e.g. Hal**o** 4 would be O).

- **2007** - Equipment is modernized; killstreaks give you airstrikes
  - Cal**l** of Duty 4: Modern Warfare
  - L
- **2013** - No longer just a Warcraft mod, now a popular battle arena franchise
  - D**o**ta 2
  - O
- **2006** - No more random encounters; Mist lets you perform quickenings
  - Final Fantas**y** XII
  - Y
- **2001** - This time it's all about Claude, plus 3D graphics
  - Gr**a**nd Theft Auto 3
  - A
- **2011** - Now in a frigid open world, you can master the Thu'um
  - The E**l**der Scrolls V: Skyrim
  - L
- **2006** - New jetway and wing animations; released on DVD for the first time
  - Microsoft **F**light Simulator X
  - F
- **2013** - Not Connor, but Grandpa; can set sail to explore and plunder the new open world
  - Ass**a**ssin's Creed IV: Black Flag
  - A
- **2017** - More exploration means more horror; hopefully Ethan can solve the new puzzles
  - Reside**n**t Evil 7: Biohazard
  - N
- **2016** - No more timers or co-op, but at least for Frank, it's Christmas now
  - Dea**d** Rising 4
  - D
- **2012** - Spartan Ops are introduced, and the Forge is back
  - Hal**o** 4
  - O
- **2015** - More cars, more tracks; can now race in the dark and the rain
  - Forza **M**otorsport 6
  - M

### Answer

LOYALFANDOM

<hr>
## Summa Cum Laude

### Description

“Yes! New high score! Hail to the chief!”

“I don’t know, these don’t look right. I demand a recount.”

```
HIGH SCORES
-----------
NAME	SCORE
RWR	000526
FDR	000541
RMN	000540
LBJ	000495
DDE	000460
HCH	000456
TWW	000440
GHWB 000446
WGH	000427
JCC	000397
```

### Work

"Chief" here is a reference to 'Commander in Chief', which is another name for the president of the United States. Each entry in the high scores contains the initials of a US president (e.g. RWR - Ronald Wilson Reagan), and they seem to be ordered by highest number of electoral college votes. However when I looked up the [exact counts](https://en.wikipedia.org/wiki/List_of_United_States_presidential_elections_by_Electoral_College_margin) for the votes, I found that they were off by a different number for each president.

- RWR - Ronald Wilson Reagan
  - 525 electoral college votes
  - 1 difference
- FDR - Franklin Delano Roosevelt
  - 523 electoral college votes
  - 18 difference
- RMN - Richard Milhous Nixon
  - 520 electoral college votes
  - 20 difference
- LBJ - Lyndon Baines Johnson
  - 486 electoral college votes
  - 9 difference
- DDE - Dwight David Eisenhower
  - 457 electoral college votes
  - 3 difference
- HCH - Herbert Clark Hoover
  - 444 electoral college votes
  - 12 difference
- TWW - Thomas Woodrow Wilson
  - 435 electoral college votes
  - 5 difference
- GHWB - George Herbert Walker Bush
  - 426 electoral college votes
  - 20 difference
- WGH - Warren Gamaliel Harding
  - 404 electoral college votes
  - 23 difference
- JCC - John Calvin Coolidge
  - 382 electoral college votes
  - 15 difference

After doing this I realized that the differences were in the range from 1-23, which is close to the number of letters in the alphabet. I then took all of the differences and converted the numbers to letters:

1 18 20 9 3 12 5 20 23 15

A R T I C L E T W O

### Answer

ARTICLETWO

<hr>

## The Nonary Game

### Description

You see _9 persons_, each wearing a bracelet. A different number is displayed on each person's bracelet: they are numbered 1, 2, 3, 4, 5, 6, 7, 8, and 9.

You see _9 doors_. A different number is painted on each door: they are numbered 1, 2, 3, 4, 5, 6, 7, 8, and 9.

You must partition the party into groups, subject to these rules:

- Every person must be in exactly one group.
- Each group must contain at least 3, and at most 5 members.
- Each group must enter the door whose number is equal to the _digital root_ of the sum of their bracelet numbers.
- No two groups can enter the same door.

To compute the digital root of a number, add together the digits of the number. If the sum has more than one digit, add together the digits of that sum. Repeat until the resulting sum has only one digit. This final one-digit sum is the number’s digital root.

For example, _{1234, 56789}_ is one possible valid partition. The 1234 group will enter the number 1 door, because their digital root is 1 + 2 + 3 + 4 = 10 → 1 + 0 = **1**. The 56789 group will enter the number 8 door, because their digital root is 5 + 6 + 7 + 8 + 9 = 35 → 3 + 5 = **8**.

As another example, _{128, 356, 479}_ is not a valid partition. The 128 group and the 479 group both have a digital root of 2, and they cannot both enter the number 2 door.

**How many different, valid partitions are there?**

### Work

This seemed like another problem that would be best solved by coding up a simulation. The code to check a valid partition and find a digital root was pretty simple, but the way I find all possible partitions is pretty janky. I use recursive backtracking to add each number (1-9) to one of 3 strings, thus interating over every single possible partition. However, I also manually check to make sure each partition does not go over the maximum 5, or under the minimum 3.

Finally after all of the partitions are created and validated, I have to divide the count by 6, because of the way I generated the partitions. In the actual Nonary game, the sets are not ordered, but in my code, it would count `{1234, 56789}` and `{56789, 1234}` as distinct valid partitions. Because there are 3 partitions for each solution (I count an empty partition as 1), there are `3*2*1=6` ways of odering the partitions, hence the division by 6.

```java
import java.util.*;

public class Sim {
  public static final int NUM_PEOPLE = 9;
  public static final int MAX = 5;
  public static final int MIN = 3;
  public static int globalCount = 0;

  public static void main (String[] args) {
    String[] partitions = new String[]{"", "", ""};

    helper(partitions, 1);
    System.out.println("valid partitions: " + (globalCount / 6));
  }

  // Recursively check all partitions
  public static void helper(String[] partitions, int person) {

    // Base case, gone through all 10 people
    if (person == 10) {
      // Check if all groups meet minimum
      for (String partition : partitions) {
        if (partition.length() > 0 && partition.length() < MIN) {
          return;
        }
      }

      // Check if group is valid
      if (isValid(partitions)) {
        globalCount++;
      }
    }

    int i = 0;
    for (String partition : partitions) {
      // ensure we do not go over max
      if (partition.length() < MAX) {
        partitions[i] = (partitions[i] + person);
        helper(partitions, person+1);
        partitions[i] = partition;
      }

      i++;
    }
  }

  public static boolean isValid (String[] partitions) {
    HashSet<String> seen = new HashSet<>();

    for (String partition : partitions) {
      String root = digitalRoot(partition);
      if (seen.contains(root)) {
        return false;
      }
      seen.add(root);
    }

    return true;
  }

  public static String digitalRoot (String num) {
    // Base case, number is single digit (ignore negatives)
    if (num.length() <= 1) {
      return num;
    }

    int sum = 0;

    // Add all digits
    for (int i = 0; i < num.length(); i++) {
      int digit = Integer.parseInt("" + num.charAt(i));
      sum += digit;
    }

    return digitalRoot("" + sum);
  }
}
```

Note: I know I use a global variable here and some horrendous string concatination, but this is a puzzle hunt not a programming assignment.

### Answer

329
