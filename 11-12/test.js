let user = new Object();
let user1 = {};

let user2 = {
    name: "Oleg",
    age: 23
};

alert(user2.name);

user2.isAdmin = true;

delete user2.age;

const User_Const = {
    name:'Name const'
};

User_Const.name = 'Name2';

console.log(User_Const);

user2['Several words'] = 'FDSFSD';

console.log(user2);

let input = prompt('Введите что-нибудь: ');

let object1 = {
    [input]: 5
};

function makeUser(username, userAge){
    return{
        username: username,
        userAge: userAge
    }
}

function makeUser2(username, userAge){
    return{username, userAge}
}

'Several words' in user2;

for (key in user2){
    console.log(`${key}, ${user2[key]}`);
}

