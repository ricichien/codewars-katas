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

---

## 3. Checklist de bugs comuns (revisar ANTES de submeter)

- [ ] `return` final está **fora** do loop (quando precisa processar tudo antes de devolver)?
- [ ] A condição do loop não deixa acessar índice fora dos limites? (teste mentalmente com o **maior** valor de `i`)
- [ ] Está comparando **valores** (`array[i]`), não **índices** (`i`)?
- [ ] Variável acumuladora/array de resultado declarado **fora** do loop?
- [ ] Métodos que retornam **novo** valor sem alterar o original (`toLowerCase`, `slice`, `map`, `filter`) — você guardou o retorno numa variável (`texto = texto.toLowerCase()`)?
- [ ] Métodos que **alteram o original direto** (`push`, `pop`, `sort`) — chamados **sem** `=` na frente?
- [ ] Testou mentalmente: array vazio? array com 1 elemento? todos os elementos iguais?

---

## 4. Sintaxe TS — referência rápida (o que você já usou)

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

## 5. Gestão de tempo na prova real (70 min, 4 questões)

| Questão | Tempo sugerido | Estratégia                                                                                                       |
| ------- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Q1      | 5–10 min       | Tem que saber sair limpo, sem travar                                                                             |
| Q2 / Q3 | 20–25 min cada | Aplica os padrões da seção 2; se travar 5 min sem rumo, tenta outro padrão                                       |
| Q4      | O que sobrar   | Se não der pra resolver bem, **submete uma solução de força-bruta funcionando** — vale mais que deixar em branco |

**Antes de cada submissão:** roda o checklist da seção 3 mentalmente. Leva 1-2 min e evita perder pontos por bug bobo.
