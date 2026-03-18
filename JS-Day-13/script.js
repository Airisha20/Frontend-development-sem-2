








console.log("a")//synchronous
setTimeout(() => {
    console.log("b")
}, 5000);
setTimeout(() => {
    console.log("b")
}, 3000);
setTimeout(() => {
    console.log("b")
}, 2000);