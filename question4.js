//find number of charactor required to make it palindrom
const sampleString = 'aacecaaa'
const reverseSampleString = sampleString.split('').reverse().join('');
let sample  = reverseSampleString[0]
for(let i=1;i<sampleString.length;i++){
    let temp = sample+sampleString
    if(temp.split('').reverse().join('') == temp.split('').join('')){
        console.log(i)
        break;
    }
    sample += reverseSampleString[1]
}