/**
 * Created by root on 13.08.17.
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var car;
var cursors;
var speed = 5;


function preload() {
    game.load.image('carImage','assets/img/car.png');
    game.stage.backgroundColor = "#4488AA";
    game.canvas.id = 'canvas';
}

function create() {
    car = game.add.sprite(100,100, 'carImage');
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    if(cursors.left.isDown){
        car.x -=1*speed;
    }
    if(cursors.right.isDown){
        car.x +=1*speed;
    }
    if(cursors.down.isDown){
        car.y +=1*speed;
    }
    if(cursors.up.isDown){
        car.y -=1*speed;
    }
}