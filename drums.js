var funcs = [];

function createfunc(i) {
    return function() {
        var sounds = document.getElementById("sd" + i);
        document.getElementById("bd" + i).addEventListener("click", function() {
            sounds.play();
        });
    }
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}
