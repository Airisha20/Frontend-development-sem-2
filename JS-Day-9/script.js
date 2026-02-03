const h2heading = document.getElementsByTagName("h2")
for(let i=0;i<h2heading.length;i++){
    h2heading[i].style.color="lavender"
}

const query = document.querySelector("#content p")
console.log(query);

query.textContent = "merry christmas, please don't call"

const paragraph = document.getElementsByTagName("p")
for(let i=0;i<paragraph.length;i++){
    if(i%2==0){
        paragraph[i].style.color="blue"
    }
    else{
        paragraph[i].style.color="green"
    }
}