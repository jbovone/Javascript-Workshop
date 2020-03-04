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
