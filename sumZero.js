//find first pair in array that sum is zero (array is sorted)

//naive
function sumZero(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === 0)
                return [arr[i],arr[j]]
        }
    }
}
//refactor
function sumZero2(arr){
    let smallest = 0;
    let largest = arr.length-1
    while(smallest < largest){
        let sum = arr[smallest] + arr[largest]
        if(sum===0)
            return [arr[smallest], arr[largest]]
        else if(sum > 0)
            largest--;
        else
            left++;
    }
}