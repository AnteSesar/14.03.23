"use strict";
// 1.
var a = 78;
var b = 34;
//delete a;
//delete window.b;
var myObject = {property1:1, property2:2, property1:1};





// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };



// RADI ALI NERADI????
// users[2] = user; 

// for (let i = 0; i < users.length; i++){
//   console.log(users[i].name);
// }
// return;

// users = [...users, user];

// for (let i = 0; i < users.length; i++){
//   console.log(users[i].name);
// }
// return;


/*
var users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = [
  { name: 'Lorenzo', surname: 'Verdi' },
  { name: 'Bozo', surname: 'Guy' },
];

users = [...users, ...user];

for (let i = 0; i < users.length; i++){
  console.log(users[i].name);
}
return;
*/



//riješenje
var noviUseri = [...users, user];

console.log(noviUseri[2].name);

//način ispisa svega
noviUseri.forEach(function(item){
  console.log(item.name);
});

//način ispisa svega
for (let i = 0; i < noviUseri.length; i++){
  console.log(noviUseri[i].name);
}





// // 3.
// for (let i = 0; i < 10; i++) {
//  setTimeout(function() {
//    console.log('The number is ' + i);
//  }, 1000);
// }

//console.log(i);
