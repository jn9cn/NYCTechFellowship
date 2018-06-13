// Question 1 -- sortByStrings(s,t): 
// Sort the letters in the string s by the order they occur in the string t. 
// You can assume t will not have repetitive characters. 
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". 
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s, t) {
    var hash = {}
    for(var i=0; i<s.length; i++) {
        if(!hash[s[i]]) hash[s[i]]=1
        else hash[s[i]]++
    }
    var str = ''
    for(var j=0; j<t.length; j++) {
        if(hash[t[j]]) {
            str+=t[j].repeat(hash[t[j]])
            hash[t[j]] = hash[t[j]]-hash[t[j]]
        }
    }
    // Edge case where t doesn't include all of s's characters
    var end = ''
    for (var key in hash) {
        if (hash[key] > 0) {
            end+=key.repeat(hash[key])
        }
    }
    return str+end
}

// Time/Space Complexity:
// O(n) time where n is the length of s, O(n) space where n is the number of unique letters in string s

// Tests:
// console.log(sortByStrings('weather', 'therapyw')) // theeraw
// console.log(sortByStrings('good', 'odg')) // oodg
// console.log(sortByStrings('bcaxed', 'cbad')) // cbadxe
