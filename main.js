img = "";

function preload(){
    img = loadImage('class.avif');
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
}

function draw(){
    image(img,0,0,640,480);
    fill("#126e0d");
    text("Board",130,75);
    noFill();
    stroke("#126e0d");
    rect(120,50,390,230);
} 