/**
 * If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take color names as input and output a two digit number, even if the input is more than two colors!

The band colors are encoded as follows:

Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Grey: 8
White: 9
From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.

Notes
The provided input will be an array of color names and the output should be a number.
 */

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet", "grey","white"];

export function decodedValue(colors) {
  const firstColor = colors[0];
  const secondColor = colors[1];
  return COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor);
};

/*
export const decodedValue = (colors) => {
  const firstColor = colors[0];
  const secondColor = colors[1];
  return COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor);
};
*/
