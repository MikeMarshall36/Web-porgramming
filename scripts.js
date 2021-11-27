//Задание №1
/*
let City1 = {
    name : 'ГородN',
    population : 10000000
};

console.log(`Задача №1: ${City1.name, City1.population}`)

//Задание №2
let City2 = {name : 'ГородM', population : 1e6};

//Задание №3
City1.getName = function (){
    console.log(`Название города: ${City1.name}`)
}

City2.getName = function (){
    console.log(`Название города: ${City2.name}`)
}
City1.getName()
City2.getName()

delete City1.getName
delete City2.getName

//Задание №4
City1.exportStr = function(key){
    for (key in City1){
        console.log(key,City1[key]);
        delete City1.exportStr
    }
}

City2.exportStr = function(key){
    for (key in City2){
        console.log(key,City2[key]);
        delete City2.exportStr
    }
}

City1.exportStr()
City2.exportStr()

//Задание №5
function getObj () { return this }
 
City1.getCity = getObj;
City2.getCity = getObj;
 
console.log(City1.getCity().name + ' ' + City1.getCity().population);
console.log(City2.getCity().name + ' ' + City2.getCity().population);

*/

class Card{
    constructor(from, to){
        this.from = from,
        this.to = to
    }

    show(){
        console.log(`From: ${this.from} To: ${this.to}`)
        
    }
}

let red_card = new Card(12,5)
red_card.show();

class Human{
    constructor(name, age, height){
        this.name =name,
        this.age = age,
        this.height = height
    }

    getInfo(){
        return `${this.name}, ${this.age}, ${this.height}`
    }

    firstName(){
        let descriptor = Object.getOwnPropertyDescriptor(this, 'name')
        console.log(JSON.stringify(descriptor))
    }
}

humans =[
    new Human('Коля',23,180),
    new Human('Даша',19,170),
    new Human('Ваня',18,192),
    new Human('Петя',45,178),
    new Human('Вася',34,197),
    new Human('Джони',37,160),
    new Human('Катя',37,160),
    new Human('Петя',37,160),
    new Human('Соня', 21,172),
    new Human('Женя',25,175)
]

function sortByName(array) {
    return array.sort(function comparator(num1, num2){ return (num1.name > num2.name) ? 1 : -1});
}

function sortByHeight(array) {
    return array.sort(function comparator(num1, num2){return(num1.height < num2.height) ? 1 : -1});
}

console.log(humans);
console.log(humans[3].getInfo());
console.log(humans[7].firstname);
console.log(sortByHeight(humans));

dt1 = new Date(2045, 0, 1, 0, 0, 0);

dt2 = Date.now() / 1000;

function getDays(y, m) {
    return new Date(y,m,0).getDate();
}

console.log(dt1);

console.log(dt2 + ' s');

console.log(getDays(2002, 01) + ' days');
console.log(getDays(2102, 02) + ' days');
console.log(getDays(2008, 02) + ' days');
console.log(getDays(2023, 02) + ' days');


