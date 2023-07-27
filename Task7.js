var romanToInt = function(s) {
    let romanToIntValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanToIntValue[s[i]] < romanToIntValue[s[i+1]]) {
            value-=romanToIntValue[s[i]]
        }  
        else {
            value+=romanToIntValue[s[i]]
        }
    }
    return value
    
};
const a = romanToInt("LVIII")
console.log(a);