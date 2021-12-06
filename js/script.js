let lyricsP = document.querySelector("#text");
let playButton = document.querySelector("#button");

let sec = 0;
let playingStatus = 0;
let timerSpeed = 0.5;

let sound = new Audio("./assets/Enemy.mp3");
sound.volume = 0.5;

function playStatus() {
    if (playingStatus == 0) {
        playingStatus = 1;
        sound.currentTime = sec;
        sound.play();
        lyricsTimer();
    } else {
        playingStatus = 0;
    }
}

function lyricsTimer() {
    if (playingStatus == 0) {
        // Niks
    } else {
        setTimeout( function() {
            sec += timerSpeed;
            console.log(sec);
            lyricsSync();
            lyricsTimer();
        }, timerSpeed * 1000)
    }
}

function lyricsSync() {
    playButton.classList.add("hidden");
    switch(sec) {
        case 4.5:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "Look out for yourself";
            break;
        case 6: 
            lyricsP.classList.remove("inspringen");
            lyricsP.innerHTML = ""
            break;
        case 7:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "I wake up to the sounds of the silence that allows";
            break;
        case 9.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 10:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "For my mind to run around, with my ear up to the ground";
            break;
        case 12.5:
            lyricsP.classList.remove("inspringen");
            break;   
        case 13:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "I'm searching to behold the stories that are told";
            break;
        case 15.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 16:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "When my back is to the world that was smiling when I turned";;
            break;
        case 18.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 19:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "Tell you you're the greatest";
            break;
        case 24.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 25:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "But once you turn, they hate us";
            break;
        case 31:
            lyricsP.classList.remove("inspringen");
            lyricsP.innerHTML = "";
            break;
        case 32.5:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "Oh, the misery";
            break;
        case 34.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 35:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy</span>";
            break;
        case 37.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 38:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "Spare the sympathy";
            break;
        case 40.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 41:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy-y-y-y-y</span>";
            break;
        case 47:
            lyricsP.classList.remove("inspringen");
            break;
        case 47.5:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "(Look out for yourself)";
            break;
        case 48.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 49:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "My <span id='enemy'>enemy-y-y-y-y</span> (Look, look, look, look)";
            break;
        case 53:
            lyricsP.classList.remove("inspringen");
            break;
        case 53.5:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "(Look out for yourself)";
            break;
        case 54.5:
            lyricsP.classList.remove("inspringen");
            break;
        case 55:
            lyricsP.classList.add("inspringen");
            lyricsP.innerHTML = "But I'm ready";
            break;
        case 56:
            lyricsP.classList.remove("inspringen");
            lyricsP.innerHTML = "";
            break;
    }
}

playButton.addEventListener("click", playStatus)