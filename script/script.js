// Elements
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const dark = document.querySelector('.dark');
const h3 = document.querySelector('h3');
const list = document.querySelectorAll('li');
const textArea = document.querySelector('.textSaveCancel');
const cancel = document.querySelector('.cancel');
const newNote = document.querySelector('.note');
// console.log(textarea.classList.add('hidden'));


// dark theme
let changeBG = () => {
    main.classList.toggle('darkMain');
    h3.classList.toggle('darkMain');
    nav.classList.toggle('darkNav');
    for (let lists of list) {
        lists.classList.toggle('darkText');
    };

    if (dark.textContent === 'Dark Theme') {
        dark.innerText = 'Light Theme';
    } 
    else {
        dark.innerText = 'Dark Theme';
    }
};
dark.addEventListener('click', changeBG);


// Cancel Note
let hideArea = () => {
    textArea.classList.toggle('hidden');
    textArea.classList.remove('show');
}
cancel.addEventListener('click', hideArea);


// New Note
let showArea = () => {
    textArea.classList.add('show');
    textArea.classList.remove('hidden');
}
newNote.addEventListener('click', showArea);

