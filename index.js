import {dogs}  from "/data.js"
import { Dog } from "./Dog.js"


// set starting index of dogs array to 0 , waiting wariable to false, creates starting dog  

let index = 0 ;
let waiting = false;
let currentDoggo =  new Dog(dogs[index])

// function renders html using gethtml() method from dog class
const render = () => {
document.getElementById("doghtml").innerHTML = currentDoggo.getHtml()
}
// functions for like and dislike buttons firing status and next dog functions = function will work only when there is no waiting bool = false

const likeClicked = () => {
    if(!waiting){
    setStatus("like")
    setTimeout( getNextDog ,1000)
    }
}
const nopeClicked = () => {
    if(!waiting){
    setStatus("nope")
    setTimeout( getNextDog ,1000) 
    }
}

// event listeners for buttons
document.getElementById("btnLike").addEventListener("click",likeClicked)
document.getElementById("btnNope").addEventListener("click",nopeClicked)


//status function will generate and render like/nope labels on picture, sets waiting bool to true to prevent button spam
const setStatus = (likeOrnope) => {
    if (likeOrnope == "like"){
        currentDoggo.hasBeenLiked = true;
    }
    currentDoggo.reaction()
    render()
    waiting = true
}

// gets next dog from array and renders , sets waiting to false at the end to enable like/dislake for next dog
const getNextDog = () => {
    if(index < 2){
        index++;
        currentDoggo =  new Dog(dogs[index])
        render();
    }else if (index == 2){
        index = 0
        currentDoggo =  new Dog(dogs[index])
        render();
    }
    waiting = false
}



render()