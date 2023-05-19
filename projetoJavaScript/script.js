function cadastroEvento(){
    let nomeEvento = document.getElementById("nomeEvento").value;
    let dataEvento = document.getElementById("data").value;
    let nMaxParticipantes = document.getElementById("nMax").value;
    let nomePalestrante = document.getElementById("nomePalestrante").value;
    let verificacao
    verificacao= nomeEvento && dataEvento && nMaxParticipantes && nomePalestrante 
    verificacao==true

    if(nMaxParticipantes<=0){
        alert("O número mínimo de participantes é de 1 pessoa")
        if (verificacao == false){
            alert("Verifique se todos os campos foram preenchidos corretamente")
        } else  {
            alert("Cadastro do Evento finalizado com sucesso")
        }
    }else if(nMaxParticipantes>100){
        alert("O número máximo de participantes é de 100 pessoas")
    }
    
      
    
   

    

  

}