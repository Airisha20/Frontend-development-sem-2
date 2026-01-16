// for loop

// for(let i=0; i<=5; i++){
//     console.log(i)
// }

// array methods
// map method

let arr = [1,2,3,4,5]
let result = arr.map((x)=>x+2)
console.log(result);

//filter method

let scores = [12,7,22,15,32,6,4,27,11,16];
let HighScores = 
scores.filter(score => score<= 15);
console.log(HighScores);

let scores1 = [12,7,22,15,32,6,4,27,11,16];
let HighScores1 = 
scores1.filter(scores1 =>{
    if(scores1>=15){
        console.log("pass")
    }
    else{
        console.log("fail")
    }
} )

// reduce method

// let numbers = [1,2,3,4,5]
// sum = 0
// for(let i=0;i<numbers.length;i++){
//     sum = sum + numbers[i]
// }
// console.log(sum)
let sum = numbers.reduce((acc, current) => (acc+current))
console.log(sum)
// acc=1, index:0
// current = rest of the elements apart from index:0
