alert("Hello World");
// Задача №1
let hasht = "#"

while (hasht.length <=7){
    console.log(hasht+"\n")
    hasht +="#";
}
// Задача №2
for (let i =1; i<101; i++){
    if(i % 3 == 0 & i % 5 == 0){
        console.log(`FizzBuzz ${i}`)
    }
    else if(i % 3 == 0 & i % 5 !== 0){
        console.log(`Fizz ${i}`)
    }
    else if (i % 5 == 0 & i % 3 != 0){
        console.log(`Buzz ${i}`)
    }
}
// Задача №3
let chash = "# # # #"
for (let i = 1; i<9; i++){
    if(i % 2 == 0){
        console.log(' '+chash)
    }
    else{
        console.log(chash+' ')
    }
}
// Задача №4
let userInput1 = prompt("Введите первое значение: ", 0);
let userInput2 = prompt('Введите второе значение: ', 0)
function twoMin(num1, num2){
    x = Math.min(num1, num2)
    return console.log(`Минимальное значение: ${x}`)
}
twoMin(userInput1, userInput2)

let userText = prompt('Введите любую строку: ')
// Задача №5

let Bcounter = 0
let letterCounter = 0

function countBs(string){
    for(let i = 0; i<=string.length; i++){
        if (string[i] == 'B'){
            Bcounter ++
        }
    }
    return console.log(Bcounter)
}

countBs(userText)

let userText_1 = prompt('Введите любую строку: ')
let userLetter = prompt('Введите символ для поиска: ')

function countChar(string, letter){
    for(let i = 0; i<=string.length; i++){
        if (string[i] == letter){
            letterCounter ++
        }
    }
    return console.log(letterCounter)
}

countChar(userText_1, userLetter)

//Задача №6

function range(left, right){
    left = Number(left)
    right = Number(right)
    let arrayRange = new Array ();
    for (let i=left; i<= right; i++){
        arrayRange.push(i)
    }
    return console.log(arrayRange);
}
range(prompt('Введите начало диапазона: ', 0), prompt('Введите конец диапазона: ', 0))

function sum(array){
    let summ = 0;
    for(let i = 0; i<= array.length-1; i++){
        summ = summ + Number(array[i])
    }
    return document.write(`<p> Результат: ${summ} </p>`)
}
lengthArray = prompt('Введите длину диапазона: ', 0)
let arry = new Array()
lengthArray = Number(lengthArray)
for(let i = 0; i <= lengthArray; i++){
    arry.push(prompt(`Введите элемент массива под номером ${i}: `, 0))
}
sum(arry)

//Задача №7
function reversArray(array){
    let reversedArray = new Array();
    for(let i=array.length-1; i>-1; i--){
        reversedArray.push(Number(array[i]));
    }
    return console.log(reversedArray)
}

reversArray(arry)

function reversArrayInPlace(array){
    let reversedArray = new Array();
    for(let i=array.length-1; i>-1; i--){
        reversedArray.push(Number(array[i]));
    }
    array = reversedArray
    return console.log(array)
}

reversArrayInPlace(arry)

//Задача №8
 function arrayToList(array){
     let list = null;
     for (let i = 0; i<array.length; i++){
         list = ({value: Number(array[i]), rest: list});
     }
     return list
 }

console.log(arrayToList(arry))

function listToArray(list){
    let f_array = [list.value]
    while(list.rest !== null){
        list = list.rest;
        f_array.push(list.value)
    }
    return f_array
}
console.log(listToArray(arrayToList(arry)))

function prepend(list, num){
    list = ({value:num, rest: list})
    return list
}

console.log(prepend(arrayToList(arry),9))

function nth(list, position){
    if (list){
        if (position != 0){

            return nth(list['rest'], position--);
        } 
        else{
            return list['value'];
        }
    } 
    else{
        return undefined
    }
}

console.log(nth(arrayToList(arry), 0))

//Задача №9

function deepEqual(num_1, num_2){
    if(typeof(num_1)=="object" & typeof(num_2) == "object"){
        if(JSON.stringify(num_1)=== JSON.stringify(num_2)){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
    else{
        if(num_1 == num_2){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
}

array_1 = [2,4,6,8,10]
array_2 = [2,4,5,7,10]
array_3 = [2,4,6,8,10]

deepEqual(array_1, array_2)
deepEqual(array_1, array_3)

//Задача №10

let mainArray = [arry, array_1, array_2, array_3]
let result_array = mainArray.reduce(function(array, sub_array){
    return array.concat(sub_array);
});

console.log(result_array)

//Задача №11

var data = JSON.parse(ANCESTRY_FILE);

let f_counter = 0;
let s_counter = 0;
let ageDifference = [];

while(f_counter != data.length){
    while(s_counter != data.length){
        if(data[f_counter].mother == null){
            break;
        }
        else{
            if(data[f_counter].mother == data[s_counter].name){
                ageDifference.push(data[f_counter].born - data[s_counter].born);
                break;
            }
        }
        s_counter++;
    }
    f_counter++;
    s_counter = 0;
}
f_counter = 0;

let summ = 0;
let quantity = ageDifference.length;
while(f_counter != ageDifference.length){
    summ += ageDifference[f_counter]
    f_counter++
}
f_counter = 0;
console.log(summ / ageDifference.length);

//Задача №12

var data = JSON.parse(ANCESTRY_FILE);


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(arr, func){ 
    let grouped_list = {};
    arr.forEach(function(p){
        let id = func(p);
        if ( grouped_list[id] === undefined ) {
            grouped_list[id] = [];
        }
        grouped_list[id].push( p )
    });
    return grouped_list;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

let byCenturies = groupBy( data, getCentury );

for ( century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}

//Задача №13

function every_function(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (!func(array[i])) {
            return false
        }
    }
    return true;
};

function some_function(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return true
        }
    }
    return false;
};


console.log(every_function([NaN, NaN, NaN], isNaN));
console.log(every_function([NaN, NaN, 8, 'Num'], isNaN));
console.log(some_function([0, 9, NaN], isNaN));
console.log(some_function([11, 21, 31], isNaN));
