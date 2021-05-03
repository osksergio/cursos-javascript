// Contexto Léxico: é um contexto onde os elementos (variárveis, constantes, etc) foram declarados.
// Uma função sempre leva em conta o local onde a mesma foi declarada, e não o local onde está sendo invocada.
// No exemplo abaixo a função "minhaFuncao" irá imprimir o texto 'Global', pois a constante "valor" foi declarada,
//   no escopo global, ou seja, o mesmo contexto léxico onde a função foi declarada.

const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local'
  minhaFuncao()
}

exec()