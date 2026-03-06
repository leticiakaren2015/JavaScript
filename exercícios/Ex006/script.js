function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        // Cria um elemento <img> e atribui a ele o id "foto"
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/criança-menino.jpg')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menino.jpg')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/criança-menina.jpg')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menina.jpg')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}