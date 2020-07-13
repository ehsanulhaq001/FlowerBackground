function Flower(cx, cy, r, i, n) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.time = 0;

    this.vr = 0;
    this.ar = Math.random() / 5;

    this.vx = Math.floor(Math.random() * 10 - 5);
    this.vy = Math.floor(Math.random() * 10 - 5);

    this.show = function() {
        this.red = 20 + 200 * Math.abs(Math.sin(i * this.time * Math.PI / 180 + 0));
        this.green = 20 + 200 * Math.abs(Math.sin(i * this.time * Math.PI / 180 + Math.PI * 2 / 3));
        this.blue = 20 + 200 * Math.abs(Math.sin(i * this.time * Math.PI / 180 + Math.PI * 4 / 3));
        this.color = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";

        for (let i = 0; i < n; i++) {
            let x = this.cx + this.r * Math.cos((i * 360 / n + this.time) * Math.PI / 180); //this.time included for rotation
            let y = this.cy + this.r * Math.sin((i * 360 / n + this.time) * Math.PI / 180);

            ctx.beginPath();
            ctx.arc(x, y, this.r, 0, 2 * Math.PI, true);
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }
    }
    this.update = function() {

        //update the radius of flower
        this.vr += -this.ar;
        this.r += this.vr;
        if (this.r < r / 2) {
            this.vr = -this.vr;
            this.r = r / 2;
        }

        //update the center coordinates of flower
        this.cx += this.vx;
        this.cy += this.vy;
        if (this.cx < 0 || this.cx > cnv.width) {
            this.vx = -this.vx;
        }
        if (this.cy < 0 || this.cy > cnv.height) {
            this.vy = -this.vy;
        }

        this.time++;
    }
}