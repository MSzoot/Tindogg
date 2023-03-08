import {dogs}  from "/data.js"
import { Dog } from "./Dog.js"

let index = 0 ;
let currentDoggo =  new Dog(dogs[index])


const render = () => {
document.getElementById("doghtml").innerHTML = currentDoggo.getHtml()
}


const getNextDog = () => {
    if(index != 2){
        index++;
        currentDoggo =  new Dog(dogs[index])
        render();
    }
}

const setStatus = (likeOrnope) => {
    if (likeOrnope == "like"){
        currentDoggo.reactionLike()
    }else if(likeOrnope == "nope"){
        currentDoggo.reactionNope()
    }
    render()
}



const likeClicked = () => {
    setStatus("like")
    setTimeout( getNextDog ,500)
}
const nopeClicked = () => {
    setStatus("nope")
    setTimeout( getNextDog ,500) 
}

document.getElementById("btnLike").addEventListener("click",likeClicked)
document.getElementById("btnNope").addEventListener("click",nopeClicked)




render()