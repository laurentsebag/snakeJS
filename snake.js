class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class SnakeModel {
    constructor() {
        const body = [];

        body.push(new Point(0, 0));
        body.push(new Point(1, 0));

        this.body = body;
        this.growth = 0;
    }

    _moveTail() {
        if (this.growth > 0) {
            this.growth--;
        } else {
            this.body.shift();
        }
    }

    moveUp() {

    }

    moveDown() {
        const lastHead = this.body[this.body.length - 1];

        this._moveTail();
        this.body.push(new Point(lastHead.x, lastHead.y + 1));

        return this;
    }

    moveRight() {
        const lastHead = this.body[this.body.length - 1];

        this._moveTail();
        this.body.push(new Point(lastHead.x + 1, lastHead.y));

        return this;
    }

    moveLeft() {

    }

    grow() {
        this.growth++;
        return this;
    }

    getBody() {
        return this.body;
    }

    toString() {
        return this.body.map(function (item) {
            return `(${item.x}, ${item.y})`;
        });
    }
}

//var snake = new SnakeModel();
//
//console.log('snake1 ' + snake.toString());
//console.log('snake2 ' + snake.moveRight().toString());
//console.log('snake3 ' + snake.moveDown().toString());
//console.log('snake4 ' + snake.grow().toString());
//console.log('snake5 ' + snake.moveDown().toString());
