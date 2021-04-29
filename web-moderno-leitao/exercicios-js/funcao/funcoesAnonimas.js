// função anônima
const soma = function(x, y) {
  return x + y
}

// outra função anônima com três parametros, onde o terceiro se não for informado, por padrão é executada a função anterior
const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado( 3, 4 )
imprimirResultado( 3, 4, soma)
imprimirResultado( 3, 4, function( x, y ) {
  return x - y
} )

// passando uma arrow function como terceiro parametro
imprimirResultado( 3, 4, (x, y) => x * y )




// exemplo de função anônima dentro de um objeto
const pessoa = {
  falar: function () {
    console.log('Opa!')
  }
}

pessoa.falar()