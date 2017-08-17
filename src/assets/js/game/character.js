/**
 * Created by root on 16.08.17.
 */




function drawCharacter(){
    character = game.add.sprite(0,0, 'characterImage');
    character.animations.add('walkUp', [0,1,2]);
    character.animations.add('walkDown', [3,4,3,5]);
    character.animations.add('walkRight', [6,7,6,8]);
    character.animations.add('walkLeft', [9,10,9,11]);

    character.animations.add('stayUp', [0]);
    character.animations.add('stayDown', [3]);
    character.animations.add('stayRight', [6]);
    character.animations.add('stayLeft', [9]);

    character.animationSpeed = 5;
    character.walkingSpeed = 2;
    character.direction = 'down';
    character.isWalking = false;
    var scale = 2;

    character.scale.setTo(scale, scale);

    character.go = function(direction){
        switch(direction){
            case 'up':
                this.y -= this.walkingSpeed;
                this.animations.play('walkUp', this.animationSpeed, true);
                break;
            case 'down':
                this.y += this.walkingSpeed;
                this.animations.play('walkDown', this.animationSpeed, true);
                break;
            case 'right':
                this.x += this.walkingSpeed;
                this.animations.play('walkRight', this.animationSpeed, true);
                break;
            case 'left':
                this.x -= this.walkingSpeed;
                this.animations.play('walkLeft', this.animationSpeed, true);
                break;
        }
    };

    character.stay = function(direction) {
        switch(direction){
            case 'up':
                this.animations.play('stayUp', this.animationSpeed, true);
                break;
            case 'down':
                this.animations.play('stayDown', this.animationSpeed, true);
                break;
            case 'right':
                this.animations.play('stayRight', this.animationSpeed, true);
                break;
            case 'left':
                this.animations.play('stayLeft', this.animationSpeed, true);
                break;
        }
    };


    character.update = function(){
        if (this.isWalking){
            this.go(this.direction);
        }else{
            this.stay(this.direction);
        }

    }


}

