// Bloco 1 — Matriz / nested loop (i, j)
// 1. Dada uma matriz quadrada de números (array de arrays), retorne a soma da diagonal principal.
// 2. Dada uma matriz, retorne `true` se ela é simétrica (`matriz[i][j] === matriz[j][i]` para todo par).
// 3. Dada uma matriz, retorne um novo array com a soma de cada linha.
// 4. Dada uma matriz, encontre a posição (linha e coluna) do maior valor.
// 5. Dada uma matriz, conte quantos elementos são maiores que todos os seus vizinhos diretos (cima/baixo/esquerda/direita).

// Bloco 2 — Palíndromo e variações (two pointers)
// 6. Dada uma string, ignore espaços e pontuação e verifique se é um palíndromo (ex: "A man a plan a canal Panama").
// 7. Dado um array de números, verifique se ele é "quase palíndromo": pode ficar um palíndromo removendo no máximo 1 elemento.
// 8. Dada uma string, encontre o maior substring palíndromo (pode ser força bruta com dois `for`, não precisa ser a solução ótima).

// Bloco 3 — Dois ponteiros clássico
// 9. Dado um array ordenado, remova duplicatas in-place e retorne o novo tamanho (sem criar array novo).
// 10. Dado um array de números, mova todos os números pares para o início e ímpares para o fim (ordem interna não importa).
// 11. Dado um array ordenado de números positivos, retorne `true` se existir um trio de números que somam um valor alvo (three sum, força bruta é ok: um `for` + dois ponteiros dentro).

// Bloco 4 — Sliding window (tamanho fixo e variável)
// 12. Dado um array de números e `k`, retorne `true` se existir algum subarray de tamanho `k` com todos os elementos distintos.
// 13. Dada uma string, encontre o tamanho do maior substring sem caracteres repetidos.
// 14. Dado um array de 0s e 1s e um número `k`, encontre o maior subarray de 1s que você consegue formar trocando no máximo `k` zeros por 1.

// Bloco 5 — Simulação (estado que muda passo a passo)
// 15. Simule um "cofre": você recebe uma lista de operações `{ tipo: "deposito" | "saque", valor: number }`. Se um saque deixar o saldo negativo, ele é ignorado. Retorne o saldo final.
// 16. Simule um jogo de "vida": você começa com 100 pontos de vida. Recebe uma lista de eventos (`number[]`, positivos curam, negativos causam dano). Se a vida chegar a 0 ou menos, pare de processar eventos e retorne em qual índice o personagem "morreu" (ou -1 se sobreviver).
// 17. Simule um elevador: recebe uma lista de andares solicitados em ordem, começando no andar 0. Retorne a distância total percorrida (soma dos deslocamentos absolutos entre andares consecutivos).

// Bloco 6 — Combinações / mais próximos de entrevista real
// 18. Dado um array de objetos `{ produto: string, preco: number, quantidade: number }`, retorne o valor total do "carrinho" (preco × quantidade somado) e separadamente o produto mais caro.
// 19. Você recebe um array de strings representando horários de entrada `["09:00", "09:15", "10:00"]`. Retorne `true` se existirem dois horários com menos de 10 minutos de diferença entre si (indica possível conflito de agenda).
// 20. Dado um array de números representando preços de uma ação ao longo dos dias, encontre o melhor dia para comprar e o melhor dia para vender (comprar antes de vender) que maximiza o lucro — sem usar força bruta O(n²) se conseguir (dica: pense em "menor preço visto até agora").

// Quer seguir pela ordem, ou prefere que eu escolha um pra te jogar agora, misturando os tipos pra simular melhor a imprevisibilidade da entrevista real?
