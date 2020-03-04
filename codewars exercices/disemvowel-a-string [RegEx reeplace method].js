
var re = /lossers/g;
var newstr = re[Symbol.replace](str, 'winners');
console.log(newstr);  // 2016.01.01

function disemvowel(string) {
    let regEx = {
        a: /a/ig,
        e: /e/ig,
        i: /i/ig,
        o: /o/ig,
        u: /u/ig,
    }
    let newString = string
    regIndex = Object.keys(regEx)

    regIndex.forEach((index) => {
        newString = regEx[index][Symbol.replace](newString, '')
    })
    return newString;
}
/a-z0-9/
console.log(disemvowel('This website is for losers LOL!'))
