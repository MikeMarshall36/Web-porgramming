let player = [1,2]
let currPlayer = player[Math.floor(Math.random() * player.length)];
let word = (prompt(`Игрок ${currPlayer}. Загадайте слово: `))
word = word.toLowerCase()
let ticker = 0
let trys = word.length + 3
let res = word.split('')
let arr = []
let alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']

for(let i = 0; i<word.length; i++){
    arr.push('_')
}
alert(`Длинна слова: ${word.length}\nСлово: ${arr}\nОсталось попыток: ${trys}\nОставштйся алфавит ${alphabet}`)
while (ticker < trys){
    letter = prompt('Введите любую букву: ')
    if (word.indexOf(letter) > -1){
        for(let i = 0; i < arr.length; i++)
            if (res[i] == letter){
                arr[i] = letter
                ticker ++
            }
            alert(`Длинна слова: ${word.length}\nСлово: ${arr}\nОсталось попыток: ${trys}\nОставштйся алфавит ${alphabet}`)
            if (ticker >= word.length){
                trys = trys - ticker
            }
        
    }
    else{
        trys --
        alert(`Длинна слова: ${word.length}\nСлово: ${arr}\nОсталось попыток: ${trys}\nОставштйся алфавит ${alphabet}`)
    }

}
alert('Игра завершена.')
document.write(`Длинна слова: ${word.length}\nСлово: ${arr}\nОсталось попыток: ${trys}\nОставштйся алфавит ${alphabet}`)