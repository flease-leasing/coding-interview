# 4-roman-numeral

## About this Kata

I wasn’t there, but I believe this Kata was performed at XP2001 by Kent Beck. 
Here is [a video of Karl Scotland doing this Kata in Excel at agile 2008] 
Here is [a video of JonJagger doing this Kata in Ruby using CyberDojo]

Difficulty - Easy.

## Problem Description

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis [1]. 
One thing they never discovered though was the number zero. 
This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today.
For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters : I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets)

Here are the basics:


> **I** The easiest way to note down a number is to make that many marks - little I's. Thus I means 1, II means 2, III means 3. However, four strokes seemed like too many....
> 
> **V** means 5. So the Romans moved on to the symbol for 5 - V. Placing I in front of the V — or placing any smaller number in front of any larger number — indicates subtraction. So IV means 4. After V comes a series of additions - VI means 6, VII means 7, VIII means 8.
> 
> **X** means 10. But wait — what about 9? Same deal. IX means to subtract I from X, leaving 9. Numbers in the teens, twenties and thirties follow the same form as the first set, only with X's indicating the number of tens. So XXXI is 31, and XXIV is 24.
> 
> **L** means 50. Based on what you've learned, I bet you can figure out what 40 is. If you guessed XL, you're right = 10 subtracted from 50. And thus 60, 70, and 80 are LX, LXX and LXXX.
> 
> **C** stands for centum, the Latin word for 100. A centurion led 100 men. We still use this in words like "century" and "cent." The subtraction rule means 90 is written as XC. Like the X's and L's, the C's are tacked on to the beginning of numbers to indicate how many hundreds there are: CCCLXIX is 369.
> 
> **D** stands for 500. As you can probably guess by this time, CD means 400. So CDXLVIII is 448. (See why we switched systems?)
> 
> **M** is 1,000. You see a lot of Ms because Roman numerals are used a lot to indicate dates. For instance, this page was written in the year of Nova Roma's founding, 1998 CE (Common Era; Christians use AD for Anno Domini, "year of our Lord"). That year is written as MCMXCVIII. But wait! Nova Roma counts years from the founding of Rome, ab urbe condita. By that reckoning Nova Roma was founded in 2751 a.u.c. or MMDCCLI.


## Part I

The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg

     1 --> I
     10 --> X
     7 --> VII
etc.

The big differences between Roman and Arabic numerals (the ones we use today) are that Romans didn't have a symbol for zero, and that numeral placement within a number can sometimes indicate subtraction rather than addition.

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn’t tend to go any higher)

## Part II

Write a function to convert in the other direction, ie numeral to digit