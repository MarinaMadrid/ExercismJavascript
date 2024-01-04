/*
In this exercise, you will write some code to help you prepare to buy a vehicle.

You have three tasks, one to determine if you will need to get a license, one to help you choose between two vehicles and one to estimate the acceptable price for a used vehicle.

1. Determine if you will need a drivers license
Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

needsLicense('car');
// => true

needsLicense('bike');
// => false
2. Choose between two potential vehicles to buy
You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.

chooseVehicle('Wuling Hongguang', 'Toyota Corolla');
// =>  'Toyota Corolla is clearly the better choice.'

chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf');
// =>  'Volkswagen Beetle is clearly the better choice.'
3. Calculate an estimation for the price of a used vehicle
Now that you made your decision you want to make sure you get a fair price at the dealership. Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.

Implement the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and else (there are other ways if you want to practice). It takes the original price and the age of the vehicle as arguments and returns the estimated price in the dealership.

calculateResellPrice(1000, 1);
// => 800

calculateResellPrice(1000, 5);
// => 700

calculateResellPrice(1000, 15);
// => 500
*/ 

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    if(kind == 'car' || kind == 'truck'){
      return true;
    }else{
      return false;
    };
  }
/*
export function needsLicense(kind) {
  return kind == 'car' || kind == 'truck';
}
*/
  
  /**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    let firstLetterOp1 = option1[0];
    let firstLetterOp2 = option2[0];
    let message = " is clearly the better choice.";
    if (firstLetterOp1 < firstLetterOp2){
      return option1 + message;
    } else {
      return option2 + message;
    }
  }
//return firstLetterOp1 < firstLetterOp2 ? option1 + message : option2 + message;   //other option

 /**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    if(age < 3){
      return originalPrice*0.80;
    } else if(age >= 3 && age <= 10) {
      return originalPrice*0.70;
    } else {
      return originalPrice*0.50;
    }
  } 
