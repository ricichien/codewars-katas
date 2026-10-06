// ## 1) Loop (`for` e `foreach`)

// Servem pra repetir uma ação. Diferença prática:

// ```csharp
// int[] numeros = { 10, 20, 30 };

// // "for": quando você precisa do índice (posição)
// for (int i = 0; i < numeros.Length; i++)
// {
//     Console.WriteLine($"Índice {i}: {numeros[i]}");
// }

// // "foreach": quando você só precisa do valor, não da posição
// foreach (int n in numeros)
// {
//     Console.WriteLine(n);
// }
// ```

// `numeros.Length` é o tamanho do array. **Erro mais comum de principiante:** usar `<=` em vez de `<` na condição do `for`, o que tenta acessar uma posição que não existe (índice começa em 0, então um array de tamanho 3 vai de `0` a `2`).

// ## 2) Array vs `List<T>`

// Array tem tamanho fixo. `List<T>` cresce/encolhe dinamicamente — é o que você vai usar na maioria das questões:

// ```csharp
// List<int> lista = new List<int> { 10, 20, 30 };
// lista.Add(40);          // adiciona no final
// lista.Remove(20);       // remove o valor 20
// int tamanho = lista.Count;   // (List usa .Count, array usa .Length — pegadinha clássica)
// ```

// ## 3) Strings — os métodos que mais aparecem

// ```csharp
// string texto = "Hello World";

// texto.Length;                  // 11 (tamanho)
// texto.ToLower();                // "hello world"
// texto.Split(' ');                // ["Hello", "World"] — quebra em partes
// texto.Contains("World");        // true
// texto.Substring(0, 5);          // "Hello" (do índice 0, pega 5 caracteres)
// texto.ToCharArray();             // transforma em array de caracteres, pra percorrer letra por letra
// ```

// ## 4) `Dictionary<TKey, TValue>` — o mais importante dos quatro

// É um "mapa" chave→valor. Serve pra **contar coisas** ou **buscar rápido** sem precisar percorrer tudo de novo. Exemplo clássico: contar quantas vezes cada letra aparece numa palavra.

// ```csharp
// string palavra = "banana";
// Dictionary<char, int> contagem = new Dictionary<char, int>();

// foreach (char letra in palavra)
// {
//     if (contagem.ContainsKey(letra))
//         contagem[letra]++;          // já existe essa letra, soma 1
//     else
//         contagem[letra] = 1;        // primeira vez vendo essa letra
// }
// ```

// Isso é o padrão de "contagem de frequência" que aparece direto em questões de array/string — guarda esse padrão na cabeça.

// ---

// ## Exercício de aquecimento (faz sozinho, sem mim)

// > Escreva uma função `int ContarVogais(string texto)` que recebe uma frase e retorna quantas vogais (a, e, i, o, u — minúsculas e maiúsculas) ela tem.
// >
// > Exemplo: `ContarVogais("Pixel House")` → deve retornar `4` (i, e, o, u, e... confere você mesmo contando).

// Tenta resolver no CodeSignal (cria a conta, escolhe C#) ou só aqui mesmo num editor qualquer. Quando terminar, me manda o código — eu reviso do mesmo jeito que revisei seus testes: aponto o que está errado, não reescrevo por você.

function contarVogais(texto: string): number {
  texto = texto.toLowerCase();
  let contador = 0;
  for (const letra of texto) {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }
  return contador;
}

// Iterar de 5 em 5
for (let number = 0; number <= 100; number += 5) {
  console.log(number);
}

// Você recebe uma lista de números. Quer que você olhe grupos de 3 números vizinhos (trios consecutivos) e diga, para cada trio, se ele forma um "zigue-zague" ou não.
// O que é um "zigue-zague"? É quando o número do meio é um pico (maior que os dois vizinhos) ou um vale (menor que os dois vizinhos). Ou seja:

// a < b > c → o do meio (b) é maior que os dois ao redor → sobe e desce → zigue-zague.
// a > b < c → o do meio (b) é menor que os dois ao redor → desce e sobe → também zigue-zague.

