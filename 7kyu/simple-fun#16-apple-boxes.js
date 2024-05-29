// 

// MY SOLUTIONS:
// 1.
function appleBoxes(k) {
    let yellowAppleBoxes = 0;
    let redAppleBoxes = 0;
      
      for (let i = 1; i <= k; i++) {
        i % 2 === 0 ? redAppleBoxes += i ** 2 : yellowAppleBoxes += i ** 2
      }
      return redAppleBoxes - yellowAppleBoxes
      
    }

    // 2. 

    function appleBoxes(k) {
        let result = 0;
        
          for(let i = 1; i <= k; i++) result += i * i * (i % 2 ? -1 : 1)
          return result
          
        }