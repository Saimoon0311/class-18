// var list = document.getElementsByTagName("li")

// console.log(list.length)


// var nom = document.getElementById("p1")

// if (nom.hasAttribute("class")){
//     alert("class")
// }else{
//     alert("sorry")
// }


// var nom = document.getElementById("p1")

// alert(nom.getAttribute("class"))


// var nom = document.getElementById("p1")

// nom.setAttribute("class","red")

// var nom = document.getElementById("p1")

// console.log(nom.attributes)


// var nom = document.getElementById("p1")

// console.log(nom.attributes[1].nodeName)


// var nom = document.getElementById("p1")

// console.log(nom.attributes[1].nodeValue)


// var p = document.createElement("p")
// console.log(p)


// var p = document.createElement("p")
// var text = document.createTextNode("hy world")
// p.appendChild(text)
// console.log(p)


// var p = document.createElement("h1")
// var text = document.createTextNode("hy world")
// p.appendChild(text)
// var main = document.getElementById("main")
// main.appendChild(p)





function AddMessege(){
    var val = document.getElementById("val")
    var p = document.createElement("p")
    var textnode = document.createTextNode(val.value)
    p.appendChild(textnode)
    var mess = document.getElementById("messege")
    mess.appendChild(p)
    val.value= ""
}