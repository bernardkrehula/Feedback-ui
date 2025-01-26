let lista = document.querySelectorAll('.main li');
let btn = document.querySelector('.main button');
let block = document.querySelector('.main');
let face = document.querySelectorAll('.face');
let niz = document.querySelector('.main ul');
let naslov = document.querySelector('.main h1');

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

lista.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        //Umjesto da rucno dodajes boju preko style.backgroundColor
        //U css napravi klasu feedback-active
        //Prije nego dodas aktivnu klasu makni sa svih aktivnu klasu
        //Samo na aktivni dodas aktivnu klasu
        //Zajednicka css pravila za sve reviewe stavit pod neku klasu feedback
        //Tu zajednicku klasu dodat svih feedbackima
        element.style.backgroundColor = 'rgb(116, 182, 85)';
        element.style.color = 'white';
        element.style.borderRadius = '10px';
        element.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.4)';
        console.log(index);
    })
});
btn.addEventListener('click', (event) => {
    review();
})
function review() {
    niz.style.display = 'none';
    naslov.style.display = 'none';
    btn.style.display = 'none';
    const tekst = document.createElement('h1');
    const feedBack = document.createElement('h2');
    tekst.innerHTML = 'Thank you!';
    feedBack.innerHTML = 'Feedback: ';
    block.appendChild(tekst);
    block.appendChild(feedBack);
} 

// Sav kontent na ekranu napraviti preko javascripta
// Obrisati sav html a svaki od list elementa potrpati u array main
//primjer:
/*{
    img: "putanja/do/slike",
    face: "sad" 
}
*/