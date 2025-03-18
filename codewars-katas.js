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
  
