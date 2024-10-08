// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let newStr = string.split('')
    let brokenCamel = ''
    
    newStr.forEach(e => {
    if(e === e.toUpperCase()) brokenCamel += ' '+e
    else brokenCamel += e
    })
  
    return brokenCamel
}

console.log(solution('camelCasing'));//success = "camel Casing"
console.log(solution('camelCasingTest'));