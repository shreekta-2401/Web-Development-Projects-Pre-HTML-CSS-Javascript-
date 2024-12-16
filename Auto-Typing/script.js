const wordsList=["Data-Scientist.","Developer.","Strategist.","Speaker.","Teacher."]
const word="Data-Scientist"
const span=document.querySelector('span')

let wordIndex=0
let characterIndex=0
let skipUpdate=0
let reverseType=false

const intervalID=setInterval(()=>{
    if(skipUpdate){
        skipUpdate--
        return
    }
    if(reverseType!=true) {
        skipUpdate=2
        span.innerText=span.innerText+wordsList[wordIndex][characterIndex]
        characterIndex++
    }
    else{

        span.innerText=span.innerText.slice(0,span.innerText.length-1)
        characterIndex--
    }

    if(characterIndex===wordsList[wordIndex].length) {
        skipUpdate=5
        reverseType=true
    }
    if(span.innerText.length===0 && reverseType){
        reverseType=false
        characterIndex=0
        wordIndex++
    }

    if(wordIndex===wordsList.length){
        wordIndex=0
    }
    
}
,100)
