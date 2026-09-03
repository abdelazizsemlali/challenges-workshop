const prompt = require('prompt-sync')();

let a =Number(prompt("choisi : 1 laddition  2 substraction  3 multiplication   4 division 5 quitter"));
  if(a==1){ 
   
let x =Number(prompt("entre le premier  nombre "));
let y =Number(prompt("entre le 2eme nombre ")) ;
  console.log(x+y);

  } else if (a==2){
let x =Number(prompt("entre le premier  nombre "));
let y =Number(prompt("entre le 2eme nombre ")) ;
  console.log(x-y);

  } else if (a==3){
let x =Number(prompt("entre le premier  nombre "));
let y =Number(prompt("entre le 2eme nombre ")) ;
  console.log(x*y); 

  }  else if (a==4){
let x =Number(prompt("entre le premier  nombre "));
let y =Number(prompt("entre le 2eme nombre ")) ;
  console.log(x/y);

  }  else  if (a==5) {
    console .log("quitter") ;
  }
  
  
 
  

  
function addition(x , y){
    return x + y ;
   addition();

}
function substraction(x , y){
    return x - y ;
}
function multiplication (x , y){
    return x * y ;
}
function division (x , y){
    return x / y ;
}

