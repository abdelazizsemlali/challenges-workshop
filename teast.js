const prompt = require("prompt-sync")();
function addition(x , y){
    return x + y ;

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


function afficherTableux() {
    let a;
    let n1;
    let n2;
   do { 
    console.log( "tableau de calcul ");

    console.log("1 addittion: ");
    console.log("2 multiplication: ");
    console.log("3 division: ");
    console.log("4 substraction: ");
    console.log("5 quitter: ");

    a = Number(prompt("entre un nombre "));
     switch (a) {
        case 1: 
        n1=Number(prompt("entre nombre 1"));
        n2=Number(prompt("entre nombre 2"));
        console.log(addition(n1,n2));
        break ;
        case 2 :
            n1=Number(prompt("entre nombre 1"));
        n2=Number(prompt("entre nombre 2"));
        console.log(multiplication(n1,n2));
            break ;
            case 3 :
                n1=Number(prompt("entre nombre 1"));
        n2=Number(prompt("entre nombre 2"));
        console.log(division(n1,n2));
               
                break ;
                case 4 : 
                n1=Number(prompt("entre nombre 1"));
        n2=Number(prompt("entre nombre 2"));
        console.log(substraction(n1,n2));
                
                break ;
                case 5 : 
                    console.log("quitter")  
                    break;          
                    default:
                        console.log("invalide ");

     }
   } while (a !== 5);
}

afficherTableux()