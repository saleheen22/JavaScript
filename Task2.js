function allPositive(arr){
    const posSum = arr.reduce((sum, current)=> {
        if(current>-1){
            return sum + current;   
        }
        else{
            return sum;
        }
    },0);

    return posSum;
}

console.log(allPositive([1,1,3,-1000,-4,-5]));
