function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') //querySelector é a maneira mais moderna de chamar a variável

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') //se atentar para Elements no plural. Pois temos mais de uma opção de escolha no radsex
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Mesma coisa que eu fosse no html e criasse um <img id='foto'>
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}