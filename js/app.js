console.log('ciao');
let btnPlayElement = document.getElementById('btn-play');
console.log(btnPlayElement);
let latoGriglia = 10;
let superficieGriglia = latoGriglia * latoGriglia;
console.log(latoGriglia, superficieGriglia);
let grigliaAttiva = 0;

btnPlayElement.addEventListener('click', function () {
    if (grigliaElement.firstChild) {
        grigliaElement.innerHTML = ''
    } else {
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
})

const grigliaElement = document.querySelector('.griglia');

console.log(grigliaElement);

let singolaCellaElement = document.querySelectorAll('.cella')


//controllo se utente clicca numero con bomba 
grigliaElement.addEventListener('click', function (event) {
    const cellaElement = event.target
    cellaElement.classList.toggle('bg-blue')
    console.log(event)
    console.log(cellaElement)
    console.log(event.target.innerHTML)
    if (bombe.includes(numeriRandom) === cellaElement) {
        alert('Hai perso')
    }
})



//creo array per contenere 16 bombe
let bombe = []

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
while (bombe.length < 16) {
    bombe.push(ritornaNumeroNonDoppione(bombe));
    console.log(bombe)
}


