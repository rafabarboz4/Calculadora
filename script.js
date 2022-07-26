function calcular(n1,n2){
    let n1_input = parseFloat(document.getElementById('n1_input').value)
    let n2_input = parseFloat(document.getElementById('n2_input').value)
    let selector = document.getElementById('operadores').value
    let resultado = document.getElementById('resultado')

    switch(selector){
        case 'soma':
            var calcular = n1_input + n2_input
            resultado.innerHTML = `O resultado da soma entre ${n1_input} e ${n2_input} é = ${calcular}`
            break;
        case 'subtracao':
            var calcular = n1_input - n2_input
            resultado.innerHTML = `O resultado da subtração entre ${n1_input} e ${n2_input} é = ${calcular}`
            break;
        case 'multiplicacao':
            var calcular = n1_input * n2_input
            resultado.innerHTML = `O resultado da multipicação entre ${n1_input} e ${n2_input} é = ${calcular}`
            break;
        case 'divisao':
            var calcular = n1_input / n2_input
            resultado.innerHTML = `O resultado da divisão entre ${n1_input} e ${n2_input} é = ${calcular}`
            break;
    }
}