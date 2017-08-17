/**
 * Created by root on 16.08.17.
 */

function create() {
    cursors = game.input.keyboard.createCursorKeys();

    game.time.advancedTiming = true;
    game.time.desiredFps = 30;

    game.world.setBounds(0,0,3000,3000);


    background = game.add.sprite(100,100, 'backgroundImage');
    cropRect = new Phaser.Rectangle(378,0,64,64);
    background.crop(cropRect);

    drawBackground();
    drawCharacter();

    game.camera.follow(character);

}