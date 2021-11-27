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