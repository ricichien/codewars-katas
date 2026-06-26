# Guia de Resolução de Problemas — CodeSignal (TypeScript)

## 1. Processo ANTES de codar (sempre nessa ordem)

1. **Leia o enunciado 2x.** Primeira vez pra pegar a ideia geral, segunda vez pra pegar detalhes (limites do array, casos especiais, tipo exato do retorno).
2. **Resolva o exemplo na mão**, índice por índice — como fizemos com "Pixel House" e com `[1,2,1,3,4]`. Se você não consegue fazer isso no papel, não vai conseguir programar.
3. **Identifique o padrão** (veja seção 2).
4. **Responda em palavras, antes de escrever código:**
   - Que tipo de loop?
   - Até onde ele vai (condição de parada)?
   - O que precisa ser guardado, e onde é declarado (dentro ou fora do loop)?
   - Onde fica o `return` (dentro ou fora do loop)?
5. Só então escreva código.

---

## 2. Padrões mais comuns (encaixe o problema em um destes)

### A) Percorrer e contar/verificar

_Exemplo já resolvido: `ContarVogais`_

- Loop simples (`for...of` quando só precisa do valor).
- Variável acumuladora declarada **fora** do loop.
- `if` dentro do loop testando uma condição.
- `return` **depois** do loop fechar (não dentro do `if`).

### B) Janela deslizante de tamanho fixo (sliding window)

_Exemplo já resolvido: Zigzag (janela de 3 elementos)_

- O array de saída tem tamanho `array.length - (tamanhoJanela - 1)`.
- Loop: `for (let i = 0; i < numbers.length - (tamanhoJanela - 1); i++)`
- Dentro do loop, acessa `numbers[i]`, `numbers[i+1]`, ..., até `numbers[i + tamanhoJanela - 1]`.
- Array de resultado criado **antes** do loop, populado com `.push()` a cada volta, `return` **depois** do loop.

### C) Contagem de frequência (Map)

_Exemplo: contar repetições de letras, números, palavras_

```typescript
const contagem = new Map<string, number>();
for (const item of lista) {
  contagem.set(item, (contagem.get(item) ?? 0) + 1);
}
```

