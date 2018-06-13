// Question 2 -- decodeString(s): 
// Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square 
// brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

// Approach:
    // instantiate a nums array, strs array, and number string
        // push empty string into strs as buffer
    // iterate through string
        // if char is a number, concat char to number string
            // if char's next char is not a number, coerce and push entire number string to nums array
        // if char is an open bracket, push an empty string into strs array
        // if char is a close bracket
            // get count via nums.pop()
            // get chars via strs.pop()
            // create substr by repeating chars by count's # times
            // concat latest char in strs array to substr and push result into strs array
        // else pop off latest char in strs array, concat current char to it, and push result into strs array
    // return first elem of strs array

function decodeString(s) {
    var nums = []
    var strs = []
    var number = ''
    strs.push('')
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            number += s[i]
            if (isNaN(s[i+1])) {
                nums.push(Number(number));
                number = ''
            }
        } else if (s[i] === '[') {
            strs.push('')
        } else if (s[i] === ']') {
            let count = nums.pop()
            let chars = strs.pop()
            let substr = ''
            substr += chars.repeat(count)
            strs.push(strs.pop() + substr)
        } else {
            strs.push(strs.pop() + s[i])
        }
    }
    return strs[0]
}

// Time/Space Complexity:
// O(n) time where n is the length of s, O(n) space where n is the number of unique charactrs in string s

// Tests:
// console.log(decodeString('2[b3[a]]')) // baaabaaa
// console.log(decodeString('4[ab]')) // abababab
// console.log(decodeString('10[hello]')) // hellohellohellohellohellohellohellohellohellohello
// console.log(decodeString(3))
