function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.0);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade ...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])