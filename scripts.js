// task 2
const randomArray = [1,2,3,7,6,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0]
function zeroCount(arr){
    let countOne = 0;
    let count =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===0){
            countOne ++;
        }else{
            if(countOne >=4){
                count ++;  
            }
            countOne = 0;
        } 
        if(i == arr.length-1){
            if(countOne >=4){
                count ++;
                
            }
            countOne = 0;
        }
        
        
    }
    
    console.log(count);
   
   
}
zeroCount(randomArray);
// task 3
// program to find the sum of natural numbers using recursion


 function findSum (n){
    if(n < 10){
       return n;
    }
    const lastDigit = n % 10;
    const remainingNum = Math.floor(n / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log(findSum(1312));



//  let random = 1735 % 10;
//  console.log(
//     random
//  );
