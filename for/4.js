// Display sum of all the odd numbers from 91 to 129.
let sum=0;
for(let x=91;x<=129;x++){

    if(x % 2 !==0){
        sum=sum+x;
    }
}
console.log(sum);