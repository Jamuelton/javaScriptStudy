function contar() {
    var ini = document.querySelector('input#inicio').value
    var fm = document.querySelector('input#fim').value
    var res = document.querySelector('p#para')

    if (fm < 0) {
        window.alert('[ERRO]Insira um numero valido')
    } else {
        res.innerHTML += "Contando: <br>"
        for (ini; ini <= fm; ini++) {
            console.log(ini)
            res.innerHTML += `${ini}   `

        }


    }
}