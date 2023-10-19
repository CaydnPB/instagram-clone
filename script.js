const article = document.querySelector("article")
const button = document.querySelector("button")
const count1 = document.querySelector("#count-1")
let newCount = 0;

article.addEventListener("click", function(){
    console.log("You clicked on an article!")
    this.style.borderColor = "blue";
})

button.addEventListener("click", function(){
    console.log("You liked an article!")
    newCount = Number(count1.innerHTML) + 1
    count1.innerHTML = newCount;
})