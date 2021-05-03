// Desafio: tranformar a classe abaixo em uma função construtora
// -------------------------------------------------------------

// Classe Pessoa
// -------------
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()

// Funcão construtora
// ------------------
function pessoaConstrutora(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${nome}`)
  }
}

const p2 = new pessoaConstrutora('Maria')
p2.falar()