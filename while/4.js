// Display sum of all the odd numbers from 81 to 131.

let i=81;
let total=0;
while(i<=131){
    if( i % 2 !==0  ){

        total=total+i
    }
    i++
}

console.log(`sum of all number = ${total}`)