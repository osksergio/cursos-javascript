// função sem retorno
function imprimirSoma(pA, pB) {
    console.log(pA + pB);
}

imprimirSoma(2, 3);


// função com retorno
function soma(pA, pB = 1) {
    return pA + pB;
}

console.log(soma(2, 3));
console.log(soma(2));