//find happy number
const num = 19;
const happyNumber = (num)=>{
    const seen = new Set();
    while(num !== 1 && !seen.has(num)){
        seen.add(num);
        num = num.toString().split('').reduce((sum,digit)=>sum+Math.pow(parseInt(digit),2),0)
    }
    return num===1
}
const findNextHappyNumber= (start)=>{
    let next  =  start + 1
    while(!happyNumber(next)){
        next++
    }
    return next;
}
console.log(findNextHappyNumber(8))