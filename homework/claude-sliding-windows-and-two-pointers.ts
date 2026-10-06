// 🌙 HOJE (22h — foco cirúrgico, ~45-60 min)

// 1. TP3 — Two Pointers (diferença mínima)
// Dado um array de números ordenado, encontre o par de números com a menor diferença absoluta entre eles. Retorne o par (ou a diferença, sua escolha).

// [1, 4, 7, 8, 20]
function smallerDifference(numbers: number[]) {
  let left = 0;
  let right = 1;
  let smallerDifference = numbers[right] - numbers[left];

  while (right < numbers.length - 1) {
    let difference = numbers[right] - numbers[left];
    right++;
    left++;
    if (smallerDifference > difference) {
      smallerDifference = difference;
    }
  }
  return smallerDifference;
}

// 2. TP5 — Two Pointers (palíndromo com remoção)
// Dada uma string, retorne `true` se ela pode se tornar um palíndromo removendo no máximo 1 caractere.
// Exemplo: `"abca"` → `true` (remove o "c" ou o "b").

// 2.1 Novo #2 — Two Pointers
// Dado um array ordenado, determine se existem dois números cuja diferença absoluta seja exatamente target.

function isTargetPossible(numbers: number[], target: number): boolean {
  let left = 0;
  let right = numbers.length - 1;
  //   let difference = numbers[right] - numbers[left];

  while (left < right) {
    let sum = numbers[right] - numbers[left];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else return true;
  }

  return false;
}

// 3. SW4 — Sliding Window variável (soma mínima)
// Dado um array de números positivos e um valor `target`, encontre o tamanho do menor subarray contíguo cuja soma seja maior ou igual a `target`. Se não existir, retorne 0.

function minSum(numbers: number[], target: number): number {
  let sum = 0;
  let left = 0;
  let minLength = Infinity;

  for (let right = 0; right < numbers.length; right++) {
    sum += numbers[right];

    while (sum >= target) {
      let currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
      }
      sum -= numbers[left];
      left++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

// 4. SW5 — Sliding Window variável (maior janela válida) *(só se o 3 fluir bem)*
// Dado um array de números e um valor `k`, encontre o tamanho da maior janela contígua cuja soma seja menor ou igual a `k`.

// ☀️ AMANHÃ DE MANHÃ (cabeça fresca, antes da entrevista)

// 5. TP6 — Two Pointers (identificação livre)
// Dado um array de números ordenado, verifique se existem dois números cuja soma seja igual a um valor `target`. Não pode usar Map/Set — pense em como aproveitar o array já estar ordenado.

// 6. SW6 — Sliding Window (identificação livre)
// Dada uma string, encontre o tamanho do maior substring sem caracteres repetidos.
// Exemplo: `"abcabcbb"` → `3` (substring `"abc"`).

// 7. Revisão rápida mista *(reforço geral, qualquer ordem)*
// Dado um array de números, encontre o menor subarray contíguo de tamanho exatamente 3 cuja soma seja a maior possível — mas sem fixar o `k`: você recebe também um segundo array de mesmo tamanho, e quer o intervalo `[i, i+2]` onde a soma dos dois arrays combinados (elemento a elemento) é máxima.
// *(Esse é propositalmente mais próximo de "problema estranho de entrevista" — force a decomposição antes de codar.)*

// Trabalha na ordem 1 → 2 → 3 → (4 se sobrar gás). Se travar mais de ~10-12 min em algum, me chama que eu ajudo com perguntas, não com a resposta pronta — igual vínhamos fazendo. Bora começar pelo primeiro?
