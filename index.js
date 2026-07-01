////////////////////////______________DZDZDZDZ________//////////////////////////////

        
    //ОДИНАКОВАЯ СТРОКА



// const isPalindrome = () => {

//     let str = prompt();
//     let masStr = str.split('');
//     let revMass = masStr.reverse();
//     let revStr = revMass.join('');

//     if (revStr === str){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isPalindrome());




// const isPalindrome = () => {
    
//     let str = prompt();
//     let masStr = str.split('');
//     let revMass = masStr.reverse();
//     let revStr = revMass.join('');

//     return revStr === str;
// }
// console.log(isPalindrome());




// const isPalindrome = () => {
//     let str = prompt();
//     let revStr = str.split('').reverse().join('');
//     return str === revStr;
// }
// console.log(isPalindrome());




// const isPalindrome = () => {

//     let str = prompt();
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome());



///////////////////////////////////////////////////////////////////////////

        //КАКОЙ ЧАС И ВРЕМЯ СУТОК

// let tekushee = new Date();
// console.log(tekushee);

// let hours = tekushee.getHours();
// console.log(hours);
// if (hours >=6 && hours <= 11){
//     console.log('Утро');
// }else if (hours >11 && hours <= 18){
//     console.log('День');
// }else if (hours >18 && hours <= 23){
//     console.log('Вечер');
// }else{
//     console.log('Ночь')
// }


//////////////////////////////////////////////////////////////////////////

    //РАБОТА С ТЕКСТОМ

// let str = "  JavaScript - это круто!  ";
// let redact = str.trim().toUpperCase();
// console.log(redact);


//////////////////////////////////////////////////////////////////////////

    //УЗНАЕМ СКОЛЬКО ЛЕТ

// let dr = new Date("2005-05-21");
// let now = new Date();

// let diff = now - dr;
// let days = (diff / (1000*60*60*24)) / 365;
// let year = Math.floor(days);
// console.log(year);


//////////////////////////////////////////////////////////////////////////

    //ПРЕВРАЩАЕМ В ИНИЦИАЛЫ ИФО

// const shortName = () => {
//     let full = prompt('Введите полное Имя Фамилия Отчество');
//     console.log(full);
    
//     let short = full.split(' ');
//     console.log(short);
    
//     let lastName = short[0].charAt(0).toUpperCase() + short[0].slice(1).toLowerCase();
//     let name = short[1].slice(0, 1).toUpperCase();
//     let surName = short[2].slice(0, 1).toUpperCase();
//     console.log(`${lastName} ${name}. ${surName}.`);
// }
// shortName();


/////////////////////////////////////////////////////////////////////////////////

    //СЧИТАЕМ КОЛИЧЕСТВО СЛОВ

// function countWords (str) {
//     if (str == '') return 'НУ ты ЖЕ ниЧЕго НЕ ВВел...';
//     let word = str.trim().split(" ");
//     return word.length;
// }
// console.log(countWords('Один Два Три'));