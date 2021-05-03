// uma função factory tem como finalidade a criação de um objeto
// para evitar repetição de códigos usamos uma factory para criação de certos objetos
// no exemplo abaixo os valores do objeto estão fixos, mas nada impede de utilizar parametros para flexibilizar os dados

// importante: utilizando a factory não é necessário a utlização do comando "new", pois ela já retorna um objeto.
//             diferente a função construtora que apenas possui um "molde" (classe), na qual é criado um objeto através 
//             do comando "new" (ver exemplo no arquivo "funcaoConstrutora.js") 

function criarPessoa() {
  return {
    nome: 'Sergio',
    sobrenome: 'Oseko'
  }
}

console.log(criarPessoa())