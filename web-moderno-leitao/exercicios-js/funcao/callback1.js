const fabricantes = ["Mercedes", "Audi", "BMW", "Ferrari"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(a) {
  console.log(a)
})

// outra forma de exibir os itens do array
fabricantes.forEach(a => console.log(a))