// Se o do meio não for nem pico nem vale (ex: os números só estão subindo, ou só descendo, ou tudo igual), não é zigue-zague.
// Andando pelo exemplo, número por número
// numbers = [1, 2, 1, 3, 4] (índices: 0, 1, 2, 3, 4)
// Como o array tem 5 números, e cada trio usa 3 números seguidos, você consegue formar 5 - 2 = 3 trios, "deslizando" uma posição por vez:
// índice:    0  1  2  3  4
// valores:   1  2  1  3  4

// Trio 1 (começa no índice 0): (1, 2, 1)  →  1 < 2 > 1  →  é zigzag → 1
// Trio 2 (começa no índice 1): (2, 1, 3)  →  2 > 1 < 3  →  é zigzag → 1
// Trio 3 (começa no índice 2): (1, 3, 4)  →  1 < 3 < 4  →  não é (só está subindo) → 0
// Resultado: [1, 1, 0] — bate com o que o enunciado disse.
// Repara que cada trio "começa" num índice diferente (0, depois 1, depois 2), e usa esse índice + os dois seguintes. É esse padrão de "janela deslizante" que você vai programar.
// Agora, as mesmas 4 perguntas de antes — me responde uma de cada vez, comece pela primeira:
// 1) Loop: como aqui você precisa saber em qual índice cada trio começa (pra acessar numbers[i], numbers[i+1], numbers[i+2]), você precisa de for (com contador i) ou foreach (só o valor)?

// for pois precisamos acessar o indice do array
function isZigzag(numbers: number[]) {
  let resultado: number[] = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (
      (numbers[i + 1] > numbers[i] && numbers[i + 1] > numbers[i + 2]) ||
      (numbers[i + 1] < numbers[i] && numbers[i + 1] < numbers[i + 2])
    ) {
      resultado.push(1);
    } else {
      resultado.push(0);
    }
  }
  return resultado;
}

// 1) (Padrão A — aquecimento)

// Escreva solution(numbers: number[]) que retorna true se o array está em ordem estritamente crescente (cada número maior que o anterior), e false caso contrário. Array com 1 elemento conta como true.

// 2) (Padrão B — janela deslizante, parecido com o zigzag)

// Escreva solution(numbers: number[]) que retorna um array onde a posição i é a soma de numbers[i] e numbers[i+1] (soma de pares consecutivos). Para [1, 2, 3, 4], o resultado é [3, 5, 7].

// 3) (Padrão C — contagem de frequência, mais difícil)

// Escreva solution(numbers: number[]) que retorna o(s) número(s) que aparece(m) mais de uma vez no array, como um novo array (sem duplicar o mesmo número repetido na saída). Para [1, 2, 3, 2, 1, 1], o resultado deve conter 1 e 2 (em qualquer ordem).

function isIncreasing(numbers: number[]) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] < numbers[i]) {
      return false;
    }
  }
  return true;
}

function zigzagSum(numbers: number[]) {
  let resultado: number[] = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    resultado.push(numbers[i] + numbers[i + 1]);
  }
  return resultado;
}

function repeatedNumber(numbers: number[]) {
  let resultado: number[] = [];
  const contagem = new Map<number, number>();
  for (const item of numbers) {
    contagem.set(item, (contagem.get(item) ?? 0) + 1);
  }
  for (const numero of contagem.keys()) {
    if ((contagem.get(numero) ?? 0) > 1) {
      resultado.push(numero);
    }
  }
  return resultado;
}

// 1) (Two-pointer — padrão novo, ainda não testado na prática)

// Dado um array de números ordenado e um número alvo, retorne true se existirem dois números no array cuja soma seja exatamente igual a alvo, e false caso contrário.

// Exemplo: numbers = [1, 3, 5, 8, 11], alvo = 9 → true (porque 1 + 8 = 9).

// Exemplo: numbers = [1, 3, 5, 8, 11], alvo = 20 → false.

// Dica de raciocínio (sem resolver pra você): por que faz sentido usar um índice começando no início e outro no fim, e mover eles "um em direção ao outro" dependendo se a soma atual está maior ou menor que o alvo?

// 2) (Sliding window + acumulador — combina dois padrões que você já sabe)

// Dado um array de números e um número k, retorne a maior soma possível entre k números consecutivos do array.

// Exemplo: numbers = [2, 1, 5, 1, 3, 2], k = 3 → 9 (porque 5 + 1 + 3 = 9, que é a maior soma de 3 números seguidos).

