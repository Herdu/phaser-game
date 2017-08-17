/**
 * Created by root on 16.08.17.
 */

function sortXY(a,b){
    var keyA = a.y,
        keyB = b.y;
    // Compare the 2 dates
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
}

var scale = 3;

function drawBackground(){
    var res = 64; //px
    var numX = Math.floor(worldX/res) + 1;
    var numY = Math.floor(worldY/res) + 1;

    for(var i=0; i<numX; i++){
        for(var j=0; j<numY; j++){
            background = game.add.sprite(i*res,j*res, 'backgroundImage');
            cropRect = new Phaser.Rectangle(378,0,64,64);
            background.crop(cropRect);
        }
    }

    var spot = [];
    var numberOfSpots = 35;

    for(var i=0; i<numberOfSpots; i++){
        var x = Math.random()*worldX - 128;
        var y = Math.random()*worldY - 128;
        spot.push({x: x, y: y});
    }

    spot.sort(sortXY);

    spot.forEach((item)=>{
        background = game.add.sprite(item.x,item.y, 'backgroundImage');
        cropRect = new Phaser.Rectangle(592,67,138,138);
        background.crop(cropRect);
        background.scale.setTo(scale,scale);
    });


    //trees
    /*
    spot = [];
    numberOfSpots = 8;

    for(var i=0; i<numberOfSpots; i++){
        var x = Math.random()*gameX - 128;
        var y = Math.random()*gameY - 128;
        spot.push({x: x, y: y});
    }
    spot.sort(sortXY);

    spot.forEach((item)=>{
        tree = game.add.sprite(item.x,item.y, 'treeImage');
    tree.scale.setTo(scale,scale);
    cropRect = new Phaser.Rectangle(200,0,70,90);
    tree.crop(cropRect);

    });*/

}