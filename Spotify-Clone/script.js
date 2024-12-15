console.log("Welcome to Spotify!!")

let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let masterSongName=document.getElementById("masterSongName");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItems"));

let songs=[
    {
        songName:"GiftWrap",
        filePath:"songs/1.mp3",
        coverName:"covers/1.jpg"

    },

    {
        songName:"Your daily dose of sunshine",
        filePath:"songs/2.mp3",
        coverName:"covers/2.jpg"

    },

    {
        songName:"Yours only",
        filePath:"songs/3.mp3",
        coverName:"covers/3.jpg"

    },

    {
        songName:"Your best friend",
        filePath:"songs/4.mp3",
        coverName:"covers/4.jpg"

    },

    {
        songName:"Eras is a feature",
        filePath:"songs/5.mp3",
        coverName:"covers/5.jpg"

    },

    {
        songName:"Again",
        filePath:"songs/6.mp3",
        coverName:"covers/6.jpg"

    },

    {
        songName:"Love love love",
        filePath:"songs/7.mp3",
        coverName:"covers/7.jpg"

    },
    {
        songName:"That Christmas",
        filePath:"songs/8.mp3",
        coverName:"covers/8.jpg"

    },
    {
        songName:"Radolf",
        filePath:"songs/9.mp3",
        coverName:"covers/9.jpg"

    },
    {
        songName:"Dhum-ta-na-na",
        filePath:"songs/10.mp3",
        coverName:"covers/10.jpg"

    }
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverName;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})


//handle Play/Pause Click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;


    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener("timeupdate",()=>{

    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=audioElement.duration*myProgressBar.value/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id); 
        
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterSongName.innerText=songs[songIndex].songName;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex-1}.mp3`;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})