// 3) (Mais difícil — Map com cuidado extra na ordem)

// Dado um array de números, retorne o primeiro número que NÃO se repete (aparece exatamente uma vez). Se todos se repetem, retorne -1.

// Exemplo: numbers = [2, 3, 3, 2, 5, 7, 7] → 5 (porque 2 e 3 se repetem, e 5 é o primeiro que aparece só uma vez).

// Esse último tem uma pegadinha: o padrão de Map que você já domina te dá a contagem, mas não garante a ordem certa de quem é "primeiro" — pensa em quantas vezes você precisa percorrer o array original, e em que ordem.

function findTarget(numbers: number[], target: number) {
  for (let start = 0; start < numbers.length - 1; start++) {
    for (let end = start + 1; end < numbers.length; end++) {
      if (numbers[start] + numbers[end] === target) {
        return true;
      }
    }
  }
  return false;
}

function findTargetEfficiently(numbers: number[], target: number) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) return true;
    else if (numbers[start] + numbers[end] < target) start++;
    else end--;
  }
  return false;
}

function findBiggerNumber(numbers: number[], k: number) {
  let maior = 0;
  for (let i = 0; i < numbers.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j <= i + k - 1; j++) {
      sum += numbers[j];
    }
    if (sum > maior) maior = sum;
  }
  return maior;
}

// function solution(a: number[]): number {
//   const contagem = new Map<number, number>();
//   let tupla: number;
//   for (let i = 0; i < a.length - (3 - 1); i++) {
//     for (const item of a) {
//       contagem.set(item, (contagem.get(item) ?? 0) + 1);
//       if (
//         contagem.get(a[i]) === contagem.get(a[i + 1]) ||
//         contagem.get(a[i]) === contagem.get(a[i + 2]) ||
//         contagem.get(a[i + 1]) === contagem.get(a[i + 2])
//       ) {
//         tupla += 1;
//       }
//     }
//   }
//   return tupla;
// }

// Simulation
// Qual é o estado que muda durante a execução? (Saldo, Vida, Estoque, Temperatura, Desconto, Energia, etc)
// O que faz esse estado aumentar?
// O que faz esse estado diminuir?
// Quando eu devo retornar esse estado?

function finalBalanceWithTax(numbers: number[]) {
  let balance = 0;
  for (let i = 0; numbers.length > i; i++) {
    if (numbers[i] < 0) {
      balance += numbers[i] - 3;
    } else balance += numbers[i];
  }
  return balance;
}

//Frequencia (Map)
// cria um Map vazio
// para cada número
//     existe?
//         sim
//             pega a quantidade
//             soma 1
//             salva
//         não
//             cria com 1
// retorna o Map

function usingMap(numbers: number[]) {
  let drawer = new Map<number, number>();
  for (let i = 0; numbers.length > i; i++) {
    if (drawer.has(numbers[i])) {
      let value = drawer.get(numbers[i])!;
      drawer.set(numbers[i], value + 1);
    } else {
      drawer.set(numbers[i], 1);
    }
  }
  return drawer;
}

function usingMapToReturnOnlyRepeated(numbers: number[]) {
  let repeated = new Map<number, number>();
  let array: number[] = [];
  for (let i = 0; numbers.length > i; i++) {
    if (repeated.has(numbers[i])) {
      let exists = repeated.get(numbers[i])!;
      repeated.set(numbers[i], exists + 1);
    } else {
      repeated.set(numbers[i], 1);
    }
  }
  for (const numero of repeated.keys()) {
    let value = repeated.get(numero)!;
    if (value > 1) {
      array.push(numero);
    }
  }
  return array;
}

function findMostFrequent(numbers: number[]): number {
  let repeated = new Map<number, number>();
  let mostFrequent = 0;
  let frequency = 0;
  for (let i = 0; numbers.length > i; i++) {
    if (repeated.has(numbers[i])) {
      let exists = repeated.get(numbers[i])!;
      repeated.set(numbers[i], exists + 1);
    } else {
      repeated.set(numbers[i], 1);
    }
  }
  for (const numero of repeated.keys()) {
    // retornar key com maior frequencia
    // eu já sei pegar a frequencia
    let value = repeated.get(numero)!;
    if (frequency < value) {
      frequency = value;
      mostFrequent = numero;
    }
  }
  return mostFrequent;
}

