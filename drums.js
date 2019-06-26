var funcs = [];
var sounds = [];

function createfunc(i) {
    return function() {
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

        var button = document.getElementById("bd" + i);
        sounds = [sound0, sound1, sound2, sound3, sound4, sound5, sound6,
                        sound7];

        button.addEventListener("click", () => sounds[i].play());
    }
}

for (var i = 0; i < 8; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 8; j++) {
    funcs[j]();
}

window.addEventListener("keydown", (event) => {
            var key = event.keyCode;
            switch (key) {
                case 81:
                    sounds[0].play();
                    break;
                case 87:
                    sounds[1].play();
                    break;
                case 69:
                    sounds[2].play();
                    break;
                case 82:
                    sounds[3].play();
                    break;
                case 84:
                    sounds[4].play();
                    break;
                case 85:
                    sounds[5].play();
                    break;
                case 89:
                    sounds[6].play();
                    break;
                case 73:
                    sounds[7].play();
            }
        });
