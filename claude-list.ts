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
      return string[i];
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

// function smallestDifference(numbers: number[]): number {
//   let smallest = Infinity;

//   let left = 0;
//   let right = 1;

//   while (right < numbers.length) {
//     const difference = numbers[right] - numbers[left];

//     if (difference < smallest) {
//       smallest = difference;
//     }

//     left++;
//     right++;
//   }

//   return smallest;
// }

// Bloco 4 — Dois ponteiros / sliding window (misturado, sem avisar qual)**
// 13. Dado um array de números ordenado, retorne o par de números com a **menor diferença\*\* entre eles.
// 14. Dado um array de números e um valor `k`, retorne `true` se existir algum subarray de tamanho `k` cuja soma seja igual a um valor alvo.
// 15. Dada uma string, retorne `true` se ela pode virar um palíndromo removendo no máximo 1 caractere.
// 16. Dado um array de números, encontre o menor subarray contíguo cuja soma seja maior ou igual a um valor alvo (tamanho variável, não fixo).

// Bloco 5 — Manipulação/transformação de array\*\*
// 17. Dado um array de números, mova todos os zeros para o final, mantendo a ordem relativa dos outros números (sem usar `filter`/`sort`).
// 18. Dado um array de números, retorne um novo array onde cada posição é o produto de todos os outros elementos, exceto o da própria posição (sem usar divisão).
// 19. Dado um array de objetos `{ nome: string, idade: number }`, retorne os nomes ordenados por idade (do mais novo pro mais velho), sem usar `.sort()`.

// Bloco 6 — Estilo "tarefa real" (não é LeetCode puro)\*\*
// 20. Você recebe um array de logs de acesso, cada um no formato `{ userId: string, timestamp: number }`. Escreva uma função que retorne, para cada usuário, o intervalo (em ms) entre seu primeiro e último acesso registrado.
