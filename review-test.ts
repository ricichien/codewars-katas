// acumulador

function sumEven(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// contador + condicao

function countGreaterThan(numbers: number[], target: number): number {
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > target) {
      counter += 1;
    }
  }
  return counter;
}

function countVowels(text: string): number {
  let counter = 0;
  let txt = text.toLowerCase();
  for (let i = 0; i < txt.length; i++) {
    if (
      txt[i] === "a" ||
      txt[i] === "e" ||
      txt[i] === "i" ||
      txt[i] === "o" ||
      txt[i] === "u"
    ) {
      counter += 1;
    }
  }
  return counter;
}

function findFirstEven(numbers: number[]): number | undefined {
  let firstEven;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      firstEven = numbers[i];
      break;
    }
  }

  return firstEven;
}

function hasDuplicate(numbers: number[]): boolean {
  let map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(numbers[i])) {
      return true;
    } else {
      map.set(numbers[i], 1);
    }
  }
  return false;
}

// findFirstGreater([2, 5, 8, 3, 10], 6)
// // 8

// findFirstGreater([1, 2, 3], 5)
// // undefined

// findFirstGreater([10, 4, 7], 6)
// // 10

function findFirstGreater(
  numbers: number[],
  target: number,
): number | undefined {
  let greater = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > target) {
      return (greater = numbers[i]);
    }
  }
  return undefined;
}
