window.onload = () => {
    cnv = document.querySelector("#canvas");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");
    setup();
    setInterval(draw, 1000 / 40);
}

let flowers = new Array();
let num_of_flowers = 10;

function setup() {
    for (let i = 0; i < num_of_flowers; i++) {
        let cx = Math.floor(Math.random() * cnv.width);
        let cy = Math.floor(Math.random() * cnv.height);
        let r = Math.floor(Math.random() * 100 + 10);
        let n = Math.ceil(Math.random() * 10 + 10);
        flower = new Flower(cx, cy, r, i, n);
        flowers.push(flower);
    }
}

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (let i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].update();
    }
}