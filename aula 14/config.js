let num = document.querySelector('input#number')
let area = document.querySelector('select#area')
let res = document.querySelector('div#res')

let valores = []

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (numero(num.value) && !lista(num.value, valores)) {
        let item = document.createElement('option')
        item.text = `Número ${num.value} foi adicionado`
        area.appendChild(item)
        valores.push(num.value)
        valores.sort()
        res.innerHTML = ``
        console.log(valores)
    } else {
        window.alert("[ERRO]Número inválido ou já existente")
    }
}

function finalizar() {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    res.innerHTML += `Ao todo temos ${valores.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${valores[valores.length - 1]} <br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]} <br> `
    res.innerHTML += `Somando todos os valores, temos ${valores.reduce(reducer)} <br>`
    res.innerHTML += `A média dos valores digitados é ${valores.reduce(reducer) / valores.length}`
}