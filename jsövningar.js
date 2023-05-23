let olle = document.getElementsByTagName("p")

for(var i = 0; i< olle.length;i++) {
    console.log(olle[i])
}


let aTag = document.getElementsByTagName('a').length;

window.alert(aTag)

let colorChanger =document.getElementsByTagName('div')

for(let i = 0;i< colorChanger.length; i++) {
    colorChanger[i].style.backgroundColor ="red";
}

function divAdder() {
    let divAdder=document.createElement("div")
    let olle1 = document.getElementById("container")
    divAdder.innerHTML="hej";
    olle1.appendChild(divAdder)
}

divAdder()

function h2() {
    let h2text= document.createElement("h2")
    h2text.innerHTML="VÄLKOMMEN!"
    let h2grabber = document.getElementById("header")

    h2grabber.appendChild(h2text)
}


h2()

function div() {
    let h2text= document.createElement("div")
    h2text.innerHTML="div!"
    

    document.body.appendChild(h2text)
}

div()

function button() {
    let h2text= document.createElement("button")
    h2text.innerHTML="knapp!"
    let h2grabber = document.getElementById("container")

    h2grabber.appendChild(h2text)
}

button()

