
// let month = +prompt();

// switch (month){
//     case 1;
//         console.log('Январь');
//         break;
//     case 2;
//         console.log('Февраль');
//         break;
//     case 3;
//         console.log('Март');
//         break;
//     case 4;
//         console.log('Апрель');
//         break;
//     case 5;
//         console.log('Май');
//         break;
//     case 6;
//         console.log('Июнь')
//     case 7;
//         console.log('Июль');
//         break;
//     case 8;
//         console.log('Август');
//         break;
//     case 9;
//         console.log('Сентябрь');
//         break;
//     case 10;
//         console.log('Октябрь);
//         break;
//     case 11;
//         console.log('Ноябрь');
//         break;
//     case 12;
//         console.log('Декакбрь');
//         break
//     default;
//         console.log("НЕ месяц");
//         break;
// }


// const correctPassword = 'qwerty';

// let password = prompt();

// if (password === 'qwerty')
//     console.log('Доступ разрешен');
// else
//     console.log('Неверный пароль');



// let num = +prompt();

// if (num >= 90)
//     console.log('Отлично');
// else if (num >= 70 && num <= 89)
//     console.log('Хорошо');
// else if (num >= 50 && num <=69)
//     console.log('Удовлетварительно');
// else
//     console.log('Неудовлетварительно')




// let ears = +prompt();

// if ((ears % 4 == 0 && ears / 100 != 0) || (ears % 400 == 0));
//     console.log('Високосный');


// let x = +prompt();
// let y = +prompt();

// if (x > 0 && y > 0)
//     console.log('1');
// else if (x < 0 && y > 0)
//     console.log('2');
// else if (x < 0 && y < 0)
//     console.log('3');
// else if (x > 0 && y < 0)
//     console.log('4');
//     else
//         console.log("Точка лежит на оси")





// let sum = +prompt();

// let ollsum = 0;

// for (let i = 1; i <= sum; i++ )
//     ollsum  += i;
// console.log(ollsum)




// let summ = 0;
// for (i=1; i<=500;i++)
//     if (i % 2 == 0)
//         continue;
//     else if (i % 2 != 0)
//         summ += 1

// console.log(summ)




// let num = +prompt();

// let numS = 1;

// for (i = 1; i<= num; i++)
//     numS *= i;

// console.log(numS)



// let


/////////////////////////////DZ///////////////////////////////////////


// let random = Math.floor(Math.random() * 10) + 1;
// let number = +prompt();

// while (true){
//     if (random == number){
//         console.log('Угадал');
//         break;
//     } else {
//         console.log('Не угадал', number);
//         number = +prompt();
//     }
// }



// let zvezda = "*";
// for (i = 0; i < 10; i++){
//     console.log(zvezda);
//     zvezda += '*'    
// }





// let month = +prompt('Введи число до 12');
// switch(month){
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень, ЗИМА близко');
//         break;
//     default:
//         console.log('НЕЗЕМНОЙ МЕСЯЦ');    

// }





// let day = +prompt('Введите число от 1 до 7');

// switch(day){
//     case 1:
//         console.log('Понедельник');
//         break;
//     case 2:
//         console.log('Вторник');
//         break;
//     case 3:
//         console.log('Среда');
//         break;
//     case 4:
//         console.log('Четверг');
//         break;
//     case 5:
//         console.log('Пятница');
//         break;
//     case 6:
//         console.log('Субботу');
//         break;
//     case 7:
//         console.log('Воскресенье');
//         break;
//     default:
//         console.log("НЕ НАШ ДЕНЬ НЕДЕЛИ")

// }





// let a = +prompt('a');
// let b = +prompt('b');
// let c = +prompt('c');

// if ((a + b > c) && (a + c > b) && (b + c > a)){
//     console.log('Треугольник существует');
// }else{
//     console.log('Треугольник не существует');
// }







// let num = +prompt('А вы введите и мы провериим');

// let numS = (num % 2 == 0) ? "Четное" : "Нечетное";
// let delTree = ( num % 3 == 0) ? "Делится на 3" : "Не делится на 3";
// let delFive = ( num % 5 == 0) ? "Делится на 5" : "Не делится на 5";
// console.log(`Введенное число = ${num}`);
// console.log(numS);
// console.log(delTree);
// console.log(delFive);



