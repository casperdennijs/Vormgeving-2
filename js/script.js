let lyricsP = document.querySelector("#text");
let playButton = document.querySelector("#button");
let main = document.querySelector("main");

let sec = 0;
let playStatus = 0;
let timerSpeed = 0.1;
let timer = 0;

let music = new Audio("./assets/Enemy.mp3");
music.volume = 0.1;

setInterval(function() {
    if (playStatus == 1) {
        console.log(Math.round((music.currentTime) * 100) / 100);
    
        updateText(Math.round((music.currentTime) * 100) / 100);
    }
}, 10);

function playMusic() {
	music.play();
    playStatus = 1;
}

function updateText(timer) {
    playButton.classList.add("hidden");
    main.classList.add("background-anim")
    switch(timer) {
        case 0.5:
            lyricsP.classList.add("inspringen-1");
            lyricsP.innerHTML = "<span id='enemy' class='title'>enemy</span><br>by Imagine Dragons and J.I.D";
            break;

        case 3:
            lyricsP.classList.remove("inspringen-1");
            lyricsP.innerHTML = ""
            break;

        /* Look out for yourself */
        case 4.5:
            lyricsP.classList.add("text-1");

            lyricsP.innerHTML = "Look";
            break;
        case 4.7:
            lyricsP.innerHTML = "Look out";
            break;
        case 5:
            lyricsP.innerHTML = "Look out for";
            break;
        case 5.2:
            lyricsP.innerHTML = "Look out for yourself";
            break;

        /* I wake up to the sounds of the silence that allows */
        case 7:
            lyricsP.classList.remove("text-1");
            lyricsP.classList.add("text-2");

            lyricsP.innerHTML = "I";
            break;
        case 7.15:
            lyricsP.innerHTML = "I wake";
            break;
        case 7.3:
            lyricsP.innerHTML = "I wake up";
            break;
        case 7.7:
            lyricsP.innerHTML = "I wake up to";
            break;
        case 7.85:
            lyricsP.innerHTML = "I wake up to the";
            break;
        case 8:
            lyricsP.innerHTML = "I wake up to the sounds";
            break;
        case 8.4:
            lyricsP.innerHTML = "I wake up to the sounds of";
            break;
        case 8.55:
            lyricsP.innerHTML = "I wake up to the sounds of the";
            break;
        case 8.7:
            lyricsP.innerHTML = "I wake up to the sounds of the silence";
            break;
        case 9.1:
            lyricsP.innerHTML = "I wake up to the sounds of the silence that";
            break;
        case 9.25:
            lyricsP.innerHTML = "I wake up to the sounds of the silence that allows";
            break;

        /* For my mind to run around, with my ear up to the ground */
        case 10:
            lyricsP.classList.remove("text-2")
            lyricsP.classList.add("text-3");

            lyricsP.innerHTML = "For";
            break;
        case 10.15:
            lyricsP.innerHTML = "For my";
            break;
        case 10.3:
            lyricsP.innerHTML = "For my mind";
            break;
        case 10.7:
            lyricsP.innerHTML = "For my mind to";
            break;
        case 10.85:
            lyricsP.innerHTML = "For my mind to run";
            break;
        case 11:
            lyricsP.innerHTML = "For my mind to run around,";
            break;
        case 11.4:
            lyricsP.innerHTML = "For my mind to run around, with";
            break;
        case 11.55:
            lyricsP.innerHTML = "For my mind to run around, with my";
            break;
        case 11.7:
            lyricsP.innerHTML = "For my mind to run around, with my ear";
            break;
        case 11.85:
            lyricsP.innerHTML = "For my mind to run around, with my ear up";
            break;
        case 12.25:
            lyricsP.innerHTML = "For my mind to run around, with my ear up to ";
            break;
        case 12.4:
            lyricsP.innerHTML = "For my mind to run around, with my ear up to the";
            break;
        case 12.55:
            lyricsP.innerHTML = "For my mind to run around, with my ear up to the ground";
            break;
        
        /* I'm searching to behold the stories that are told */
        case 13:
            lyricsP.classList.remove("text-3")
            lyricsP.classList.add("text-4");

            lyricsP.innerHTML = "I'm";
            break;
        case 13.15:
            lyricsP.innerHTML = "I'm searching";
            break;
        case 13.65:
            lyricsP.innerHTML = "I'm searching to";
            break;
        case 13.8:
            lyricsP.innerHTML = "I'm searching to behold";
            break;
        case 14.3:
            lyricsP.innerHTML = "I'm searching to behold the";
            break;
        case 14.45:
            lyricsP.innerHTML = "I'm searching to behold the stories";
            break;
        case 14.95:
            lyricsP.innerHTML = "I'm searching to behold the stories that";
            break;
        case 15.1:
            lyricsP.innerHTML = "I'm searching to behold the stories that are";
            break;
        case 15.25:
            lyricsP.innerHTML = "I'm searching to behold the stories that are told";
            break;

        /* When my back is to the world that was smiling when I turned */
        case 16:
            lyricsP.classList.remove("text-4")
            lyricsP.classList.add("text-5");

            lyricsP.innerHTML = "When";
            break;
        case 16.15:
            lyricsP.innerHTML = "When my";
            break;
        case 16.3:
            lyricsP.innerHTML = "When my back";
            break;
        case 16.45:
            lyricsP.innerHTML = "When my back is";
            break;
        case 16.85:
            lyricsP.innerHTML = "When my back is to";
            break;
        case 17:
            lyricsP.innerHTML = "When my back is to the";
            break;
        case 17.15:
            lyricsP.innerHTML = "When my back is to the world";
            break;
        case 17.55:
            lyricsP.innerHTML = "When my back is to the world that";
            break;
        case 17.7:
            lyricsP.innerHTML = "When my back is to the world that was";
            break;
        case 17.85:
            lyricsP.innerHTML = "When my back is to the world that was smiling";
            break;
        case 18.25:
            lyricsP.innerHTML = "When my back is to the world that was smiling when";
            break;
        case 18.4:
            lyricsP.innerHTML = "When my back is to the world that was smiling when I";
            break;
        case 18.55:
            lyricsP.innerHTML = "When my back is to the world that was smiling when I turned";
            break;

        /*  Tell you you're the greatest */
        case 19:
            lyricsP.classList.remove("text-5")
            lyricsP.classList.add("text-6");

            lyricsP.innerHTML = "Tell";
            break;
        case 19.75:
            lyricsP.innerHTML = "Tell you";
            break;
        case 20.5:
            lyricsP.innerHTML = "Tell you you're";
            break;
        case 21.25:
            lyricsP.innerHTML = "Tell you you're the";
            break;
        case 22:
            lyricsP.innerHTML = "Tell you you're the greatest";
            break;

        /* But once you turn, they hate us */
        case 25:
            lyricsP.classList.remove("text-6")
            lyricsP.classList.add("text-7");

            lyricsP.innerHTML = "But";
            break;
        case 25.5:
            lyricsP.innerHTML = "But once";
            break;
        case 26.25:
            lyricsP.innerHTML = "But once you";
            break;
        case 27:
            lyricsP.innerHTML = "But once you turn,";
            break;
        case 27.75:
            lyricsP.innerHTML = "But once you turn, they";
            break;
        case 28.5:
            lyricsP.innerHTML = "But once you turn, they hate";
            break;
        case 29.5:
            lyricsP.innerHTML = "But once you turn, they hate us";
            break;
            
        /* Oh, the misery */
        case 32.5:
            lyricsP.classList.remove("text-7")
            lyricsP.classList.add("text-8");

            lyricsP.innerHTML = "Oh,";
            break;
        case 33:
            lyricsP.innerHTML = "Oh, the";
            break;
        case 33.5:
            lyricsP.innerHTML = "Oh, the misery";
            break;
            
        /* Everybody wants to be my spawn enemy */
        case 35:
            lyricsP.classList.remove("text-8")
            lyricsP.classList.add("text-9");

            lyricsP.innerHTML = "Everybody";
            break;
        case 35.3:
            lyricsP.innerHTML = "Everybody wants";
            break;
        case 35.6:
            lyricsP.innerHTML = "Everybody wants to";
            break;
        case 35.9:
            lyricsP.innerHTML = "Everybody wants to be";
            break;
        case 36.2:
            lyricsP.innerHTML = "Everybody wants to be my";
            break;
        case 36.5:
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy</span>";
            break;

        /* Spare the sympathy */
        case 38:
            lyricsP.classList.remove("text-9")
            lyricsP.classList.add("text-10");

            lyricsP.innerHTML = "Spare";
            break;
        case 38.75:
            lyricsP.innerHTML = "Spare the";
            break;
        case 39.5:
            lyricsP.innerHTML = "Spare the sympathy";
            break;

        /* Everybody wants to be my enemy-y-y-y-y */
        case 41:
            lyricsP.classList.remove("text-10")
            lyricsP.classList.add("text-11");

            lyricsP.innerHTML = "Everybody";
            break;
        case 41.3:
            lyricsP.innerHTML = "Everybody wants";
            break;
        case 41.6:
            lyricsP.innerHTML = "Everybody wants to";
            break;
        case 41.9:
            lyricsP.innerHTML = "Everybody wants to be";
            break;
        case 42.7:
            lyricsP.innerHTML = "Everybody wants to be my";
            break;
        case 43.7:
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy</span>";
            break;
        case 44.7:
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy-y</span>";
            break;
        case 45.5:
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy-y-y</span>";
            break;
        case 46.3:
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy-y-y-y</span>";
            break;
        case 47.1:
            lyricsP.innerHTML = "Everybody wants to be my <span id='enemy'>enemy-y-y-y</span>";
            break;
        /* (Look out for yourself) */
        case 47.5:
            lyricsP.classList.remove("text-11")
            lyricsP.classList.add("text-12");

            lyricsP.innerHTML = "(Look)";
            break;
        case 47.7:
            lyricsP.innerHTML = "(Look out)";
            break;
        case 48:
            lyricsP.innerHTML = "(Look out for)";
            break;
        case 48.2:
            lyricsP.innerHTML = "(Look out for yourself)";
            break;

        /* My enemy-y-y-y-y (Look, look, look, look)*/
        case 49:
            lyricsP.classList.remove("text-12")
            lyricsP.classList.add("text-13");

            lyricsP.innerHTML = "My";
            break;
        case 49.8:
            lyricsP.innerHTML = "My <span id='enemy'>enemy</span>";
            break;
        case 50.8:
            lyricsP.innerHTML = "My <span id='enemy'>enemy-y</span> (Look)";
            break;
        case 51.6:
            lyricsP.innerHTML = "My <span id='enemy'>enemy-y-y</span> (Look, look)";
            break;
        case 52.4:
            lyricsP.innerHTML = "My <span id='enemy'>enemy-y-y-y</span> (Look, look, look)";
            break;
        case 53.2:
            lyricsP.innerHTML = "My <span id='enemy'>enemy-y-y-y-y</span> (Look, look, look, look)";
            break;

        /* (Look out for yourself) */
        case 53.6:
            lyricsP.classList.remove("text-13")
            lyricsP.classList.add("text-14");

            lyricsP.innerHTML = "(Look)";
            break;
        case 53.8:
            lyricsP.innerHTML = "(Look out)";
            break;
        case 54.1:
            lyricsP.innerHTML = "(Look out for)";
            break;
        case 54.3:
            lyricsP.innerHTML = "(Look out for yourself)";
            break;

        /* But I'm ready */
        case 55:
            lyricsP.classList.remove("text-14")
            lyricsP.classList.add("text-15");

            lyricsP.innerHTML = "But";
            break;
        case 55.5:
            lyricsP.innerHTML = "But I'm";
            break;
        case 56:
            lyricsP.innerHTML = "But I'm ready";
            break;

        /* Resets everything */
        case 56.9:
            lyricsP.classList.remove("text-15");
            lyricsP.innerHTML = "";
            music.pause();
            music.currentTime = 0;
            playingStatus = 0;
            break;
    }
}

playButton.addEventListener("click", playMusic)