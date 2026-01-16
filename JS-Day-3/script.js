// let fruits = ["apple", "banana"]
// let newLength = fruits.push("cherry");
// console.log(newLength)
// console.log(fruits)

// let popped = fruits.pop()
// console.log(popped)

// let shifted = fruits.shift()
// console.log(shifted)

// let unshifted = fruits.unshift("apple", "kiwi")
// console.log(unshifted)


// Q1
// let arr = [1, 2, 3, 4, 5]
// let res=[]
// while (arr.length>0){
//     res.push(arr.pop());
// }

// console.log(res)


// Q2
// let arr = [-12,-31,23,42,-23]
// let posint = []
// while (arr.length>0){
//     let val = arr.shift()
//     if(val>=0){
//         posint.push(val)
//     }
// }
// console.log(posint)

// Q3
function palindromecheck(){
    let number = [1,2,3,4,5]
    let temp=[]
    let original=[]
//put the number array in an original empty array
    for(let i=0; i<number.length;i++){
        original.push(number[i])
    }

    console.log(original)
    while (number.length>0){
        temp.push(number.pop());
    }
    console.log(temp,"temp")

    for(let i=0; i<original.length; i++){
        if(original[i]!==temp[i])
            return"It's not a palindrome"
    }   
    return "it's a palindrome"
}
console.log(palindromecheck())