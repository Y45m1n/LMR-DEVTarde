function concatenar(){
    let nome = document.getElementById("pNome").value;
    let sobrenome = document.getElementById("pSobrenome").value;
    if (pNome && pSobrenome == null){
        alert("Preencha todos os campos")
    } else{
        alert(nome+""+sobrenome);
    }
   
}