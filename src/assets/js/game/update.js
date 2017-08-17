/**
 * Created by root on 16.08.17.
 */
function update() {
    character.isWalking = false;


    if(cursors.left.isDown){
        character.direction = 'left';
        character.isWalking = true;
    }
    if(cursors.right.isDown){
        character.direction = 'right';
        character.isWalking = true;

    }

    if(cursors.down.isDown){
        character.direction = 'down';
        character.isWalking = true;
    }

    if(cursors.up.isDown){
        character.direction = 'up';
        character.isWalking = true;
    }


    character.update();

}