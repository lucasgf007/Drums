document.body.addEventListener('keyup', (event)=> {
    playSoud(event.code.toLowerCase())  //toLowercase deixa td minusculo
    // vai levar isso como parametro para a function playSoud
})

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value

    if(song !== '') {
        let songArray = song.split(''); // vai tranformar em uma lista

        playComposition(songArray, 250)
    }
})

//Função tocar
function playSoud(soud){
    let audioElement = document.querySelector(`#s_${soud}`); // seleciona o audio
    let keyElement = document.querySelector(`div[data-key="${soud}"]`); // mostra o botão clicado para inserir um css neele

    if(audioElement){
        audioElement.currentTime = 0;  //vai zerar o audio para poder tocar o dnv qd a tecla for acionada antes do tempo do outro audio terminar
        audioElement.play();

    }
    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 450) // vai remover a class após 450milisegundos
    }
}

//Função tocar composição

function playComposition(songArray, time){
    let wait = time; 


    for(let songItem of songArray){ // vai executar cada item uma vez
        setTimeout(()=> {
            playSoud(`key${songItem}`)
        }, wait) // irá dar um intervalo de execução do for

        wait += 250; // irá fazer o papel de time e a cada 250 mls irá rodar o for
    }
}