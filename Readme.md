# JavaScript Notes

## JS-Day-1

Java script is synchronous and almost everything in it is an object. It's an object-oriented language.

Callback function - In callback function, we can pass a function as an argument in another function and call it simultaneously. 

In script.js, sample(demo) is an example of callback function

Asynchronous functions: We can move to another task before the previous one finishes its execution
Synchronous functions: Code is read and executed line by line.

## JS-Day-2

For Loop
Syntax - 
```js 
for (block of code){
    statement 1
    statement 2
}
```
eg-
```js 
for(let i=0; i<=5; i++){
    console.log(i)
}
```

in this code, i is initialized as 0 in the first step. Then in step 2, condition is checked (if it is smaller or equal than 5) and print the value of i as step 3. In step 4 (i++) i is reinialized with adding 1, (so I = 1 in step 4) and then it moves back to the condition for step 5 and is checked again and then print again in loop. When condition becomes false, it moves outside the block and run the code outside.

Nested For Loop
```js
for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        console.log(j);
    }
    console.log(i);
}
```

Array Methods (All array methods require arrow functions as arguments.)
- 1. map(callback) 
- 2. filter(callback)
- 3. reduce(callback)

## JS-Day-3
More Array Methods
- 4. push(element) - pushes at the end
- 5. pop() - removes from the end
- 6. shift() - removes from the front
- 7. unshift(element) - adds from the front and returns the length

## JS-Day-4
More Array Methods
- 7. slice(start,end) - returns a new array containing elements from the original array within the specified range
- 8. some(callback) - Checks if at least one element in the array satisifes the condition specified in the callback function. Returns true if ANY element meets the condition
- 9. every(callback) - does what some does but returns true only when EVERY element meets the condition
- 10. concat(array) - Concatenates two seperate arrays and returns a new combined array
- 11. splice (start, deleteCount, item1, item2....) - Changes the content of an array by removing or replacing existing elements and/or adding new elements.
- 12. reverse() - reverses the order of the array
- 13. includes() - Determines whether an array inclues a certain value among its entries, returning true or false as appropriate.

String Methods
