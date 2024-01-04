/*
As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to 
manipulate.

To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented 
by an array of numbers. The position of a certain card corresponds to the index in the array. That 
means position 0 refers to the first card, position 1 to the second card etc.

Note
All functions should update the array of cards and then return the modified array - a common way of
 working known as the Builder pattern, which allows you to nicely daisy-chain functions together.

1. Retrieve a card from a stack
To pick a card, return the card at index position from the given stack.

const position = 2;
getItem([1, 2, 4, 1], position);
// => 4
*/

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
    return cards[position];
  }

/*2. Exchange a card in the stack
Perform some sleight of hand and exchange the card at index position with the replacement card 
provided. Return the adjusted stack.

const position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]*/

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
  }

/*3. Insert a card at the top of the stack
Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]*/

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
  }

/*4. Remove a card from the stack
Make a card disappear by removing the card at the given position from the stack. Return the adjusted
stack.

const position = 2;
removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]*/

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
  }

/*5. Remove the top card from the stack
Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]*/

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
    cards.pop();
    return cards;
  }

/*6. Insert a card at the bottom of the stack
Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]*/

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
  }

/*7. Remove a card from the bottom of the stack
Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]*/

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
  }

/*8. Check the size of the stack
Check whether the size of the stack is equal to stackSize or not.

const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// => false*/
/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
    if(cards.length == stackSize){
      return true;
    } else {
      return false;
    }
  }
