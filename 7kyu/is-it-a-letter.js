// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// MY SOLUTIONS:

// 1. 
function isItLetter(char) {
    return /[a-zA-Z]/.test(char) ? true :false
    }

    // 2. 

    function isItLetter(character) {
        return /[a-z]/i.test(character)
        }

        
