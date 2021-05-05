// Objeto é uma coleção dinâmica de pares de chave e valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Gumercindo',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores:[{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calcularValorSeguro: function () {
    // ...  
  }

}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)