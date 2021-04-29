
// no código abaixo o this não aponta para o objeto pessoa
/*
function Pessoa() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade) 
  }, 1000)
}

new Pessoa
*/

// para resolver isso, utiliza-se o bind no final da função
/*
function Pessoa() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade) 
  }.bind(this), 1000)
}

new Pessoa
*/

// outra forma de resolver o problema inicial seria criar uma constante amarrando o this do objeto
function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade) 
  }/*.bind(this)*/, 1000)
}

new Pessoa