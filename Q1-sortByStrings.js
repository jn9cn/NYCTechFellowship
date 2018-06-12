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
    console.log(hash)
    var str = ''
    for(var j=0; j<t.length; j++) {
        if(hash[t[j]]) {
            str+=t[j].repeat(hash[t[j]])
        }
        console.log(str)
    }
    return str
}

console.log(sortByStrings('weather', 'therapyw'))
console.log(sortByStrings('good', 'odg'))
