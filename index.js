let btn=document.querySelector(".mybtn")
let vedio=document.querySelector(".ved")
// let btn=document.querySelector(".mybtn")

btn.addEventListener("click",()=>{
    if(  btn.textContent=="stop")
    {
        console.log("if")
        btn.textContent="start"
        vedio.pause()
    }
    else{
        console.log("else")
        btn.textContent="stop"
        vedio.play()

    }


})
