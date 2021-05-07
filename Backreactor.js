function preload() {
    sound = loadSound('data/Domingo_Flamingo.mp3');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT();
    sound.amp(0.2);
}

function draw() {
    background("#000000");
    noStroke();
    fill("#E5E9F3");
    var xpos = 0;
    var ypos = 0;
    var spectrum = fft.analyze();
    var dist = sqrt((width * height) / spectrum.length);
    var itemPerRow = round(width / dist);

    for (var i = 0; i < spectrum.length; i++) {
        xpos = i % itemPerRow;
        if (xpos == 0) {
            ypos += 1;
        }
        var x = dist * xpos + (dist / 2);
        var y = dist * ypos - (dist / 2);

        var size = map(spectrum[i], 0, mouseY, 1, dist * 1.8);

        ellipse(x, y, size);
    }

}

function togglePlay() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.loop();
    }
}
