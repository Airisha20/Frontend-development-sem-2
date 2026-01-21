//string methods

let str = "Javascript is fun!"
let sliced = str.slice(0, 10)
console.log(sliced)

let string = "Javascript is amazing!"
let slice = string.substring(11,20)
console.log(slice)

const paragraph = "wow Airisha so cool!"
const indexofffirst = paragraph.indexOf("Airisha")
console.log(indexofffirst)

let sentence = "I love JavaScript. Javascript is powerful."
let newSentance = sentence.replace("Javascript", "Node.js")
console.log(newSentance)

let sent = "I love Javascript. Javascript is powerful."
let newSent = sent.replaceAll("Javascript", "Node.js")
console.log(newSent)

let name = "John Doe"
let uppercasename = name.toUpperCase()
let lowercasename = name.toLowerCase()
console.log(uppercasename)
console.log(lowercasename)

let firstname = "John"
let lastname = "Doe"
let fullname = firstname.concat(" ", lastname)
console.log(fullname)
let fullName = `${firstname}: this is my firstname, ${lastname}: this is my lastname`
console.log(fullName)

let sen = "   This is a sentence with spaces.   ";
let trimmed = sen.trim()
console.log(trimmed)

let word = "Hello"
let charat = word.charAt(1)
let charcodeat = word.charCodeAt(1)
console.log(charat)
console.log(charcodeat)

let line = "I,am,a,comma,separated,sentence"
let words = line.split(",")
console.log(words)

//spread operators 
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let newArray = [...arr1,...arr2]
console.log(newArray)