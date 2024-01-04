/**
 * Your task is to figure out if a sentence is a pangram.

A pangram is a sentence using every letter of the alphabet at least once. It is case insensitive, so it doesn't matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).

For this exercise we only use the basic letters used in the English alphabet: a to z.
 */

//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphabets = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = (value) => {
  return alphabets.every(letter => value.toLowerCase().includes(letter));
};