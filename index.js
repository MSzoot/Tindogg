import {dogs}  from "/data.js"
import { Dog } from "./Dog.js"

let index = 0 ;
let waiting = false;
let currentDoggo =  new Dog(dogs[index])


const render = () => {
document.getElementById("doghtml").innerHTML = currentDoggo.getHtml()
}


const getNextDog = () => {
    if(index < 2){
        index++;
        currentDoggo =  new Dog(dogs[index])
        render();
    }else if (index = 2){
        index = 0 ;
        currentDoggo =  new Dog(dogs[index])
        render();
    }
    waiting = false
}

const setStatus = (likeOrnope) => {
    if (likeOrnope == "like"){
        currentDoggo.hasBeenLiked = true;
    }
    currentDoggo.reaction()
    render()
    waiting = true
}



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

document.getElementById("btnLike").addEventListener("click",likeClicked)
document.getElementById("btnNope").addEventListener("click",nopeClicked)




render()