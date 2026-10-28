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

// Dado array ordenado e target, retorne true se
// existem dois números cuja diferença absoluta
// seja exatamente target.

function hasExactDifference(numbers: number[], target: number): boolean {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    if (numbers[end] - numbers[start] === target) return true;
    else if (numbers[end] - numbers[start] < target) start++;
    else end--;
  }
  return false;
}

// Dado array de inteiros, retorne true se existem
// três números que somam zero. Decomponha
// antes de codar.

// Mesmo do ThreeSums

// Recebe lista de ops { tipo: "deposito"|"saque",
// valor }. Saque que deixa saldo negativo é
// ignorado. Retorne saldo final

function simpleSafe(ops: { type: "deposit" | "withdraw"; balance: number }[]) {
  let finalBalance = 0;
  for (const op of ops) {
    if (op.type === "deposit") {
      finalBalance += op.balance;
    }
    if (op.type === "withdraw" && finalBalance - op.balance >= 0) {
      finalBalance -= op.balance;
    }
  }

  return finalBalance;
}

// Começa com 100 HP. Eventos positivos curam,
// negativos causam dano. Se HP ≤ 0, pare e
// retorne o índice da morte. Se sobreviver, retorne
// -1.

function lifeGame(numbers: number[]) {
  let lifeBar = 100;
  for (let i = 0; i < numbers.length; i++) {
    lifeBar += numbers[i];
    if (lifeBar <= 0) {
      return i;
    }
  }
  return -1;
}
