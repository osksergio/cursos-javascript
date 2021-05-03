console.log(soma(3, 4))

// function declaration
// --------------------
// a vantagem de declarar a função desta forma, é que o Javascript carrega primeiro todas as funções deste tipo
// neste caso a função pode ser invocada antes mesmo de sua declaração (o que está ocorrendo na linha 1)
function soma(x, y) {
  return x + y
}

// function expression
// -------------------
const sub = function (x, y) {
  return x - y
}

console.log(sub(3, 4))

// name function expression
// ------------------------
// a vantagem de utilizar este tipo de função, é na hora de debugar o código, pois irá aparecer o nome da função (mult)
// caso ocorrer algum problema no trecho de código envolvendo esta função
const mult = function mult(x, y) {
  return x * y
}

console.log(mult(3, 4))