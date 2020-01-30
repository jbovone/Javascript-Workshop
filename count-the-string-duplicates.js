//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Count the number of Duplicates:                                                                                         //
//                                                                                                                          //
//  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits       //    
//  that occur more than once in the input string. The input string can be assumed to contain only alphabets                //
//  (both uppercase and lowercase) and numeric digits.                                                                      //
//  Example                                                                                                                 //
//                                                                                                                          //
//  "abcde" -> 0 # no characters repeats more than once                                                                     //
//  "aabbcde" -> 2 # 'a' and 'b'                                                                                            //
//  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)                                                           //
//  "indivisibility" -> 1 # 'i' occurs six times                                                                            //        
//  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice                                                   //
//  "aA11" -> 2 # 'a' and '1'                                                                                               //
//  "ABBA" -> 2 # 'A' and 'B' each occur twice                                                                              //
//  Fundamentals                                                                                                            //
//  Strings                                                                                                                 //    
//                                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function duplicateCount(text) {
    let index = []

    scaning:
    for (let i = 0; i < text.length - 1; i++) {
        if (!/[a-z0-9]/i.test(text[i])) {
            continue scaning
        }
        for (let j = i + 1; j < text.length; j++) {
            if (text[i].toLowerCase() === text[j].toLowerCase()) {

                for (let k = 0; k < index.length; k++) {
                    if (index[k] === text[i]) {
                        continue scaning
                    }
                }
                index.push(text[i])
            }
        }
    }
    return index.length
}

function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
const duplicateCount = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;

function duplicateCount(text) {
    return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}
function duplicateCount(text) {
    text = text.toLowerCase();
    return [...new Set(text.split(''))].filter((c, i) => text.lastIndexOf(c) > text.indexOf(c)).length;
}

/*
function duplicateCount(str) {

    const regexp = RegExp('[a-z0-9]', 'gi')
    const matches = str.matchAll(regexp);
    let index = {}

    for (let match of matches) {
        if (match in index) {
            index[match]++
        } else {
            index[match] = 1
        }
    }

    sortedIndex = Object.entries(index).sort(
        (a, b) => b[1] - a[1]
    )

    let showcase = []
    for (let i = 0; i < sortedIndex.length; i++) {
        showcase[i] = sortedIndex[i]
        if (sortedIndex[i][1] !== sortedIndex[i + 1][1]) { break }
    }
    return showcase
}


//console.log(Array.from(str.matchAll(regexp), m => m[0]))
*/
