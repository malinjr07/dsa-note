/**
 * # Armstrong Number
 *
 */

const armstrong=(n)=>{
let strongNum =0;
let tempNum =n;
const powerValue = n.toString().length
while (n>0) {
    const lastDigit = n%10;
    strongNum+= lastDigit**powerValue;
    console.log("lastDigit:", lastDigit,"lastDigit^"+powerValue,lastDigit**powerValue,"strongNum:", strongNum);
    n=Math.floor(n/10);
}
return tempNum === strongNum
}

console.log(armstrong(1634))