/**
 * As a budding magician, Elyse needs to analyze her deck in lots of different ways. To keep things simple, she only uses cards with values 1-10.

1. Determine how many cards of a certain type are in the deck
Elyse wants to know how many cards of a particular type she has in her deck.

Write a function cardTypeCheck that takes two parameters: an array of cards (Elyse's deck) and the type of card to count. The function should use forEach and return the number of cards in the deck of the specified type.

const cardType = 3;
cardTypeCheck([1, 2, 3, 4], cardType);
// => 1

2. Determine how many odd or even cards there are
For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function determineOddEvenCards that takes in two parameters: an array of cards (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').

This function should return a single number: the number of odd or even cards there are (depending on the value of the second argument) in the deck. To practice, use a for...of loop in the function implementation this time.

determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
// => 2

determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
// => 4
 */

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
    let count = 0;
  
    stack.forEach(stackCard => {
      if (stackCard === card) {
        count++;
      }
    });
  
    return count;
  }

  /**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
    let count = 0;
  
    for (const card of stack) {
      if ((card % 2 === 0 && type) || (card % 2 !== 0 && !type)) {
        count++;
      }
    }
  
    return count;
  }