// [5, 3, 7, 3, 5]
function firstRepeated(numbers: number[]): number {
  let repeated = new Map<number, number>();
  for (let i = 0; numbers.length > i; i++) {
    if (repeated.has(numbers[i])) {
      return numbers[i];
    } else {
      repeated.set(numbers[i], 1);
    }
  }
  return -1;
}

function soloNumber(numbers: number[]): number[] {
  let solo = new Map<number, number>();
  let soloNumbers: number[] = [];
  for (let i = 0; numbers.length > i; i++) {
    if (solo.has(numbers[i])) {
      let value = solo.get(numbers[i])!;
      solo.set(numbers[i], value + 1);
    } else {
      solo.set(numbers[i], 1);
    }
  }
  for (const numero of solo.keys()) {
    let value = solo.get(numero)!;
    if (value === 1) {
      soloNumbers.push(numero);
    }
  }
  return soloNumbers;
}

// radar
// function isPalindrome(text: string): boolean {
//   let left = 0;
//   let right = text.length - 1;
//   while (left < right) {
//     if (text[left] !== text[right]) {
//       return false;
//     } else if (text[left] === text[right]) {
//       right--;
//       left++;
//     }
//   }
//   return true;
// }

function isPalindromeNumber(numbers: number[]): boolean {
  let first = 0;
  let last = numbers.length - 1;
  while (last > first) {
    if (numbers[first] !== numbers[last]) {
      return false;
    } else {
      first++;
      last--;
    }
  }
  return true;
}

// Two Pointers
// [1, 2, 3, 4, 6, 8, 10]
// for: "Tenho uma sequência/quantidade de iterações que quero percorrer."

// while: "Continuo fazendo isso enquanto uma condição for verdadeira."

