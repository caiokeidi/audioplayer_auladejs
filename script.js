var audio = document.getElementById("music")
var interval

audio.addEventListener("ended", on_ended)

function retroceder(){
    audio.currentTime -= 15
    att_progress()
}

function avancar(){
    audio.currentTime += 15
    att_progress()
}

function menos_vel(){
    audio.playbackRate -= 0.1
}

function mais_vel(){
    audio.playbackRate += 0.1
}

function play_music(){

    att_progress()

    let status = audio.getAttribute("state")

    if(status == "stopped"){
        audio.play()
        start_interval()
        audio.setAttribute("state", "playing")
    }

    else{
        audio.pause()
        stop_interval()
        audio.setAttribute("state", "stopped")
    }

    change_play_icon()
}

function stop(){
    audio.pause()
    stop_interval()
    audio.currentTime = 0;

    let status = audio.getAttribute("state")
    audio.setAttribute("state", "stopped")

}

function change_play_icon(){
    let status = audio.getAttribute("state")
    let play_button = document.getElementById("play_btm")

    if(status == "stopped"){
        play_button.setAttribute("src", "Assets/Icons/play.png")
    }
    else{
        play_button.setAttribute("src", "Assets/Icons/pause.png")
    }
}

function on_ended(){
    audio.setAttribute("state", "stopped")
    change_play_icon()
}

//Functions of intervals - to make the progress bar move
function start_interval(){
    interval = setInterval(interval_timeout, 300)
}

function stop_interval(){
    clearInterval(interval)
}

function interval_timeout(){
    att_progress()

    let audio_status = audio.getAttribute("state")

    if (audio_status == "stopped"){
        stop_interval()
    }

}

function att_progress(){
    let time = audio.currentTime
    let time_max = audio.duration

    let progress_bar = document.getElementById("progress_bar")

    progress_bar.value = time
    progress_bar.max = time_max
}

function hover_btm(element){
    element.style = "width : 11%"
}

function out_btm(element){
    element.style = "width : 10%"
}