//Задание №1

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

//Задание №6
let obj = {
    method1: function() {
        return this;
    },

    method2: function() {
        return this;
    },

    method3: function() {
        return 'Метод3';
       
    }
  };

console.log(obj.method1().method2().method3());

//Задача №7

d1 = [45,78,10,3]
d1[7]=(100)
console.log(d1)
console.log(`Дед таблетки забыл: ${d1[6]} ${d1[7]}`)

//Задача №8

d2 = [45,78,10,3]
let sum = 0


for(let i = 0; i <d2.length; i++){
    sum = d2[i] + sum
}
console.log(sum)

Math.random

// задача 9

d3 = [45, 78, 10, 3]
d3[7] = (100)
let sum3 = 0
for(let elem in d3){
    sum3 = elem + sum3;
}
console.log(sum3)

// задача 10

d4 = [45, 78, 10, 3]
my = (function(a, b){
    return a - b;
});
console.log(d4.sort(my))

// задача 11

let n = 3
let m = 4
d5 = [];
for(let i = 0; i < n; i++){
    d5[i] = [];
    for(let j = 0; j < m; j++){
        d5[i].push(5);
    }
}
console.log(d5)

//12
function Vector(x, y){
    this.x = x;
    this.y = y;
    this.plus = function (vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    this.minus = function (vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
    this.length = function () {
        return Math.sqrt(x*x + y*y);
    }
}

console.log("Сумма векторов: ",new Vector(1,2).plus(new Vector(2,3)));
console.log("Разность векторов: ", new Vector(1,2).minus(new Vector(2,3)));
console.log("Длина вектора: ", new Vector(3,4).length());

//13
function TextCell(text){
    this.text = text;
}

function StretchCell(inner, width, height){
    this.text = inner.text;
    this.width = width;
    this.height = height;

    this.minWidth = function () {
        return Math.max(
            this.text.split('\n').sort(
                function(a,b){
                    return b.length - a.length})[0]
                .length,
            this.width)
    }

    this.minHeight = function () {
        return Math.max(this.text.split('\n').length, this.height)
    }

    this.draw = function(width, height){
        text_joined = this.text.split('\n').join('');
        text_joined += " ".repeat(width*height - text_joined.length);
        cell = [];
        for (let i=0; i<height; i++){
            s = '';
            for (let j=0; j<width; j++){
                s += text_joined[i*width + j];
            }
            cell.push(s);
        }
        return cell;
    }
}

function logFive (queue){
    len=queue.length;
    if (len>5){
        len =5;
    }
    for (var i = 0; i < len; i++) {
        console.log(queue[i]);
    }
}

function RangeSeq(from, to){
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++){
        self.mass.push(i);
    }
    return(self.mass)
    
}
 
function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
        }
    return(self.mass)
    
}
logFive(new ArSeq([1, 2]));
logFive(new RangeSeq(100, 1000));


var sc = new StretchCell(new TextCell("ab\nde\nevf"), 1, 2);
console.log("Min width: ", sc.minWidth());
console.log("Min height: " ,sc.minHeight());
console.log("Draw: ", sc.draw(5,3));


//15
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


//16
class Human{
    constructor(name, age, height){
        this.name = name,
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

//17
humans =[
    new Human('Коля',23,180),
    new Human('Даша',19,170),
    new Human('Ваня',18,192),
    new Human('Петя',45,178),
    new Human('Вася',34,197),
    new Human('Джони',40,168),
    new Human('Катя',37,160),
    new Human('Петя',29,200),
    new Human('Соня', 21,172),
    new Human('Женя',25,175)
]

function sortByName(array) {
    return array.sort(function compare(num1, num2){
        return (num1.name > num2.name) ? 1 : -1
    });
}

function sortByHeight(array) {
    return array.sort(function compare(num1, num2){
        return(num1.height < num2.height) ? 1 : -1
    });
}

ask_data = prompt('Укажите число от 0-9: ',0)

console.log(humans);
console.log(humans[ask_data].getInfo());
console.log(humans[ask_data].firstName());
console.log(sortByHeight(humans));

//18
dt1 = new Date(2045, 0, 1, 0, 0, 0);
console.log(dt1);

//19
dt2 = Date.now() / 1000;
console.log(`it is ${dt2} sec. since 1970`);

//20
function getDays(yyyy, mm) {
    return new Date(yyyy,mm,0).getDate();
}

console.log(getDays(2002, 01) + ' days in month');
console.log(getDays(2009, 05) + ' days in month');
console.log(getDays(2077, 08) + ' days in month');

//21

function calendar(year, month){
    let date = new Date(year, month-1, 0);
    empty_cells = (date.getDay() - 7) % 7 + 7;
    parent = document.createElement("div");
    parent.style.display = "grid";
    parent.style.gridTemplateColumns = "repeat(7, 40px)";
    parent.style.textAlign = "right";

    days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    days.forEach(element => {
        label = document.createElement("div");
        label.innerHTML = element;
        parent.appendChild(label);
    });

    for (let i = 0; i < empty_cells; i++){
        parent.appendChild(document.createElement("div"));
    }

    for (let i = 0; i < date.getDate(); i++){
        day = document.createElement("div");
        day.innerHTML = `${i+1}`;
        parent.appendChild(day);
    }

    document.body.append(parent);
}

calendar(2021, 10);

//22

Number.prototype.isOdd = function(){
    return this % 2 != 0;
}

a = new Number(5);
b = new Number(6);
console.log(a.isOdd());
console.log(b.isOdd());

//23

function Chain(val){
    this.val = val,
    this.add = function(a){
        this.val += a;
        return this;
    },
    this.substract = function(a){
        this.val -= a;
        return this;
    },
    this.multiply = function(a){
        this.val *= a;
        return this;
    },
    this.div = function(a){
        this.val /= a;
        return this;
    }
}

example = new Chain(7).add(2).substract(1).multiply(3).div(8);
console.log(example.val);

//24

function Unit(x, y){
    this.x = x;
    this.y = y;
}

Unit.prototype = {
    get X() {return this.x;},
    get Y() {return this.y;},
    set X(val) {this.x=val;},
    set Y(val) {this.y=val;}
}

function Fighter(power){
    this.power = power;
}

Fighter.prototype = Unit.prototype;
Fighter.prototype += {
    get power() {return power;},
    set power(val) {this.power = val;}
}

f = new Fighter(8);
f.X = 4;
f.Y = 5;
console.log(f.Y);
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
