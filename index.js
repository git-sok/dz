
/////////////////////___DZ_____DZ____DZ______02.07.2026_____DZ____DZ______DZ___//////////////////////


let par = document.getElementById('pes')

console.log(par);
let btn = document.querySelector('#btn-fon')

btn.addEventListener(
    'click',
    () => par.textContent = 'Измененный текст после кнопки'
)
let imgScale = document.getElementById('scale')

imgScale.addEventListener(
    'mouseenter',
    ()=>{
        imgScale.style.transition = 'transform 0.5s ease';
        imgScale.style.transform = 'scale(1.4)';
    }
)
imgScale.addEventListener(
    'mouseleave',
    ()=>{
       imgScale.style.transition = 'transform 0.5s ease';
        imgScale.style.transform = 'scale(1)'; 
    }
)

let spisok = document.getElementById("olSpis")
let addElem = document.getElementById("addEL")

addElem.addEventListener('click', () => {
    let newEl = document.createElement('li')
    newEl.textContent = 'Новый элемент';
    spisok.appendChild(newEl);
})

let dellElem = document.getElementById('delEl')

dellElem.addEventListener('click', ()=> {

        let lastEL = spisok.lastElementChild;
        if(lastEL){
        lastEL.remove();
}
});


let input = document.getElementById('inputCopy')
let pCopy = document.getElementById('copy')

input.addEventListener(
    'input',
    () => {
        pCopy.textContent = input.value
    }
)