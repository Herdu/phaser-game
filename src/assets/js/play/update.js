/**
 * Created by root on 16.08.17.
 */
function playUpdate() {
    if (game.time.now > cameraMoveTimer){
        cameraMoveTImer = game.time.now + cameraSpeed;
        game.camera.x+= cameraStep;

        if (character.body.x < game.camera.x || character.body.y > gameY){
            game.state.start('lose');
        }
    }

    character.isWalking = false;
    character.body.velocity.x = 0;


    if(cursors.left.isDown){
        character.direction = 'left';
        character.isWalking = true;
    }
    if(cursors.right.isDown && character.body.x < (game.camera.x + gameX)){
        character.direction = 'right';
        character.isWalking = true;

    }

    if (spaceKey.isDown && game.time.now > jumpTimer && character.checkIfCanJump())
    {
        character.body.moveUp(1000);
        jumpTimer = game.time.now + 750;
    }
    if (enterKey.isDown){
        drawFireBreath(character.body.x, character.body.y);
    }


    if(game.time.now > fireTimer){
        fireTimer += 300;

        var x = game.camera.x + 100 + Math.random() * gameX;
        var y = gameY -  Math.random() * 100;

        var fire = game.add.sprite(x,y, 'fireImage');
        fire.animations.add('fire', [0,1,2,3,4]);
        fire.animations.play('fire', 5, false, true);

    }

    character.update();

}