const n = 5
let k = 3
arr = [5, 10, 30, 20, 15]
const painterPatition = []
const sortArray = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
arr = sortArray(arr)
painterPatition.push([arr[arr.length - 1]]);
arr.pop();
for (let j = 0; j < arr.length; j = j + 2) {
    if (k - 1 % arr.length == 2) {
        painterPatition.push([arr[j],arr[j+1]])
    }
}
console.log(painterPatition)
