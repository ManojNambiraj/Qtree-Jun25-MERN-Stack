// DOM

// let ele = document.getElementById("demo")

// ele.innerText = "Welcome"
// ele.style.color = "red"

// console.log(ele);

let newele = document.createElement("ul")
newele.setAttribute("class", "lists")

let newli1 = document.createElement("li")
newli1.innerText = "Music"
let newli2 = document.createElement("li")
newli2.innerText = "Sportz"

document.body.append(newele)
newele.appendChild(newli1)
newele.appendChild(newli2)