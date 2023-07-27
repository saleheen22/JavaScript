function secondSmallest(arr){
    arr.sort((a,b)=> a-b);
    return arr[1];
}

const a = secondSmallest([10,4,2,1]);
console.log(a)