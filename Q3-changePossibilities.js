// Question 3 -- changePossibilities(amount,amount): 
// Your quirky boss collects rare, old coins. 
// They found out you're a programmer and asked you to solve something 
// they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, 
// computes the number of ways to make the amount of money with coins of the available 
// denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
// your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, denoms) {
    // Instantiate array with n indices and 0's at each index, where indices represent possible amounts up to n
    var ways = (new Array(amount+1)).fill(0)
    // Initialize 0th index with value 1, indicating there's only 1 way to make $0 amount
    ways[0] = 1 // base case
    // Iterate through possible coin denominations
    for (var denom of denoms) {
        // For each denomination, accumulate amount
        for (var i = 1; i < amount + 1; i++) {
            // as long as denom is less than or equal to amount
            if (denom <= i) {
                // accumulate value at amount with value at amount minus current denomination
                ways[i] += ways[i - denom]
            }
        }
    }
    // return final accumulated amount at amount-th index of array
    return ways[amount]
}

// Time/Space Complexity:
// O(n*m) time where n is the target amount and m is the number of denominations
// O(n) space where n is the target amount

// Test cases:
// console.log(changePossibilities(4, [1,2,3])) // 4
// console.log(changePossibilities(9, [5])) // 0
// console.log(changePossibilities(7, [2,4])) // 0
// console.log(changePossibilities(0, [1,2,4])) // 1
// console.log(changePossibilities(0, [1,2,4])) // 1
// console.log(changePossibilities(25, [1,5,10,25])) // 13
