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

// numbers = [4, 5, 2, 9, 4]
function sortByIncreasing(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let smallerIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[smallerIndex]) {
        smallerIndex = j;
      }
    }
    [numbers[i], numbers[smallerIndex]] = [numbers[smallerIndex], numbers[i]];
  }
  return numbers;
}

// numbers = [1, 2, 4, 6, 8, 9]

function hasPairWithTargetSum(numbers: number[], target: number) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return true;
      }
    }
  }
  return false;
}

function hasPairWithTargetSumTwoPointers(
  numbers: number[],
  target: number,
): boolean {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else return true;
  }

  return false;
}

function maxSumWindow(numbers: number[], k: number): number {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  maxSum = sum;

  for (let j = 0; j < numbers.length - k; j++) {
    sum -= numbers[j];
    sum += numbers[j + k];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

function minSubarray(numbers: number[], target: number): number {
  let minLength = Infinity;
  let minSum = 0;
  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    minSum += numbers[right];
    while (minSum >= target) {
      let currentLength = right - left + 1;
      minSum -= numbers[left];
      left++;
      if (currentLength < minLength) {
        minLength = currentLength;
      }
    }
  }

  if (minLength === Infinity) {
    minLength = 0;
  }

  return minLength;
}

function minDifference(numbers: number[], target: number) {
  let left = 0;
  let right = numbers.length - 1;
  let minDifference = numbers[right] - numbers[left];

  while (left < right) {
    minDifference = numbers[right] - numbers[left];
    if (minDifference > target) {
      right--;
    } else if (minDifference < target) {
      left++;
    } else return true;
  }
  return false;
}
