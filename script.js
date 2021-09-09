

let action ;
let countOfNumbers = +prompt('let your count of numbers')
let result = 0;
let finalResult;

// debugger;


do {
     action =  prompt('let your action (+ - * / )') .trim() ;
} while( !(action == "+" || action == "-"|| action == "*" || action == "/"));

if (action == "+" || action == "-"|| action == "*" || action == "/") {
  finalResult = +prompt(`Enter your first nubmer`);
  }
for  (i = 0; i < 7 && i < countOfNumbers; i++) { 
    result = parseInt(prompt(`enter your value`));
    if (action == "+") {
      finalResult += result;
      }
  
    if (action == "-"){
      finalResult -= result;
    }
    
    if (action == "/"){
      finalResult /= result;
    }
  
    if (action == "*"){
      finalResult *= result;
    }
  }

 
console.log(finalResult);
alert(finalResult);