// let sum = 0;
// for (i = 1; i <=100; i++) {
//     if (i % 2 == 0) {
//        sum += i;
//     }
// }
// console.log(sum)



// let x = +prompt('One');
// let n = +prompt('Two');

// for (i = 1; i <= n; i++){
//     let step = x ** i;
//     console.log(step);

// }




// let i;
// let j;
// let sum;
// for (i = 2; i < 11; i++){
//     for (j = 1; j < 11; j++){
//         sum = i * j;
//         console.log(i+ ' * '+j+ ' = '+sum );
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function sayHello (name) {
//     console.log(name);
// }
// sayHello('Anna');


// function square (num){
//     let qwa = num * 2;
//     return qwa;
// }
// console.log(square(10));


// function sum (a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// sum (5,2);


// function toFahrenheit (celsius){
//     let grad = celsius * 9/5 + 32;
//     console.log(grad); 
// }
// toFahrenheit(100)


// function max (a,b){
//     if (a > b){
//         console.log(a);
//     }else if(b > a){
//         console.log(b);
//     }else{
//         console.log("Цыфры равны")
//     }
// }
// max(10,12)


// function power(a,b){
//     let pow = a ** b;
//     console.log(pow);
// }
// power(5,2);


// function checkAge(age){
//     if (age <  18){
//         console.log('Доступ запрещен');
//     }else{
//         console.log('Добро пожаловать');
//     }
// }
// checkAge(19);


// function area (width, height){
//     let aresss = width * height;
//     console.log(aresss);
// }
// area(10,5);


// function convert (amount, rate){
//     let sum = amount * rate;
//     console.log(sum);
// }
// convert(10,100);






/////////////////////////////////////////////////////////////////////////DZ_18.06.2026_DZ////////////////////////////////////////////////////





// function calculator (a, operator, b){
//     switch(operator){
//         case '+' :
//             return a + b;
//             break;
//         case '-' :
//             return a - b;
//             break;
//         case '*' :
//             return a * b;
//             break;    
//         case '/' :
//             return a / b;
//             break;   
//     }
// }
// console.log(calculator(+prompt("Первое число"), prompt("Оператор"), +prompt("Второе число")));










// function isPrime(num){
//     if (num <= 1){
//         return false;
//     }
//     for (let i =2;i < num; i++ ){
//         if (num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(+prompt("Введите число для проверки")));






// let mass = [1,2,3,4,5];

// mass [1] = "Новый элемент"
// mass.push('нов_элемент');
// mass.unshift('начальный новый элемент');
// mass.pop();

// mass.forEach((el)=>{
//     console.log(el);
// })


// let massTwo = mass.map((el)=>{
//     return el * 2;
// })
// console.log(massTwo)


// let fruit = ['яблоко', 'банан', 'киви', 'ананас'];

// let fruitFive = fruit.filter((el) => {
//     if (el.length > 5){
//         return el;
//     }
// });

// console.log(fruitFive);


// let massive = [10, 20, 30, 40];

// let sum = massive.reduce((acc, n) => {
//     return acc + n;
// }, 0);
// console.log(sum);


// console.log(mass);




//////////////////////////////////////////////////DZ_19.06.2026_DZ//////////////////////////////////////////////





// let arr = [1,2,3,4,5,6,7];
// console.log(arr.at(-1));




// let colors = ['красный ','синий','зеленый','синий','желтый','синий','синий'];
// let sumBlue = 0;
// colors.forEach((el)=>{
//     if (el == 'синий'){
//         sumBlue += 1;
//     }
// })
// console.log(sumBlue);



// let massive = [1,'two',3,4,'five',6,'seven',8,9];
// while (massive.length != 0){
//     console.log(massive.pop());
// }



// let mass = [100,250,350,400];
// let massUp = mass.map((el)=>{
//     return el / 100 * 110;
// })
// console.log(massUp);



// let people = [
//     {name: 'Анна', age:25},
//     {name: 'Иван', age:19},
//     {name: 'Олег', age:30}
// ];
// const srAge = people.map(item => item.age);
// let sumAge = srAge.reduce((acc,n)=>acc + n,0);
// console.log(Math.floor(sumAge / srAge.length));


// let ivanAge = people.filter(item => item.name == 'Иван' ).map(item => item.age);
// console.log(ivanAge);


////////////////////////////SM_SM_SM//////////////////////////////////////////


// let name = 'Имя';
// let age = 23;
// isStudent = true;

// let nameType = typeof(name);
// let ageType = typeof(age);
// let isType = typeof(isStudent);
// console.log(nameType);
// console.log(ageType);
// console.log(isType);
// console.log(`Привет, меня зовут ${name}, мне ${age} лет.`)

// /////////////////////////////////////////////////////////


// let dayTr = 250;
// let dayEat = 100;

// let month = 0;
// let even = 0;

// for ( let i = 1; i <= 7; i++ ){
//     even += i + 250 + 100;
// }

// for ( let i = 1; i <= 30; i++ ){
//     month += i + 250 + 100;
// }
// console.log(month);
// console.log(even);


// /////////////////////////////////////////////////////////


// let agetwo = 17;

// if (agetwo >= 18){
//     console.log('true');
// }else{
//     console.log('false');
// }


///////////////////////////////////////////////////////////////


// let num = +prompt('Принимаем оценку');

// switch (num){
//     case 5:
//     console.log('Отлично');
//     break;
//     case 4:
//     console.log('Хорошо');
//     break;
//     case 3:
//     console.log('Удовлетворительно');
//     break;
//     default:
//     console.log('НЕ ТА ОЦЕНКА НА КОТОРУЮ МЫ РАСЧИТЫВАЛИ')
// }



////////////////////////////////////////////////////////////////


// let password = 'js2025';
// let newPas = prompt('Введите пароль');

// if ( password == newPas){
//     console.log('Доступ разрешен');
// }else{
//     console.log('Ошибка входа');
// }


//////////////////////////////////////////////////////////////


// let isStudent = true;

// let proverka = isStudent == true ? 'Скидка активирована' : 'Без скидки';
// console.log(proverka);


///////////////////////////////////////////////////////////////////


// for (let i = 1; i<=10; i++){
//     console.log(i)
// }

/////////////////////////////////////////////////////////////////////


// let sum = 0;

// for (let i = 1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

///////////////////////////////////////////////////////////


// let five = 5;

// for ( let i = 1; i<= 10; i++){
//     let sum = 5 * i;
//     console.log(`5 * ${i} = ${sum}`);
// }

/////////////////////////////////////////////////////////////


// for ( let i = 2; i<=20; i++){
//     if (i % 2 != 0){
//         i++;
//        continue;
//     }
//     else if ( i % 2 == 0){
//         console.log(i);
//         i++;
//     }
// }

//////////////////////////////////////////////////////


// function sayHello(name){
//     console.log(`Привет, ${name}` );
// }
// sayHello ("Имя");
// sayHello ("Имя2");
// sayHello ("Имя3");

////////////////////////////////////////////////////////


// function sum (a,b){
//     console.log(a + b);
// }
// sum(5,5);


/////////////////////////////////////////


// function carDrive (age){
//     if ( age >=18){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(carDrive(15));


/////////////////////////////////////////////////////



// function calculator (a, operator, b){
//     switch(operator){
//         case '+' :
//             return a + b;
//             break;
//         case '-' :
//             return a - b;
//             break;
//         case '*' :
//             return a * b;
//             break;
//         case '/' :
//             return a / b;
//             break;
//     }
// }
// console.log(calculator(+prompt("Первое число"), prompt("Оператор"), +prompt("Второе число")));


//////////////////////////////////////////////////////////////////


// let massiveFilms = ['Начало','Облачный атлас','Великий Гетсби','Трия','Властелин колец'];

// console.log(massiveFilms[0]);
// console.log(massiveFilms[4]);

// massiveFilms.push('Телепузики');
// console.log(massiveFilms);
// massiveFilms.shift();
// console.log(massiveFilms);

/////////////////////////////////////////////////////////


// let names = ['Имя1','Имя2','Имя3','Имя4','Имя5'];

// names.forEach((el)=>{
//     console.log(`Привет, ${el}`);
// })


///////////////////////////////////////////////////////////////////////////////


// let nums = [1,2,3,4,5,6,7,8,9];
// nums.forEach((el)=>{
//     if (el % 2 == 0){
//         console.log(el);
//     }
// })

/////////////////////////////////////////////////////


// let massive =  [10,20,30,40,50];

// let sum = massive.reduce((acc,n)=>acc + n,0);
// console.log(sum / massive.length);


///////////////////////////////////////////


// let mas = [-2,3,-1,5,10,-6];

// let sumPlus = 0;

// mas.forEach((el)=>{
//     if (el > 0){
//         sumPlus += el;
//     }
// })
// console.log(sumPlus);


//////////////////////////////////////////////


// let masss = ["дом", "машина", "окно", "река", "компьютер"];
// let kolv = 0;

// masss.forEach((el)=>{
//     if (el.length > 4){
//         kolv += 1;
//     }
// })
// console.log(kolv);


////////////////////////////////////////////////


// let massive =  [10,20,70,80,30,40,50];
// function getMax(arr){
//     let max = 0;
//     massive.forEach((el)=>{
//         if (el > max){
//             max = el;
//         }
//     })
//     return max;
// }
// console.log(getMax(massive));


////////////////////////////////////////////////


// let mass =[];
// mass [0] = +prompt("1-5");
// mass [1] = +prompt("1-5");
// mass [2] = +prompt("1-5");

// let sum = mass.reduce((acc,n)=>acc + n,0);
// let ocenka = (Math.floor(sum / mass.length));
// if (ocenka >= 4){
//     console.log('Молодец');
// }else{
//     console.log('Подтянись')
// }





//////////////////////25,06,20226/////////////////////////////////



// let book = {
//     title: 'Заголовок',
//     author: 'Пушкин',
//     year: 23,
//     getInfo(){
//         console.log("Книга "+ this.title, "Автор "+ this.author);
//     }
// }
// console.log(book.getInfo());



// let students = [
//     {name: 'Иван' ,ball: 50},
//     {name: 'Петр' ,ball: 85},
//     {name: 'Владимир' ,ball: 30},
//     {name: 'Инокентий' ,ball: 91},
// ];
// students.forEach((el)=>{
//     if (el.ball > 80){
//         console.log(el.name);
//     }
// })


// let calculator = {
//     add(a,b){
//         console.log(a + b);
//     },
//     cub(a,b){
//         console.log(a - b);
//     },
//     mul(a,b){
//         console.log(a * b);
//     },
//     div(a,b){
//         console.log(a / b);
//     }
// }
// console.log(calculator.mul(5,6));




//////////////////////DZ_25.06.2026_DZ////////////////////////////////////////


// let user = {
//     name: 'Евлампий',
//     age: 97,
//     email: 'EvLampa@mail.ru',
//     sity: 'Spb',
// };

// user.isAdmin = true;
// console.log(user);
// delete user.age;
// console.log(user);

// Object.entries(user).forEach(([key,value])=>{
//     console.log(`${key}: ${value}`);
// })


//////////////////////////////////////////////////////////////////////////////


// let car = {
//     engine: {
//         power: '777 HP',
//         type: 'SportCar M4 coupe'
//     }
// };
// console.log(`Мощность двигателя, нашего ${car.engine.type}, составляет ${car.engine.power}`);


////////////////////////////////////////////////////////////////////////////



//  let calculator = {
//      add(a,b){
//          console.log(a + b);
//      },
//      cub(a,b){
//          console.log(a - b);
//      },
//      mul(a,b){
//          console.log(a * b);
//      },
//      div(a,b){
//          console.log(a / b);
//      }
//  }
// calculator.add(9,6);
// calculator.cub(9,3);
// calculator.mul(9,6);
// calculator.div(9,3);


////////////////////////////////////////////////////////////////////


let product = [
    {name: "Молокo", price: 60},
    {name: "Хлеб", price: 40},
    {name: "Сыр", price: 200}
]
product.forEach((el)=>{
    if ( el.price > 50){
        console.log(el.name);
    }
})
product.push({name: "Колбаса", price: 300});
let sum = product.reduce((acc,n)=> acc + n.price,0);
let srSum = sum / product.length;
console.log(srSum);
