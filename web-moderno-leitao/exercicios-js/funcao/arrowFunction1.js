// function tradicional
let dobro = function (a) {
  return 2 * a
}

// arrow function
dobro = (a) => {
  return 2 * a
}

// arrow function mais reduzida
// remover os parenteses caso houver somente um parâmetro
// remover as chaves qdo houver apenas uma instrução
// o return fica implícito neste tipode função reduzida
dobro = a => 2 * a

console.log( dobro( Math.PI ) )


// outro exemplo de função que será refatorada em uma arrow function
let ola = function() {
  return 'Olá'
}

// arrow function - exemplo 1
ola = () => 'Olá'

// arrow function - exemplo 2
ola = _ => 'Olá'

console.log( ola() )