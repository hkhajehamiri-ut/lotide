# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hildakh/lotide`

**Require it:**

`const _ = require('@hildakh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual(arrOne, arrTwo)`:   Logs a message telling the user if two arrays are equivalent
*  `assertEqual(actual, expected)`:       Logs a message telling the user if the two passed arguments are equal
*  `assertObjectEqual(object1, object2)`: Logs a message telling the user if two passed objects are equivalent
*  `countLetters(words)`:                 Counts the number of letters in a given word
*  `countOnly(allItems, itemsToCount)`:   Counts the frequency of a given item in an array
*  `eqArrays(arrayOne, arrayTwo)`:        Checks if two array are exactly the same
*  `eqObjects(object1, object2)`:         Checks if the passed objects are equivalent
*  `find(object, callback)`:              Checks if a given key exists in the passed object
*  `findKeyByValue(objectToCheck, valueToCheck)`: Checks if a value exists within the passed object
*  `flatten(array)`:                 Takes an array of nested arrays and logs a single array including all the items from the top level and the nested ones
*  `head(array)`:                         Returns  the item at index 0 of an array
*  `letterPositions(sentence)`            Returns the index of an given letter in a string
*  `map(arr, callback)`:                  Returns the letter at index 0 of all the words (different items) in an array
*  `middle(array)`:              Returns the item at the middle position of an array. Returns an empty array if the length of the passed arr is smaller than 3
*  `tail(array)`:                         Returns the items of an array excluding the head(item at index 0)
*  `takeUntil(arr, callback)`:            Return the original array up until the item mentioned as the until factor
*  `without(source, itemsToRemove)`:      Returns the original array without the one passed to be removed

