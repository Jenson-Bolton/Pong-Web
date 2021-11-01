// initialise canvas
var c = document.querySelector('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext('2d');

class Object2D {
    constructor(width, height, posX, posY, color) {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }

    clear() {
        ctx.clearRect()
    }

    draw(x, y) {
        ctx.fillStyle(this.color);
        ctx.fillRect(x, y, )
    }

    moveXY(x, y) {

    }

    moveUp(step) {

    }
}

class Paddle extends Object2D {

}