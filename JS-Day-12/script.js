const nameInput=document.getElementById("myInput")

// nameInput.addEventListener("change",()=>{
//     document.getElementById ("output").textContent="Change detected!";
//     console.log(nameInput.value)
// })

const courseInput=document.getElementById("course")
const Form=document.getElementById("myform")
const output=document.getElementById("output")

courseInput.addEventListener("change",()=>{
    console.log(courseInput.value)

    output.textcontent=nameInput.value
    output.textContent=courseInput.value
})


Form.addEventListener("Submit",(event)=>{
    event.preventDefault()
    console.log(event)

    const name=nameInput.value
    const course=courseInput.value
    console.log(name,course)
})