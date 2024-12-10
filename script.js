
const digits = document.querySelectorAll(".display-diget");
let firstNumber = [];
let firstNum;
let secondNumber = [];
let secondNum;
let answerNum;
let hasAfunctionBeenCalled = false;
let currentFunc


function setDegitBorder(){
    digits.forEach((digit)=>{
        if (digit.innerText === "" ){
            // console.log(index + " is empty")
            digit.style.borderBottom = "1px solid black";
        }else{
            // console.log(index + " is full")
            digit.style.borderBottom = "none";
           
        } 
    })
   
}


async function fillFirstNumber(number){
    if(!hasAfunctionBeenCalled){
        firstNumber.push(number);
        firstNum = firstNumber.join('');
        console.log(firstNumber, firstNum)
       
        digits.forEach((digit, index)=>{
           if (firstNumber[index]){
           digit.innerText = firstNumber[index]; 
           setDegitBorder();   
           }
        })
    }else if(hasAfunctionBeenCalled){
        secondNumber.push(number);
        secondNum = secondNumber.join('');
        console.log(secondNumber, secondNum)
       
        digits.forEach((digit, index)=>{
           if (secondNumber[index]){
           digit.innerText = secondNumber[index]; 
           setDegitBorder();   
           }
        })
    }

 
}

async function fillFunction (fun){
    hasAfunctionBeenCalled = true;

    digits.forEach((digit) => {
        digit.innerText = '';
        digit.style.borderBottom = "1px solid black";
    })

switch(fun){
    case 1: currentFunc = "add"
    break;
    case 2: currentFunc = "sub"
    break;
    case 3: currentFunc = "multiply"
    break;
    case 4: currentFunc = "divide"
    break;
     default:
     break;
}

console.log(currentFunc)
return currentFunc;

}

async function doCalc (){
    hasAfunctionBeenCalled = false;
    
    digits.forEach((digit) => {
        digit.innerText = '';
        digit.style.borderBottom = "1px solid black";
    })
    //calculator npm
    let basicMath = require('advanced-calculator');
    basicMath.evaluate('1 + sin(4/2) / 3 ^ 3 -1 * 3 + pi + max(3,2) % log(24)');
   let calculatedAnswer =  basicMath.currentFunc(firstNum,secondNum)
   
   console.log(calculatedAnswer);


    //do operation
    firstNumber = [];
    secondNumber = [];

}
setDegitBorder(); 
