// Closure é o escopo criando quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// A função "fora" retora um valor resultante da função "dentro", cujo contexto léxico é o escopo da função "fora".
// Como existe uma variárvel "x" dentro do escopo da criação da função "dentro", a mesma irá retornar o texto "Local".

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())