function mostFrequent(arr){
    const frqn = {}
    for (i of arr){
        frqn[i] = (frqn[i] || 0) +1;
    }
    var x = -1000;
    var y = 0;
    for (key in frqn){
        if (frqn[key] > x){
            x = frqn[key]
            y = key;
        }
    }
    return y;
}
const a = mostFrequent([1,3,3,4,4,4,4
])
console.log(a);

