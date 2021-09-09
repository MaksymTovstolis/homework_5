debugger;

let action ;
let countOfNumbers = +prompt('let your count of numbers')
let result = 0;
let finalResult;


do {
     action =  prompt('let your action (+ - * / )') .trim() ;
} while( !(action == "+" || action == "-"|| action == "*" || action == "/"));

for  (i = 0; i < 7 && i < countOfNumbers; i++) { 
    result += parseInt(prompt(`enter your value`));
    if (action == "+") {
      finalResult = 0;
      finalResult += result;
      }
  
    if (action == "-"){
      finalResult = 0;
      finalResult -= result;
    }
    
    if (action == "/"){
      finalResult = 1;
      result /= finalResult;
      finalResult = result;
    }
  
    if (action == "*"){
      finalResult = 1;
      finalResult *= result;
    }
  }

 

console.log(action);
console.log(countOfNumbers);
console.log(result);
console.log(finalResult);