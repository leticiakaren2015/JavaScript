let num = [2, 4, 5, 1, 8, 9, 3]
num.push(6)
num.sort()

/*for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} */

for(let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
let i = num.indexOf(6)
console.log(i)