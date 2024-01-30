// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let x=1
let sum=0;
let total;
while(x<=150){
  

sum=sum+x;
console.log(sum)

if(sum>=100){
    break;
}
x++
}

