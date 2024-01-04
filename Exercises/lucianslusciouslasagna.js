// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi there!
//
// On the JavaScript track we provide you with stubs. These stubs provide a
// starting point to solving the exercise.
//
// In general, each variable/constant and each declared function will have a
// JSDoc comment block above it, explaining what the variable/constant holds or
// the function is supposed to accomplish.
//
// 💡 Often, the JSDoc comment blocks have annotations, such as @param and
// @returns which are usually highlighted with a different color if the IDE
// you're in recognizes them. It's these annotations that are used when
// referring to the constant, variable, or function from somewhere else that
// IDEs display.
//
// You don't need to write these yourself; it is not expected in idiomatic
// JavaScript, but some companies and style-guides do enforce them.
//
// 💡 You're allowed to completely clear a stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./lasagna.spec.js
//
// Good luck preparing some lasagna!

/*
# Instructions

Lucian's girlfriend is on her way home and he hasn't cooked their anniversary dinner!

In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cook book.

You have four tasks, all related to the time spent cooking the lasagna.

**1. Define the expected oven time in minutes**

Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.

**2. Calculate the remaining oven time in minutes**

Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

```
remainingMinutesInOven(30);
// => 10
```

**3. Calculate the preparation time in minutes**

Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

```
preparationTimeInMinutes(2);
// => 4
```

**4. Calculate the total working time in minutes**

Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

```
totalTimeInMinutes(3, 20);
// => 26
```*/

/**
 * The amount of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;


/**
 * Determines the amount of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers*PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
