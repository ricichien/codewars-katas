// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  let sum = n
  while (sum >= 10){
  let myArray = n.toString().split('').map(Number)
  sum = 0
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i]
    }
  }
  return sum
}

// Or 

function digitalRoot(n) {
  let sum = n;
  while (sum >= 10) { // Continua até o número ter apenas um dígito
    sum = 0;
    // Enquanto sum for maior ou igual a 10, pegamos os dígitos e somamos
    while (n > 0) {
      sum += n % 10; // Pega o último dígito de n
      n = Math.floor(n / 10); // Remove o último dígito de n
    }
    n = sum; // Atualiza n para ser a soma dos dígitos
  }
  return sum; // Retorna o número de um dígito
}

// Is a number prime? 

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


function isPrime(num) {
  if (num < 2) return false
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    };
  }
    return true
}

// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  stringToNumber = numbers.split(' ').map(Number);
  
  const highest = Math.max(...stringToNumber); 
  const lowest = Math.min(...stringToNumber);
  
  return `${highest} ${lowest}`
}

// Or

function highAndLow(numbers){
  stringToNumber = numbers.split(' ').map(Number);
  
  let highest = stringToNumber[0]
  let lowest = stringToNumber[0]
  
  for (i = 1; i < stringToNumber.length; i++) {
    if (stringToNumber[i] > highest) {
      highest = stringToNumber[i]
    }
    
    if (stringToNumber[i] < lowest) {
      lowest = stringToNumber[i]
    }
  }
  
  return `${highest} ${lowest}`
}

// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// ListsFilteringData StructuresFundamentals

function filter_list(l) {
    let filteredList = ""
    
    return filteredList = l.filter(value => typeof value !== "string")
    
  }

// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    let phoneNumber = ""; 
  
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        phoneNumber += "("; 
      }
      
      phoneNumber += numbers[i]; 
  
      if (i === 2) {
        phoneNumber += ") ";
      }
      
      if (i === 5) {
        phoneNumber += "-"; 
      }
    }
  
    return phoneNumber;
  }

  // Or

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for (var i = 0; i < numbers.length; i++) {
      format = format.replace('x', numbers[i]);  // Substitui o primeiro 'x' por cada número do array
    }
    
    return format;
  }
  
