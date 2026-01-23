let str = "truly round rotund rave of ravenous rumors"
let rcount = str.split("r")
console.log(str.split("r").length-1)

// function test(a){
//     console.log("test")
//     return function test2(b){
//         console.log("test2")
//         return function test3(c){
//             console.log ("test3")
//         }
//     }
// }

// test()()()
// let value = test(10)
// let value2=value()
// value2(15)

function demo (){
    console.log("demo")
}
let a = 10
console.log(a)
function sample2(){
    demo()
}
sample2()