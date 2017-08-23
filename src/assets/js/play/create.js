/**
 * Created by root on 16.08.17.
 */

function playCreate() {
    console.log('play state');



    game.time.advancedTiming = true;
    game.time.desiredFps = 30;

    game.world.setBounds(-200,0,worldX+200,gameY+200);

    game.physics.startSystem(Phaser.Physics.P2JS);

    /*
    background = game.add.sprite(100,100, 'backgroundImage');
    cropRect = new Phaser.Rectangle(378,0,64,64);
    background.crop(cropRect);
    */
    var scale = gameY / 480;

    for (var i=0; i< Math.floor((worldX / (960 * scale)))+1;i++ ){
        background = game.add.sprite(i * (960 * scale),0, 'backgroundImage');
        background.scale.setTo(scale,scale);
    }


    game.physics.p2.gravity.y = 1500;
    game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    game.physics.p2.world.setGlobalStiffness(1e5);

    //drawBackground();
    drawFire();
    drawTiles();
    drawCharacter();

    //game.camera.follow(character);

}