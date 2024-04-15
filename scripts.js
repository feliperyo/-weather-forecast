let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

function showInfos(dados) {
    document.querySelector('.city').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + 'ºC'
    document.querySelector('.icon').src = `https:openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.icons').style.visibility = 'hidden'
}

async function searchCity(input) {
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + input +
        '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric'
    ).then(response => response.json())
    console.log(dados)
    showInfos(dados)
}

function searchClick() {
    let input = document.querySelector('.input').value

    searchCity(input)
}