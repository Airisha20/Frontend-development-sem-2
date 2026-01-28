// [
//     ["x","o","x"]
//     ["o","x","x"]
//     ["x","o","o"]
// ]

let user = {
    FullName: "Airisha",
    Address:{
        City: "Khanpur",
        State: "New Delhi",
        demo:function(){
            return "demo function"
        }
    },
    Mobilenumber: 9873167021,
    Favcols: ["White", "Black", "Lavender"]
}
console.log(user.FullName, user.Favcols, user.Address.City, user.Address.demo())

console.log("my name is "+user.FullName+". My fav color is "+ user.Favcols[0]+".")

//string literal
console.log(`my name is ${user.FullName}. My fav color is ${user.Favcols[1]}.`)

//Object Methods
console.log(Object.keys(user))
// console.log(Object.)
console.log(Object.entries(user))