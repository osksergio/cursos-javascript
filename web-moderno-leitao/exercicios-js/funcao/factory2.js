function criarProdudo(descricao, preco = 0.00) {
  return {
    descricaoProd: descricao,
    precoProd: preco,
    desconto: 0.1
  }
}

console.log(criarProdudo('Teclado Mecânico', 247.20))