let lista = document.querySelectorAll('.main li');
let btn = document.querySelector('.main button');
let block = document.querySelector('.main');
let face = document.querySelectorAll('.face');
let niz = document.querySelector('.main ul');
let naslov = document.querySelector('.main h1');
let mainFeedbackUi = document.querySelector('.feedback-ui');
let UI = document.querySelector('.UI');
let feedbackFace = document.querySelector('.face-feedback');

let activeIndex = 0;
let slectedFeedback; //Ovoj varijabli dodijelit vrijednost na click i poslije je iskoristit da je pokazem u modal
const main = [
    {
        "svg": "sad-icon.svg",
        "face": "unhappy"
    },
    {
        "svg": "neutral-face-emoji-icon.svg",
        "face": "neutral"
    },
    {
        "svg": "smiley-icon.svg",
        "face": "satisfied"
    }
];

lista.forEach((element, index) => {
    //Umjesto ovakvog pravljenja elementata jedan po jedan i apendovanja jedan po jedan
    //Pogledat metodu insertAdjacentHTML
    //Pokusat istu tu metodu da iskoristis za modal nize
    const tekst = document.createElement('h1');
    tekst.innerHTML = `${main[index].face}`;
    const slika = document.createElement('img');
    slika.src = `${main[index].svg}`;
    element.appendChild(slika);
    element.appendChild(tekst);
    slika.classList.add('photo');
});

lista.forEach((element) => {
    function addClass(){
        lista.forEach((element) => {
            element.classList.add('feedback-active')
            let elems = document.querySelector('.feedback-active');
            if(elems){
                elems.classList.remove('feedback-active');
            }
        })
    }
    element.addEventListener('click', (event) => {
        //Umjesto da rucno dodajes boju preko style.backgroundColor
        //U css napravi klasu feedback-active
        //Prije nego dodas aktivnu klasu makni sa svih aktivnu klasu
        //Samo na aktivni dodas aktivnu klasu
        //Zajednicka css pravila za sve reviewe stavit pod neku klasu feedback
        //Tu zajednicku klasu dodat svih feedbackima
        
        addClass();
        event.target.closest('li').className = 'feedback-active';
});
});

UI.style.display = 'none';
function review() {
    lista.forEach((element) => {
        if(element.classList.contains('feedback-active')){
            mainFeedbackUi.style.display = 'none';
            UI.style.display = 'block';
            let faces = document.querySelector('.feedback-active h1').innerHTML;
            feedbackFace.innerHTML = `${faces}`;
        }
    })
} 
btn.addEventListener('click', (event) => {
    review();
})

// Sav kontent na ekranu napraviti preko javascripta
// Obrisati sav html a svaki od list elementa potrpati u array main
//primjer:
/*{
    img: "putanja/do/slike",
    face: "sad" 
}
*/