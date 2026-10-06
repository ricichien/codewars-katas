// Bloco 1 — Aquecimento (arrays/strings simples)\*\*
// 1. Dado um array de números, retorne quantos são negativos.

function findNegativeNumbers(numbers: number[]) {
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      counter += 1;
    }
  }
  return counter;
}

// 2. Dado um array de strings, retorne quantas têm mais de 5 caracteres.

// [pato, cachorro, borboleta]
function returnMoreThanFive(text: string[]) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > 5) {
      counter += 1;
    }
  }
  return counter;
}

// 3. Dada uma string, retorne quantas consoantes ela tem.

// A regra para guardar

// || = "basta uma"

// É A OU E OU I?

// && = "todas precisam"

// É diferente de A E diferente de E E diferente de I...

function countConsonant(string: string) {
  let counter = 0;
  let text = string.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] !== "a" &&
      text[i] !== "e" &&
      text[i] !== "i" &&
      text[i] !== "o" &&
      text[i] !== "u"
    ) {
      counter += 1;
    }
  }
  return counter;
}

// 4. Dado um array de números, retorne a soma dos números ímpares que estão em posição par (índice par).

function sumOddOnEvenPosition(numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 && i % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Bloco 2 — Busca e condição\*\*
// 5. Dado um array de números, retorne o primeiro número negativo. Se não houver, retorne `undefined`.

function findFirstNegative(numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return numbers[i];
    }
  }
  return undefined;
}

// 6. Dado um array de strings, retorne a primeira palavra que começa com vogal.

// [ovo, abacate]
function firstVogal(strings: string[]) {
  for (let i = 0; i < strings.length; i++) {
    let letter = strings[i].split("")[0].toLowerCase();
    // string[i][0] serve também
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      return strings[i];
    }
  }
  return undefined;
}

// 7. Dado um array de números, retorne `true` se existir algum número igual à soma dos dois vizinhos ao lado (ex: `a[i] === a[i-1] + a[i+1]`).

function isSumEqualToNeightbour(numbers: number[]) {
  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i - 1] + numbers[i + 1]) {
      return true;
    }
  }
  return false;
}

// 8. Dado um array de números, retorne o índice do maior valor (não o valor, o índice).

function findBiggestNumberPosition(numbers: number[]) {
  let biggest = numbers[0];
  let position = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
      position = i;
    }
  }
  return position;
}

// Bloco 3 — Map/Set (contagem e presença)**
// 9. Dado um array de strings, retorne `true` se houver alguma palavra repetida (case-insensitive).

function areThereAnyRepeatedWords(strings: string[]): boolean {
  for (let i = 0; i < strings.length; i++) {
    let text = strings[i].toLowerCase();
    for (let j = i + 1; j < strings.length; j++) {
      if (text === strings[j].toLowerCase()) {
        return true;
      }
    }
  }
  return false;
}

// function areThereAnyRepeatedWords(strings: string[]): boolean {
//   const seen = new Set<string>();

//   for (let i = 0; i < strings.length; i++) {
//     const word = strings[i].toLowerCase();

//     if (seen.has(word)) {
//       return true;
//     }

//     seen.add(word);
//   }

//   return false;
// }

// 10. Dado um array de números, retorne quantos valores **distintos\*\* existem.

function countDistinctValues(numbers: number[]) {
  const seen = new Set<number>();
  let counter = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (!seen.has(num)) {
      seen.add(num);
      counter += 1;
    }
  }
  return counter;
}

// 11. Dado um array de strings, retorne a palavra que mais se repete (desempate: a que aparece primeiro).

function mostRepeatedWord(strings: string[]) {
  let mostRepeatedWord = "";
  let times = 0;
  let map = new Map<string, number>();
  for (let i = 0; i < strings.length; i++) {
    if (map.has(strings[i])) {
      let word = map.get(strings[i])!;
      map.set(strings[i], word + 1);
    } else {
      map.set(strings[i], 1);
    }
  }
  for (const [word, value] of map) {
    if (value > times) {
      times = value;
      mostRepeatedWord = word;
    }
  }
  return mostRepeatedWord;
}

// 12. Dados dois arrays de números, retorne `true` se eles têm exatamente os mesmos elementos, ignorando a ordem.

function hasSameElements(arrayOne: number[], arrayTwo: number[]): boolean {
  let mapOne = new Map<number, number>();
  let mapTwo = new Map<number, number>();
  if (arrayOne.length != arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (mapOne.has(arrayOne[i])) {
      let word = mapOne.get(arrayOne[i])!;
      mapOne.set(arrayOne[i], word + 1);
    } else {
      mapOne.set(arrayOne[i], 1);
    }
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    if (mapTwo.has(arrayTwo[j])) {
      let word = mapTwo.get(arrayTwo[j])!;
      mapTwo.set(arrayTwo[j], word + 1);
    } else {
      mapTwo.set(arrayTwo[j], 1);
    }
  }

  for (const [number, frequency] of mapOne) {
    if (mapTwo.get(number) !== frequency) {
      return false;
    }
  }
  return true;
}

