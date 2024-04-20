/**
 * @param {number} numBottles - The number of full water bottles initially available.
 * @param {number} numExchange - The number of empty bottles required to exchange for one full water bottle.
 * @return {number} - The maximum number of water bottles that can be drunk.
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    // Initialize variables to track the number of bottles drunk and the number of empty bottles.
    let drunk = numBottles;
    let empty = numBottles;
    
    // Keep exchanging empty bottles for full bottles until there are not enough empty bottles to exchange.
    while (numExchange <= empty) {
        // Increment the number of drunk bottles by one for each exchange.
        drunk += 1;
        // Calculate the new number of empty bottles after the exchange.
        empty = empty + 1 - numExchange;
        // Increment the number of bottles required for the next exchange.
        numExchange++;
    }
    
    // Return the total number of drunk bottles.
    return drunk;
};
