// Dado array ordenado e um target, retorne o par
// de números cuja soma seja mais próxima do
// target (não necessariamente igual).

// [1, 3, 8, 12, 19]
// target = 15

function sumEqualTarget(target: number, numbers: number[]) {
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
