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
            src: ['audio/cymbal3.wav']
        });
        var sound7 = new Howl({
            src: ['audio/tom1.wav']
        });
        var sound8 = new Howl({
            src: ['audio/realtom1.wav']
        });
        var sound9 = new Howl({
            src: ['audio/realtom2.wav']
        });
        var sound10 = new Howl({
            src: ['audio/realtom3.wav']
        });
        var sound11 = new Howl({
            src: ['audio/realtom4.wav']
        });
        var sound12 = new Howl({
            src: ['audio/rim.wav']
        });

function createfunc(i) {
    return function() {

        var button = document.getElementById("bd" + i);
        sounds = [sound0, sound1, sound2, sound3, sound4, sound5, sound6,
                        sound7, sound8, sound9, sound10, sound11, sound12,
                        ];

        button.addEventListener("click", () => {
            sounds[i].play(); 
        });
    }
}

for (var i = 0; i < 13; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 13; j++) {
    funcs[j]();
}

onkeyup = function (e) {
    document.getElementById('bd0').classList.remove("button-active");
    document.getElementById('bd1').classList.remove("button-active");
    document.getElementById('bd2').classList.remove("button-active");
    document.getElementById('bd3').classList.remove("button-active");
    document.getElementById('bd4').classList.remove("button-active");
    document.getElementById('bd5').classList.remove("button-active");
    document.getElementById('bd6').classList.remove("button-active");
    document.getElementById('bd7').classList.remove("button-active");
    document.getElementById('bd8').classList.remove("button-active");
    document.getElementById('bd9').classList.remove("button-active");
    document.getElementById('bd10').classList.remove("button-active");
    document.getElementById('bd11').classList.remove("button-active");
    document.getElementById('bd12').classList.remove("button-active");
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
        case 82:
            sounds[3].play();
            buttons[3].classList.add("button-active");
            break;
        case 84:
            sounds[4].play();
            buttons[4].classList.add("button-active");
            break;
        case 89:
            sounds[5].play();
            buttons[5].classList.add("button-active");
            break;
        case 85:
            sounds[6].play();
            buttons[6].classList.add("button-active");
            break;
        case 73:
            sounds[7].play();
            buttons[7].classList.add("button-active");
            break;
        case 65:
            sounds[8].play();
            buttons[8].classList.add("button-active");
            break;
        case 83:
            sounds[9].play();
            buttons[9].classList.add("button-active");
            break;
        case 68:
            buttons[10].classList.add("button-active");
            sounds[10].play();
            break;
        case 70:
            sounds[11].play();
            buttons[11].classList.add("button-active");
            break;
        case 71:
            sounds[12].play();
            buttons[12].classList.add("button-active");
    }
});
buttons[0].addEventListener("keyup", function (e) {
    buttons[0].classList.remove("button-active");
});

