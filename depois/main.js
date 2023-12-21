
function Escolher (idioma) {

    fetch(`textos_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            document.getElementById('paragrafo1').innerHTML = texto.paragrafo1;
            document.getElementById('paragrafo2').innerHTML = texto.paragrafo2;
        })
        .catch(error => console.error('Erro buscando textos:', error));
}
