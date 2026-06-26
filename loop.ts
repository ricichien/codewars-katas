// Escreva uma função int ContarVogais(string texto) que recebe uma frase e retorna quantas vogais (a, e, i, o, u — minúsculas e maiúsculas) ela tem.
// Exemplo: ContarVogais("Pixel House") → deve retornar 4 (i, e, o, u, e... confere você mesmo contando).

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
