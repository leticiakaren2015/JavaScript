function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22 // forçar a hora para teste

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#ffe26c'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#f2a762'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#002436'
    }
}