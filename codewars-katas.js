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
  
