function enviarReserva() {
    let nomeReserva = document.getElementById("nomeReserva").value;
    let nomeLivro = document.getElementById("nomeLivro").value;
    let nomeCurso = document.getElementById("nomeCurso").value;
    let enviar
    enviar = nomeReserva && nomeLivro && nomeCurso
    enviar == true
    if (enviar == false) {
        alert("Reserva do livro não foi realizada!")
    } else {
        alert("Reserva do livro finalizada com sucesso!")
    }
}









