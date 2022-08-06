function carregar() {

    var ano = document.querySelector('input#q').value;
    var s = document.getElementsByName('serie');
    var img = document.getElementById('imagem');
    var txt = document.querySelector('p#tex')
    var tt = document.querySelector('p#tx')


    switch (s[0].checked) {
        case ano > 0 && ano < 12:
            img.src = 'img/as/little.jpg'
            txt.innerHTML = 'A little thing called first love (Livre para todas as idades)'
            break;
        case ano >= 12 && ano < 14:
            img.src = 'img/as/reieterno.jpg'
            txt.innerHTML = 'O rei eterno (Proibído para menores de 12 anos)'
            break;
        case ano >= 14 && ano < 16:
            img.src = 'img/as/herdeiros.jpg'
            txt.innerHTML = 'Os herdeiros (Proibído para menos de 14 anos)'
            break;
        case ano >= 16 && ano < 18:
            img.src = 'img/as/lovealarm.jpg'
            txt.innerHTML = 'Love alarm (Proibído para menos de 16 anos)'
            break;
        default:
            img.src = 'img/as/garotadefora.jpg'
            txt.innerHTML = 'garota de fora (proibído para menos de 18 anos)'
            break;

    }

    switch (s[1].checked) {
        case ano > 0 && ano < 12:
            img.src = 'img/c/thunder.jpg'
            txt.innerHTML = 'Os Thundermans (Livre para todas as idades)'
            break;
        case ano >= 12 && ano < 14:
            img.src = 'img/c/one.jpg'
            txt.innerHTML = 'One day at a time (Proibído para menores de 12 anos)'
            break;
        case ano >= 14 && ano < 16:
            img.src = 'img/c/99.jpg'
            txt.innerHTML = 'Brooklyn Nine-Nine (Proibído para menos de 14 anos)'
            break;
        case ano >= 16 && ano < 18:
            img.src = 'img/c/family.jpg'
            txt.innerHTML = 'Family business (Proibído para menos de 16 anos)'

            break;
        default:
            img.src = 'img/c/drogas.jpg'
            txt.innerHTML = 'Como vender drogas online e rápido (proibído para menos de 18 anos)'

            break;


    }
}