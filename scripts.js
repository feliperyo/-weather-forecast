let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

async function searchCity() {
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=londres&appid=cebcd482eda57fa9a6714c1c2ba91885'
    ).then(response => response.json())

    console.log(dados)
}

function searchClick() {
    let input = document.querySelector('.input').value

    searchCity()
}