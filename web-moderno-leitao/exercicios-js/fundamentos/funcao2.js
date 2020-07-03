// Armazenando uma função em uma variável / constante
const imprimirSoma = function (pA, pB) {
    console.log(pA + pB);
}

imprimirSoma(2, 3)


// Armazeandndo um função arror em uma variavel / constante
const soma = (pA, pB) => {
    return pA + pB
}

console.log(soma(2, 3));


// retorno implícito
const subtracao = (pA, pB) => pA - pB;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Teste Imprimir2');