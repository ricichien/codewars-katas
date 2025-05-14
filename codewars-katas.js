// Você recebe um array de números inteiros únicos entre 1 e n, mas um número está faltando. Escreva uma função que encontre esse número sem usar métodos de array além de .length. Use for.

function findMissingNumber(arr) {
  // Primeiro descobrimos o n
  const n = arr.length + 1;

  // Soma teórica de 1 até n
  const expectedSum = (n * (n + 1)) / 2;

  // Agora vamos somar o que temos usando for
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  // A diferença é o número faltando
  return expectedSum - actualSum;
}


// Dada uma string com palavras separadas por espaços, inverta cada palavra individualmente, mantendo a ordem das palavras.

function reverseWords(str) {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}


// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  // Garante que o valor fique entre 0 e 255
  function clamp(val) {
    return Math.max(0, Math.min(255, val));
  }

  // Converte para hexadecimal e formata com dois dígitos
  function toHex(val) {
    return clamp(val).toString(16).toUpperCase().padStart(2, '0');
  }

  // Concatena os 3 valores já convertidos
  return toHex(r) + toHex(g) + toHex(b);
}

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettacode.org

function solution(roman) {
  const symbol = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };

  let value = 0;
  let previous = 0;

  for (let i = 0; i < roman.length; i++) {
      const current = symbol[roman[i]];
      if (previous < current) {
          value += current - 2 * previous;
      } else {
          value += current;
      }
      previous = current;
  }

  return value;
}

// Maximum Subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
  let maxSum = 0;      // Maior soma encontrada
  let currentSum = 0;  // Soma atual do subarray
  
  for (let i = 0; i < arr.length; i++) {
    // Atualiza currentSum, comparando se devemos continuar a soma ou recomeçar com arr[i]
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    
    // Atualiza maxSum se a soma atual for maior
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}


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
  
