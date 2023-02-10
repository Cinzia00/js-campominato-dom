console.log('ciao');
let btnPlayElement = document.getElementById('btn-play');
console.log(btnPlayElement);
let bombe = []
let latoGriglia = 10;
let superficieGriglia = latoGriglia * latoGriglia;
console.log(latoGriglia, superficieGriglia);
let grigliaAttiva = 0;
let haiPerso = false;
const grigliaElement = document.querySelector('.griglia');
generaBombe()
appendGriglia()
function appendGriglia(){
    for (let i = 0; i < superficieGriglia; i++) {
        let num = i + 1
        // console.log(num)
        let grigliaDaStampare = document.createElement('div')
        grigliaDaStampare.style.width = `calc(100% / ${latoGriglia})`
        grigliaDaStampare.classList.add("cella")
        grigliaDaStampare.innerHTML += num
        grigliaElement.append(grigliaDaStampare)
    }
}

btnPlayElement.addEventListener('click', function () {
    bombe = []
    generaBombe()
    grigliaElement.innerHTML = ''
    appendGriglia()
    haiPerso = false
})

console.log(grigliaElement);

let singolaCellaElement = document.querySelectorAll('.cella')
// let counter = document.getElementById('punteggio') += counter++
let counter = 0
let contatore = document.getElementById('punteggio')
//controllore se utente clicca numero con bomba 
grigliaElement.addEventListener('click', function (event) {
    if (!haiPerso) {
        console.log(event)
        const cellaElement = event.target
        const testoCella = event.target.innerHTML
        cellaElement.classList.toggle('bg-blue')
        // console.log(event)
        // console.log(cellaElement)
        // console.log(event.target.innerHTML)
        if (bombe.includes(parseInt(event.target.innerText))) {
            cellaElement.classList.remove('bg-blue')
            cellaElement.classList.toggle('bg-red')
            alert('Hai perso')
            haiPerso = true;
            counter = 0
        } else {
            counter++            
            console.log('counter', counter)
            contatore.innerHTML = 'Punteggio: ' + counter
            
        }
    }

})



//creo array per contenere 16 bombe

//Controllo numeri doppi
function ritornaNumeroNonDoppione() {
    const numeriRandom = Math.floor(Math.random() * 100)
    const numeroGiaEstratto = bombe.includes(numeriRandom)
    console.log(numeriRandom, numeroGiaEstratto)
    if (numeroGiaEstratto) {
        return ritornaNumeroNonDoppione()
    } else {
        return numeriRandom
    }
}

//posiziono le bombe

function generaBombe(){
    while (bombe.length < 16) {
        bombe.push(ritornaNumeroNonDoppione(bombe));
        console.log(bombe)
    }
}


