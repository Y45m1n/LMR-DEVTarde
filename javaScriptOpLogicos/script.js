

function nParImpar() {
    let numero = document.getElementById("nDigitado").value;
    parseInt(numero)
    if (numero % 2 == 0) {
        alert(" O número é par!!");
    } else {
        alert(" O número é impar!! ");
    }
}

function switchCase() {
    let nValor1 = parseInt(document.getElementById("nValor1").value)
    let nValor2 = parseInt(document.getElementById("nValor2").value)
    let operacao = document.getElementById("operacao").value
    let resultado
    switch (operacao) {
        case "+":
            resultado = nValor1 + nValor2
            alert("o resultado é :" +resultado)
            break;

        case "-":
            resultado = nValor1 - nValor2
            alert("o resultado é :" +resultado)
            break;
        case "*":
            resultado = nValor1 * nValor2
            alert("o resultado é :" +resultado)
            break;
        case "/":
            if (nValor2 != 0) {
                resultado = nValor1 / nValor2
                alert("o resultado é :" +resultado)
            } else {
                alert("não pode divisão por ZERO")
            }

            break;
        default:
            alert("selecione nº válidos")
            break


    }

}

