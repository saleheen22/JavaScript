const prompt=require("prompt-sync")({sigint:true});

function reversing(str){
    let reversedString = "";
    for (let i = str.length-1; i>-1; i--){

        reversedString += str[i];
    }
    return reversedString;
    
    
}

var x = prompt();
console.log(reversing(x));