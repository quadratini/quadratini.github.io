var funcs = [];
var sounds = [];

        var sound0 = new Howl({
            src: ['audio/hihat.wav']
        });
        var sound1 = new Howl({
            src: ['audio/drum2.wav']
        });
        var sound2 = new Howl({
            src: ['audio/drum3.wav']
        });
        var sound3 = new Howl({
            src: ['audio/bass.wav']
        });
        var sound4 = new Howl({
            src: ['audio/cymbal.wav']
        });
        var sound5 = new Howl({
            src: ['audio/cymbal2.wav']
        });
        var sound6 = new Howl({
            src: ['audio/tom1.wav']
        });
        var sound7 = new Howl({
            src: ['audio/realtom1.wav']
        });
        var sound8 = new Howl({
            src: ['audio/realtom2.wav']
        });
        var sound9 = new Howl({
            src: ['audio/realtom3.wav']
        });
        var sound10 = new Howl({
            src: ['audio/realtom4.wav']
        });
        var sound11 = new Howl({
            src: ['audio/rim.wav']
        });

function createfunc(i) {
    return function() {

        var button = document.getElementById("bd" + i);
        sounds = [sound0, sound1, sound2, sound3, sound4, sound5, sound6,
                        sound7, sound8, sound9, sound10, sound11];

        button.addEventListener("click", () => {
            sounds[i].play(); 
        });
    }
}

for (var i = 0; i < 12; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 12; j++) {
    funcs[j]();
}

onkeyup = function (e) {
    for (var i = 0; i < 12; i++) {
        document.getElementById('bd' + i).classList.remove("button-active");
    }
}


function unleash() {
    var x = document.getElementById('bd0');
    x.classList.remove("button-active");
}


var buttons = document.getElementsByTagName("button");
window.addEventListener("keydown", () => {
    var key = event.keyCode;

    switch (key) {
        case 81:
            sounds[0].play();
            buttons[0].classList.add("button-active");
            break;
        case 87:
            sounds[1].play();
            buttons[1].classList.add("button-active");
            break;
        case 69:
            sounds[2].play();
            buttons[2].classList.add("button-active");
            break;
        case 73:
            sounds[3].play();
            buttons[3].classList.add("button-active");
            break;
        case 79:
            sounds[4].play();
            buttons[4].classList.add("button-active");
            break;
        case 80:
            sounds[5].play();
            buttons[5].classList.add("button-active");
            break;
        case 65:
            sounds[6].play();
            buttons[6].classList.add("button-active");
            break;
        case 83:
            sounds[7].play();
            buttons[7].classList.add("button-active");
            break;
        case 68:
            sounds[8].play();
            buttons[8].classList.add("button-active");
            break;
        case 74:
            sounds[9].play();
            buttons[9].classList.add("button-active");
            break;
        case 75:
            buttons[10].classList.add("button-active");
            sounds[10].play();
            break;
        case 76:
            sounds[11].play();
            buttons[11].classList.add("button-active");
            break;
    }
});
buttons[0].addEventListener("keyup", function (e) {
    buttons[0].classList.remove("button-active");
});

