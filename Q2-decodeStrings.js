// Question 2 -- decodeString(s): 
// Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square 
// brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

var test3 = 'a10b11CCd' // should return 'aaaaaaaaaabbbbbbbbbbbCCd'

function stringExpander(str) {
    var newStr = ''
    var count = ''
        for (var i=0; i<str.length; i++) {
        if (isNaN(str[i])) newStr += str[i]
        else count += str[i]
        if (isNaN(str[i+1])) {
            var lastChar = newStr[newStr.length-1]
            count = Number(count)
            newStr += lastChar.repeat(count ? count-1 : 0);
            count = ''
        }
  }
  return newStr
}

console.log(stringExpander(test3)); // O(n) time complexity, O(1) space complexity