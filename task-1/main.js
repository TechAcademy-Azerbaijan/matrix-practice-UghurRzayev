// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]

let count = 0
let sum = 0
for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        if (element2<0 && element2%2==0) {
            count += 1
            sum += element2
        }
    }
} console.log(`${count}\n${sum}`);