- `Map.get(chave)` retorna `undefined` se a chave não existe — por isso o `?? 0` (usa 0 se ainda não tinha).
- `Map.set(chave, valor)` cria ou atualiza.
- `Map.has(chave)` verifica se a chave existe (equivalente ao `ContainsKey` do C#).

### D) Duas pontas (two-pointer)

_Útil quando: array está ordenado, ou você precisa comparar de fora pra dentro_

- Dois índices, ex: `let esquerda = 0, direita = array.length - 1`.
- Loop continua enquanto `esquerda < direita`.
- Cada volta, decide mover `esquerda++`, `direita--`, ou ambos, dependendo da condição.

### E) Matriz (array 2D)

- Loop dentro de loop: o de fora percorre linhas, o de dentro percorre colunas.
- `matrix[linha][coluna]` — cuidado pra não inverter a ordem.

```typescript
for (let linha = 0; linha < matrix.length; linha++) {
  for (let coluna = 0; coluna < matrix[linha].length; coluna++) {
    // matrix[linha][coluna]
  }
}
```

### F) Acumulador (soma, maior, menor, produto, média)

_Aparece em quase toda prova — é o "Padrão A" com uma variação: em vez de contar quantas vezes algo acontece, você vai guardando/atualizando um valor a cada volta._

```typescript
// Soma
let soma = 0;
for (const n of numeros) {
  soma += n;
}

// Maior elemento
let maior = numeros[0];
for (const n of numeros) {
  if (n > maior) maior = n;
}

// Menor elemento — mesma lógica, troca > por <
// Produto — mesma lógica da soma, mas começa em 1 (não em 0!) e usa *=
// Média — soma tudo, depois divide por numeros.length (cuidado: array vazio quebra a divisão)
```

- Variável inicializada **fora** do loop, sempre.
- Para "maior"/"menor": **não inicializa com `0`** — inicializa com o **primeiro elemento do array** (se todos os números forem negativos, começar em `0` dá resultado errado).

---

## 3. Árvore de decisão — identifique o padrão ANTES de implementar

```
✓ Preciso devolver um único valor?
  → number / boolean / string (Padrão A ou F)

✓ Preciso devolver vários valores?
  → criar um array (Padrão B, ou A/F guardando num array em vez de uma variável)

✓ Preciso comparar vizinhos (elemento anterior/seguinte)?
  → provavelmente precisa de índice (for), não for...of

✓ Preciso apenas olhar cada elemento, sem me importar com a posição dele?
  → for...of é suficiente

✓ Preciso lembrar quantas vezes algo apareceu, ou associar uma chave a um valor?
  → Map (Padrão C)

✓ Preciso olhar grupos de elementos consecutivos (trios, pares, janelas)?
  → Sliding Window (Padrão B)

✓ Preciso ir somando/comparando um valor conforme percorro o array?
  → Acumulador (Padrão F)
```

Isso evita o erro mais caro: começar a escrever código antes de saber qual ferramenta usar.

## 4. A dificuldade real não é a sintaxe — é traduzir o enunciado em lógica

Pelo que vimos até aqui (principalmente no zigzag): você não trava no `for`, no `if`, ou no TypeScript em si. Você trava quando o enunciado descreve um conceito ("zigzag", "pico", "vale") e seu cérebro ainda não converteu isso numa regra concreta e mecânica.

**Hábito que resolve isso, antes de qualquer linha de código:**

1. Pega o **exemplo dado no enunciado** e refaz ele na mão, devagar, anotando o que está acontecendo em cada passo (como fizemos: "índice 0: 1<2>1, é zigzag").
2. Só depois que você consegue **explicar em português, sem usar nenhuma palavra do enunciado original**, o que faz algo ser ou não ser o que o problema pede, você está pronto pra pensar em código.
3. Se em 2-3 minutos você não conseguiu reescrever a regra com suas próprias palavras, o problema não é de programação ainda — é de **entendimento**. Releia o enunciado, ou refaça o exemplo na mão de novo, antes de tentar codar.

---

## 5. Checklist de bugs comuns (revisar ANTES de submeter)

- [ ] `return` final está **fora** do loop (quando precisa processar tudo antes de devolver)?
- [ ] A condição do loop não deixa acessar índice fora dos limites? (teste mentalmente com o **maior** valor de `i`)
- [ ] Está comparando **valores** (`array[i]`), não **índices** (`i`)?
- [ ] Variável acumuladora/array de resultado declarado **fora** do loop?
- [ ] Métodos que retornam **novo** valor sem alterar o original (`toLowerCase`, `slice`, `map`, `filter`) — você guardou o retorno numa variável (`texto = texto.toLowerCase()`)?
- [ ] Métodos que **alteram o original direto** (`push`, `pop`, `sort`) — chamados **sem** `=` na frente?
- [ ] Testou mentalmente: array vazio? array com 1 elemento? todos os elementos iguais?

---

## 6. Sintaxe TS — referência rápida (o que você já usou)

| O que fazer              | Sintaxe                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| Percorrer valores        | `for (const item of array) { }`                                  |
| Percorrer com índice     | `for (let i = 0; i < array.length; i++) { }`                     |
| Condição múltipla (E)    | `if (a && b)`                                                    |
| Condição múltipla (OU)   | `if (a \|\| b)`                                                  |
| Agrupar condições        | `(condA && condB) \|\| (condC && condD)`                         |
| Minúscula                | `texto.toLowerCase()` (retorna nova string — precisa reatribuir) |
| Adicionar a um array     | `array.push(valor)` (altera o array original, sem `=`)           |
| Criar array tipado vazio | `const resultado: number[] = []`                                 |
| Map (contagem)           | `new Map<TipoChave, TipoValor>()`, `.set()`, `.get()`, `.has()`  |

---

## 7. Gestão de tempo na prova real (70 min, 4 questões)

| Questão | Tempo sugerido | Estratégia                                                                                                       |
| ------- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Q1      | 5–10 min       | Tem que saber sair limpo, sem travar                                                                             |
| Q2 / Q3 | 20–25 min cada | Aplica os padrões da seção 2; se travar 5 min sem rumo, tenta outro padrão                                       |
| Q4      | O que sobrar   | Se não der pra resolver bem, **submete uma solução de força-bruta funcionando** — vale mais que deixar em branco |

**Antes de cada submissão:** roda o checklist da seção 5 mentalmente. Leva 1-2 min e evita perder pontos por bug bobo.
