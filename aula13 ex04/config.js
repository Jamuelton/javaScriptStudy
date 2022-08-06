function fazer() {
    let num = document.querySelector('input#num')

    let t = document.querySelector('select#tabuada')



    if (num.value.length == 0) {
        window.alert('[ERRO]Por Favor, digite um valor')

    } else {
        let n = Number(num.value)
        let p = 0
        t.innerHTML = ""
        while (p <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${p} = ${n*p}`
            t.appendChild(item)
            p++

        }
    }
}