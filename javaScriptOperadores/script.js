function boasVindas() {
    let nome;
    let sobrenome;

    nome = prompt("Digite o seu nome", "Digite aqui");
    sobrenome = prompt("Digite o seu sobrenome", "Digite aqui");
    alert("Olá" + nome + " " + sobrenome)
}
function somar() {
    let n1, n2, soma;
    n1 = prompt("Digite o 1º número", "Digite aqui");
    n2 = prompt("Digite o 2º número", "Digite aqui");
    soma = parseInt(n1) + parseInt(n2);
    alert(n1 + "+" + n2 + "=" + soma);
}
function subtração() {
    let n1, n2, subtração;
    n1 = prompt("Digite o 1º número", "Digite aqui");
    n2 = prompt("Digite o 2º número", "Digite aqui");
    subtração = parseInt(n1) - parseInt(n2);
    alert(n1 + "-" + n2 + "=" + subtração);
}
function divisão() {
    let n1, n2, divisão;
    n1 = prompt("Digite o 1º número", "Digite aqui");
    n2 = prompt("Digite o 2º número", "Digite aqui");
    if(n2!=0){
        divisão = parseInt(n1) / parseInt(n2);
        alert(n1 + "/" + n2 + "=" + divisão);
    } else {
        alert("error!! digite um numero diferente de 0")
    }
    
}
function multiplicação() {
    let n1, n2, multiplicação;
    n1 = prompt("Digite o 1º número", "Digite aqui");
    n2 = prompt("Digite o 2º número", "Digite aqui");
    multiplicação = parseInt(n1) * parseInt(n2);
    alert(n1 + "*" + n2 + "=" + multiplicação);
}