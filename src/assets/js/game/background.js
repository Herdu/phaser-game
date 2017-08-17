/**
 * Created by root on 16.08.17.
 */


function drawBackground(){
    var res = 64; //px
    var numX = Math.floor(gameX/res) + 1;
    var numY = Math.floor(gameY/res) + 1;

    for(var i=0; i<numX; i++){
        for(var j=0; j<numY; j++){
            background = game.add.sprite(i*res,j*res, 'backgroundImage');
            cropRect = new Phaser.Rectangle(378,0,64,64);
            background.crop(cropRect);
        }
    }

    var spot = [
        {x: 50, y: 50},
        {x: 70, y: 120},
        {x: 0, y: 450},
        {x: 250, y: 250},
        {x: 250, y: 250},
    ];

    spot.forEach((item)=>{
        background = game.add.sprite(item.x,item.y, 'backgroundImage');
        cropRect = new Phaser.Rectangle(592,67,138,138);
        background.crop(cropRect);
    });




}