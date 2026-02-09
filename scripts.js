/*

pego no site da api e divide {  (->  https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it  )
   padrão = https://api.mymemory.translated.net/get?q=
   traduzir = Hello World!
   idioma = &langpair=pt-BR|en
}



 fetch / ferramenta p entrar em contato com servidor

 await (espere) junto com async (if await na variavel -> async na função)
 
 json --  formato amigável usar o ponto antes e parenteses depois para chamar json (ex: resposta.json())

*/

let inputTexto = document.querySelector(".input-texto")
let traducao = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")


async function traduzir() {

    let endereco = "https://api.mymemory.translated.net/get?q=" 
    + inputTexto.value
    + "&langpair=pt-BR|"
    + idioma.value

    let resposta =  await fetch(endereco)

    let dados = await resposta.json()

    traducao.innerHTML = dados.responseData.translatedText

    console.log(dados)

}

function ouvirVoz() {
    // ferramenta de transcrição de audio
    let voz = window.webkitSpeechRecognition;

    // deixar pronta pra uso
    let reconhecimentoVoz = new voz();

    // configurando a ferramenta
    reconhecimentoVoz.lang = "pt-BR";

    // me avisa quando terminou de transcrever a voz
    reconhecimentoVoz.onresult = (evento) => {
        let textoTrasncricao = evento.results[0][0].transcript;

        inputTexto.textContent = textoTrasncricao;

        console.log("texto transcrição");

        traduzir()

    };

    reconhecimentoVoz.start();
}
