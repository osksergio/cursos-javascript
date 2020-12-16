function teste1(num) {
    if (num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(7)


function teste2(num) {
    if (num > 7); {        // cuidado com o ";"
        console.log(num)   // não usar ";" nas estruturas de controle
    }
}

teste1(6)
teste2(8)