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

lista.forEach((element)=> {
    element.addEventListener('click', () => {
        lista.forEach((el) => el.classList.remove('feedback-active'))
        element.classList.add('feedback-active')
        //console.log(element)
        //Imam kliknuti element 
        //Svaki kliknuti element ima id (sad, happy, neutral)
        //Gore imam varijablu selectedFeedback
        //Procitaj id sa kliknutog elementa i sacuvaj ga u tu varijablu
        //Onda tu varijablu upotrijebis kao text content ili html
        // 
    })
})

lista.forEach((element) =>{
    element.addEventListener('click', (event) =>{
        slectedFeedback = event.target.closest('li').id;
    })
})

UI.style.display = 'none';
function review () {
    feedbackFace.innerHTML = `${slectedFeedback}`;
    UI.style.display = 'block';
    mainFeedbackUi.style.display = 'none';
}
btn.addEventListener('click', (event) => {
    review();
})