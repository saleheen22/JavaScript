var jsCalculator = (a,b,operator) =>{
    if (operator == "+"){
        return a + b;
    }
    if (operator == "-"){
        return a-b;
    }
    if (operator == "*"){
        return a*b;
    }
    if (operator == "/"){
        return a/b;
    }
}
const a = jsCalculator(5,2,"-");
console.log(a);