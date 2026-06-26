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
