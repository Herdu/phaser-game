/**
 * Created by root on 16.08.17.
 */


var drawBlock = function(posX, posY, length){
    var tile = game.add.sprite(posX, posY, 'blockImage');
    cropRect = new Phaser.Rectangle(0,0, 32*length, 32);
    tile.crop(cropRect);
    game.physics.p2.enable(tile);
    tile.body.static = true;


};


var drawTiles = function(){
    drawBlock(300,300,10);
    drawBlock(850,400,3);
    drawBlock(1150, 400, 1);
    drawBlock(1400, 300, 1);
    drawBlock(1500, 300, 2);
    drawBlock(2000, 250, 8);
    drawBlock(2400, 250, 4);
    drawBlock(2800, 300, 2);
    drawBlock(3100, 200, 3);
    drawBlock(3400, 250, 10);
    drawBlock(3800, 200, 10);
}


var drawFire = function(){

    var i=0;
    while(i<worldX){
        game.add.sprite(i,gameY - 70, 'fireTileImage');
        i+=99;
    }

}


