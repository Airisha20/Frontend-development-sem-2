let numbers = [1,2,3,4]
let sliced = numbers.slice(1,4)
console.log(sliced)

let number = [1,3,468,10]
let haseven = number.some(x => x % 2 == 0)
console.log(haseven)

let list = [1,3,4,5,6]
let alleven = number.every(x => x % 2 == 0)
console.log (alleven)

let fruits1 = ["apple", "bananas"]
let fruits2 = ["Cherry", "Oranges"]
let concat = fruits1.concat(fruits2)
console.log(concat)

let fruits = ["apple", "banana", "cherry"]
let res = fruits.splice(0,2,"orange", "grape")
console.log(fruits)
console.log(res)

let arr = [1,2,3,4,5]
let rra = arr.reverse()
console.log(rra)

let array = ["drink", "pink", "dellecher"]
let inc = array.includes("dellecher")
console.log(inc)