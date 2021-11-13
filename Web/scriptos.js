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
    let arrayRange = new Array ();
    for (let i=left; i<= right; i++){
        arrayRange.push(i)
    }
    return console.log(arrayRange);
}
range(prompt('Введите начало диапазона: ', 0), prompt('Введите конец диапазона: ', 0))

function sum(array){
    let summ = 0;
    for(let i = 0; i<= array.length; i++){
        summ = summ + array[i];
    }
    return console.log(summ)
}
lengthArray = promt('Введите длину диапазона: ', 0)
let arry = new Array()
for(let i = 0; i <= lengthArray; i++){
    array.push(promt(`Введите элемент массива под номером: ${i}`, 0))
}
sum(array)

//Задача №7
function reversArray(array){
    let reversedArray = new Array();
    for(let i=array.length-1; i>-1; i--){
        reversedArray.push(array[i])
    }
    return console.log(reversedArray)
}
let First_array = new Array (0,1,2,3,4,5)
reversArray(First_array)