// Bloco 4 — Dois ponteiros / sliding window (misturado, sem avisar qual)**
// 13. Dado um array de números ordenado, retorne o par de números com a **menor diferença\*\* entre eles.

function returnPairOfElements(numbers: number[]) {
  let pairOfElements: number[] = [];

  let left = 0;
  let right = 1;

  let smallerDifference = numbers[right] - numbers[left];
  while (right < numbers.length) {
    let difference = numbers[right] - numbers[left];

    if (difference < smallerDifference) {
      smallerDifference = difference;
      pairOfElements = [numbers[left], numbers[right]];
    }

    right++ + left++;
  }
  return pairOfElements;
}

// 14. Dado um array de números e um valor `k`, retorne `true` se existir algum subarray de tamanho `k` cuja soma seja igual a um valor alvo.

function hasSubarrayWithTargetSum(
  numbers: number[],
  target: number,
  k: number,
) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  if (sum === target) {
    return true;
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    sum -= numbers[i];
    sum += numbers[i + k];
    if (sum === target) {
      return true;
    }
  }
  return false;
}

// 15. Dada uma string, retorne `true` se ela pode virar um palíndromo removendo no máximo 1 caractere.

function isPalindromeRange(
  string: string,
  left: number,
  right: number,
): boolean {
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isPalindrome(string: string): boolean {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindromeRange(string, left + 1, right) ||
        isPalindromeRange(string, left, right - 1)
      );
    }
  }
  return true;
}

// 16. Dado um array de números, encontre o menor subarray contíguo cuja soma seja maior ou igual a um valor alvo (tamanho variável, não fixo).

function smallerSubarray(target: number, numbers: number[]): number {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < numbers.length; right++) {
    // 1. Aumenta a janela
    sum += numbers[right];

    // 2. Enquanto a janela já atingir o target,
    //    tenta diminuir ela pela esquerda
    while (sum >= target) {
      const currentLength = right - left + 1;

      if (currentLength < minLength) {
        minLength = currentLength;
      }

      sum -= numbers[left];
      left++;
    }
  }

  // Se nunca encontrou uma janela válida
  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

// Bloco 5 — Manipulação/transformação de array\*\*
// 17. Dado um array de números, mova todos os zeros para o final, mantendo a ordem relativa dos outros números (sem usar `filter`/`sort`).

function moveZerosToEnd(numbers: number[]): number[] {
  const result: number[] = [];
  let zeros = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      zeros++;
    } else {
      result.push(numbers[i]);
    }
  }

  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }

  return result;
}

// 18. Dado um array de números, retorne um novo array onde cada posição é o produto de todos os outros elementos, exceto o da própria posição (sem usar divisão).

function productExceptSelf(numbers: number[]): number[] {
  const result = new Array(numbers.length).fill(1);

  let leftProduct = 1;

  for (let i = 0; i < numbers.length; i++) {
    result[i] = leftProduct;
    leftProduct *= numbers[i];
  }

  let rightProduct = 1;

  for (let i = numbers.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= numbers[i];
  }

  return result;
}

// 19. Dado um array de objetos `{ nome: string, idade: number }`, retorne os nomes ordenados por idade (do mais novo pro mais velho), sem usar `.sort()`.

function sortByAge(people: { nome: string; idade: number }[]): string[] {
  const copy = [...people];

  for (let i = 0; i < copy.length; i++) {
    let youngest = i;

    for (let j = i + 1; j < copy.length; j++) {
      if (copy[j].idade < copy[youngest].idade) {
        youngest = j;
      }
    }

    const temp = copy[i];
    copy[i] = copy[youngest];
    copy[youngest] = temp;
  }

  return copy.map((person) => person.nome);
}

// Bloco 6 — Estilo "tarefa real" (não é LeetCode puro)\*\*
// 20. Você recebe um array de logs de acesso, cada um no formato `{ userId: string, timestamp: number }`. Escreva uma função que retorne, para cada usuário, o intervalo (em ms) entre seu primeiro e último acesso registrado.

function getUserAccessIntervals(
  logs: { userId: string; timestamp: number }[],
): Map<string, number> {
  const users = new Map<
    string,
    {
      first: number;
      last: number;
    }
  >();

  for (const log of logs) {
    if (!users.has(log.userId)) {
      users.set(log.userId, {
        first: log.timestamp,
        last: log.timestamp,
      });
    } else {
      const user = users.get(log.userId)!;

      if (log.timestamp < user.first) {
        user.first = log.timestamp;
      }

      if (log.timestamp > user.last) {
        user.last = log.timestamp;
      }
    }
  }

  const result = new Map<string, number>();

  for (const [userId, data] of users) {
    result.set(userId, data.last - data.first);
  }

  return result;
}