function targetValue(numbers: number[]) {
  let left = 0;
  let right = numbers.length - 1;
  const target = 10;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return true;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

function findPair(numbers: number[]) {
  let response = [];
  let left = 0;
  let right = numbers.length - 1;
  const target = 10;
  while (left > right) {
    if (numbers[left] + numbers[right] === target) {
      return response.push(numbers[left], numbers[right]);
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else left++;
  }
  return [];
}

// function countEven(numbers: number[]) {
//   let counter = 0;
//   for (let i = 0; numbers.length > i; i++) {
//     if (numbers[i] % 2 === 0) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// function findMax(numbers: number[]) {
//   let max = numbers[0];
//   for (let i = 1; numbers.length > i; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// function findFrequency(numbers: number[]) {
//   let frequency = new Map<number, number>();
//   for (let i = 0; numbers.length > i; i++) {
//     if (frequency.has(numbers[i])) {
//       let value = frequency.get(numbers[i])!;
//       frequency.set(numbers[i], value + 1);
//     } else {
//       frequency.set(numbers[i], 1);
//     }
//   }
//   return frequency;
// }

// function findRepeated(numbers: number[]) {
//   let frequency = new Map<number, number>();
//   let repeated: number[] = [];

//   for (let i = 0; numbers.length > i; i++) {
//     if (frequency.has(numbers[i])) {
//       let value = frequency.get(numbers[i])!;
//       frequency.set(numbers[i], value + 1);
//       if (!repeated.includes(numbers[i])) {
//         repeated.push(numbers[i]);
//       }
//     } else {
//       frequency.set(numbers[i], 1);
//     }
//   }

//   return repeated;
// }

function removeDuplicates(numbers: number[]) {
  if (numbers.length === 0) {
    return [];
  }

  let i = 0;

  for (let j = 1; j < numbers.length; j++) {
    if (numbers[j] !== numbers[i]) {
      i++;
      numbers[i] = numbers[j];
    }
  }
  return numbers.slice(0, i + 1);
}

// filter
const greatNumbers = [3, 8, 12, 5, 20, 7, 15];
function onlyGreaterThanTen(greatNumbers: number[]): number[] {
  return greatNumbers.filter((greatNumbers) => greatNumbers > 10);
}

function findExactlyTwice(numbers: number[]): number[] {
  let map = new Map<number, number>();
  let twice: number[] = [];
  for (let i = 0; numbers.length > i; i++) {
    if (map.has(numbers[i])) {
      let num = map.get(numbers[i])!;
      map.set(numbers[i], num + 1);
    } else {
      map.set(numbers[i], 1);
    }
  }
  for (const number of map.keys()) {
    let value = map.get(number)!;
    if (value === 2) {
      twice.push(number);
    }
  }
  return twice;
}

// function findMostFrequent(numbers: number[]): number {
//   let map = new Map<number, number>();
//   let mostFrequent = numbers[0];
//   let frequency = 0;
//   for (let i = 0; numbers.length > i; i++) {
//     if (map.has(numbers[i])) {
//       let num = map.get(numbers[i])!;
//       map.set(numbers[i], num + 1);
//     } else {
//       map.set(numbers[i], 1);
//     }
//   }
//   for (const number of map.keys()) {
//     let value = map.get(number)!;
//     if (value > frequency) {
//       frequency = value;
//       mostFrequent = number;
//     }
//   }
//   return mostFrequent;
// }

function maxSum(numbers: number[], k: number): number {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  maxSum = sum;

  for (let i = 0; i < numbers.length - k; i++) {
    sum -= numbers[i];
    sum += numbers[i + k];

    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

function printMultipleOfFive(): void {
  let result = [];
  let multiple = 0;
  while (multiple <= 95) {
    multiple = multiple + 5;
    result.push(multiple);
  }
  console.log(result);
}

//5 + 10 + 15 + ... + 100
function sumMultiplesOfFive(): number {
  let sum = 0;
  let acumulador = [];
  let result = 0;
  while (sum <= 95) {
    sum = +sum + 5;
    acumulador.push(sum);
  }
  for (let i = 0; acumulador.length > i; i++) {
    result = +result + acumulador[i];
  }
  return result;
}

// function sumMultiplesOfFive(): number {
//   let sum = 0;
//   let result = 0;

//   while (sum <= 95) {
//     sum = sum + 5;
//     result = result + sum;
//   }

//   return result;
// }

// [1, 12, -5, -6, 50, 3]
function maxAverage(numbers: number[], k: number): number {
  let sum = 0;
  let average = 0;
  let maxAverage = 0;

  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  maxAverage = sum / k;

  for (let i = 0; i < numbers.length - k; i++) {
    sum -= numbers[i];
    sum += numbers[i + k];
    average = sum / k;
    if (average > maxAverage) {
      maxAverage = average;
    }
  }

  return maxAverage;
}

function minSum(numbers: number[], k: number): number {
  let minSum = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  minSum = sum;

  for (let i = 0; i < numbers.length - k; i++) {
    sum -= numbers[i];
    sum += numbers[i + k];
    if (sum < minSum) {
      minSum = sum;
    }
  }
  return minSum;
}

function countWindowsAbove(
  numbers: number[],
  k: number,
  target: number,
): number {
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  if (sum > target) {
    counter += 1;
  }

  for (let i = 0; i < numbers.length - k; i++) {
    sum -= numbers[i];
    sum += numbers[i + k];
    if (sum > target) {
      counter += 1;
    }
  }

  return counter;
}

function biggestConsecutiveSum(numbers: number[], k: number): number {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }

  maxSum = sum;

  for (let i = 0; i < numbers.length - k; i++) {
    sum -= numbers[i];
    sum += numbers[i + k];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

// function findMissingNumber(numbers: number[]): number {
//   let missingNumber = 0;
//   let expectedValue = 0;
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   for (let i = 0; i < numbers.length + 2; i++) {
//     expectedValue += i;
//   }
//   if (expectedValue > sum) {
//     missingNumber = expectedValue - sum;
//   }
//   return missingNumber;
// }

// chatgpt solution ->

// function findMissingNumber(numbers: number[]): number {
//   const n = numbers.length + 1;
//   const expected = (n * (n + 1)) / 2;
//   const actual = numbers.reduce((sum, number) => sum + number, 0);

//   return expected - actual;
// }

// array de 4 = 1,2,4,5 = 12
// expected value = 1,2,3,4 = 10

// function countNumbersGreaterThan(
//   numbers: number[],
//   target: number
// ): number {

// }
