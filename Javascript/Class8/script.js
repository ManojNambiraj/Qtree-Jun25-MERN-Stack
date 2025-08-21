// Create Elements using DOM

let newEle = document.createElement("ul")
newEle.setAttribute("class", "header")

let newli1 = document.createElement("li")
newli1.innerText = "Sportz"
let newli2 = document.createElement("li")
newli2.innerText = "Music"

document.body.append(newEle);
newEle.appendChild(newli1)
newEle.appendChild(newli2)