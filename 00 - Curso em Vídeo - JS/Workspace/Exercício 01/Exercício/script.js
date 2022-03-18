function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var titulo = document.getElementById('titulo')
    var data = new Date()
    //var hora = data.getHours()
    //var minuto = data.getMinutes()

    var hora = 8
    var minuto = 45
    msg.innerHTML = (`Agora são ${hora} horas e ${minuto} minutos.`)

    if (hora >= 0 && hora <12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#bfd1d4'
        titulo.innerHTML = 'Bom Dia!'
    } else if (hora>= 12 && hora<= 18) {
        img.src = "fototarde.png"
        document.body.style.background = '#cf9265'
        titulo.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#244079'
        titulo.innerHTML = 'Boa Noite!'
    }
}