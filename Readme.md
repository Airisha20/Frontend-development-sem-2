# JavaScript Notes

## JS-Day-1

Java script is synchrnous and almost everything in it is an object. It's an object-oriented language.

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

map(callback) 
filter(callback)
reduce(callback)
