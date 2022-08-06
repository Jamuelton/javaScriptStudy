function carregar() {
    var img = document.getElementById('imagem')
    var agora = new Date()
    var h = agora.getHours()
        //var h = 19
    var c = document.querySelector('p#tempo')
    c.innerHTML = 'Agora são ' + h + ' horas.'

    if (h >= 6 && h < 12) {
        img.src = 'img/dia.1.jpg'
        document.body.style.background = '#fad390'

    } else if (h >= 12 && h < 18) {
        img.src = 'img/tarde.1.jpg'
        document.body.style.background = '#fa983a'


    } else if (h >= 0 && h < 6) {
        img.src = 'img/madrugada.1.jpg'
        document.body.style.background = '#1e272e'

    } else {
        img.src = 'img/noite.1.jpg'
        document.body.style.background = '#2C3A47'
    }
}