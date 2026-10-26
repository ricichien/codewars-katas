// Dado array ordenado e um target, retorne o par
// de números cuja soma seja mais próxima do
// target (não necessariamente igual).

// [1, 3, 8, 12, 19]
// target = 15

function sumNextToTarget(target: number, numbers: number[]) {
  let sum = 0;
  let left = 0;
  let right = numbers.length - 1;
  let pairsDif = Infinity;
  let melhorDif = Infinity;
  let result: number[] = [];

  while (right > left) {
    sum = numbers[left] + numbers[right];
    pairsDif = Math.abs(sum - target);
    if (pairsDif < melhorDif) {
      melhorDif = pairsDif;
      result = [numbers[left], numbers[right]];
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
    if (sum === target) {
      return (result = result = [numbers[left], numbers[right]]);
    }
  }
  return result;
}

// Dado array ordenado e target, retorne true se
// existem dois números cuja diferença absoluta
// seja exatamente target.

// target = 5, number = 2 - 13 = 11

function sumEqualTarget(target: number, numbers: number[]) {
  let left = 0;
  let right = numbers.length - 1;
  let pairsDif = Infinity;

  while (right > left) {
    pairsDif = numbers[right] - numbers[left];
    if (pairsDif === target) return true;
    if (pairsDif > target) {
      right--;
    }
    if (pairsDif < target) {
      left++;
    }
  }
  return false;
}

// Dado array de inteiros, retorne true se existem
// três números que somam zero. Decomponha
// antes de codar.

// function findTarget(numbers: number[], target: number): boolean {
//   let start = 0;
//   let end = numbers.length - 1;
//   while (start < end) {
//     if (numbers[start] + numbers[end] === target) return true;
//     else if (numbers[start] + numbers[end] < target) start++;
//     else end--;
//   }
//   return false;
// }

function isThreeSumEqualZero(numbers: number[]) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length - 2; i++) {
    let left = i + 1;
    let right = numbers.length - 1;
    const target = -numbers[i];

    while (left < right) {
      let sum = numbers[left] + numbers[right];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }

    // if (findTarget(numbers.slice(i + 1), target)) {
    //   return true;
    // }
  }

  return false;
}

// // Entrada: [1, 3, 5, 7, 9] e 12
// // Saída: true
// // O que vive: A soma
// // O que acontece: Guarda a soma e compara com target, se não for igual, move o par

// function pairSumEqualTarget(numbers: number[], k: number): boolean {
//   let left = 0;
//   let right = numbers.length - 1;
//   let sum = 0;

//   while (left < right) {
//     sum = numbers[left] + numbers[right];

//     if (sum === k) {
//       return true;
//     } else if (sum < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return false;
// }
