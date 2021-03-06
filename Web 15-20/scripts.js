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

