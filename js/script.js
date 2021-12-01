let lyricsP = document.querySelector("#lyrics");
let playButton = document.querySelector("#play");

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
    if (sec >= 4.5 && sec <= 6) {
        lyricsP.textContent = "Look out for yourself";
    } else if (sec >= 7 && sec <= 9.5) {
        lyricsP.textContent = "I wake up to the sounds of the silence that allows";
    } else if (sec >= 10 && sec <= 12.5) {
        lyricsP.textContent = "For my mind to run around, with my ear up to the ground";
    } else if (sec >= 13 && sec <= 15.5) {
        lyricsP.textContent = "I'm searching to behold the stories that are told";
    } else if (sec >= 16 && sec <= 18.5) {
        lyricsP.textContent = "When my back is to the world that was smiling when I turned";
    } else if (sec >= 19 && sec <= 24.5) {
        lyricsP.textContent = "Tell you you're the greatest";
    } else if (sec >= 25 && sec <= 30.5) {
        lyricsP.textContent = "But once you turn, they hate us";
    } else if (sec >= 32.5 && sec <= 34.5) {
        lyricsP.textContent = "Oh, the misery";
    } else if (sec >= 35 && sec <= 37.5) {
        lyricsP.textContent = "Everybody wants to be my enemy";
    } else if (sec >= 38 && sec <= 40.5) {
        lyricsP.textContent = "Spare the sympathy";
    } else if (sec >= 41 && sec <= 47) {
        lyricsP.textContent = "Everybody wants to be my enemy-y-y-y-y";
    } else if (sec >= 47.5 && sec <= 48.5) {
        lyricsP.textContent = "(Look out for yourself)";
    } else if (sec >= 49 && sec <= 53) {
        lyricsP.textContent = "My enemy-y-y-y-y (Look, look, look, look)";
    } else if (sec >= 53.5 && sec <= 54.5) {
        lyricsP.textContent = "(Look out for yourself)";
    } else if (sec >= 55 && sec <= 55.5) {
        lyricsP.textContent = "But I'm ready";
    } else {
        lyricsP.textContent = "";
    }
}

playButton.addEventListener("click", playStatus)