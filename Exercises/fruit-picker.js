/**
 * You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.

1. Create a callback to be called when the order is successful
Write a callback function called onSuccess to be called when the order is successful. It should invoke the imported notify function passing a success message to it.

onSuccess();
// => `notify` called with `{ message: 'SUCCESS' }`
2. Create a callback to be called when the order fails with an error
Write a callback function called onError to be called when the order encounters an error. It should invoke the imported notify function passing an error message to it.

onError();
// => `notify` called with `{ message: 'ERROR' }`
3. Create a wrapper to wrap the external api function
The grocer's API provides a function to order from their inventory called order. It receives three arguments: a query, a callback function to be invoked when the order is successful, and a callback function to be invoked when the order encounters an error. You decide to wrap the api function call in a newly defined function orderFromGrocer to insulate your codebase from external changes. Your function should forward the arguments (which match the provided api function) to the api function.

The query takes the form of an object:

const query = {
  variety: string,
  quantity: number,
};
orderFromGrocer(
  { variety: 'pear', quantity: 12 },
  exampleSuccessCallback,
  exampleErrorCallback,
);
// => `order` was called with the query and the callbacks
4. Create a convenient short function
You find that you are calling this function from many different places with the same functions. Seeing an opportunity to refactor your code, you want to create a function where you can supply the variety and quantity to order as arguments.

postOrder('peach', 100);
// => order submitted for 100 peaches
 */

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */
export function onSuccess() {
  notify({ message: 'SUCCESS' });
}

/**
 * @return void
 */
export function onError() {
  notify({ message: 'ERROR' });
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccess, onError);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  const query = { variety, quantity };
  order(query, onSuccess, onError);
}
