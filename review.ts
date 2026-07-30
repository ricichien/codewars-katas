function countVowels(string: string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      counter += 1;
    }
  }
  return counter;
}

function countEven(number: number[]) {
  let counter = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      counter += 1;
    }
  }
  return counter;
}

function countGreaterThanTen(number: number[]) {
  let counter = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 10) {
      counter += 1;
    }
  }
  return counter;
}

function sumEven(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
}
