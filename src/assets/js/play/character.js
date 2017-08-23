/**
 * Created by root on 16.08.17.
 */




function drawCharacter(){
    character = game.add.sprite(200,50, 'characterImage');
    character.animations.add('walkUp', [0,1,2]);
    character.animations.add('walkDown', [3,4,3,5]);
    character.animations.add('walkRight', [6,7,6,8]);
    character.animations.add('walkLeft', [9,10,9,11]);

    character.animations.add('stayUp', [0]);
    character.animations.add('stayDown', [3]);
    character.animations.add('stayRight', [6]);
    character.animations.add('stayLeft', [9]);

    character.animationSpeed = 5;
    character.moveSpeed = 300;
    character.direction = 'down';
    character.isWalking = false;
    var scale = 2;

    game.physics.p2.enable(character);
    character.body.fixedRotation = true;
    character.body.damping = 0.5;


    character.scale.setTo(scale, scale);

    character.go = function(direction){
        switch(direction){
            case 'right':
                this.body.moveRight(this.moveSpeed);
                this.animations.play('walkRight', this.animationSpeed, true);
                 break;
            case 'left':
                this.body.moveLeft(this.moveSpeed);
                this.animations.play('walkLeft', this.animationSpeed, true);
                break;
        }
    };

    character.stay = function(direction) {
        switch(direction){
            case 'right':
                this.animations.play('stayRight', this.animationSpeed, true);
                break;
            case 'left':
                this.animations.play('stayLeft', this.animationSpeed, true);
                break;
        }
    };


    character.update = function(){
        //this.body.setZeroVelocity();

        if (this.isWalking){
            this.go(this.direction);
        }else{
            this.stay(this.direction);
        }

    }

     character.checkIfCanJump = function() {

        var result = false;

        for (var i=0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++)
        {
            var c = game.physics.p2.world.narrowphase.contactEquations[i];

            if (c.bodyA === character.body.data || c.bodyB === character.body.data)
            {
                var d = p2.vec2.dot(c.normalA, yAxis);

                if (c.bodyA === character.body.data)
                {
                    d *= -1;
                }

                if (d > 0.5)
                {
                    result = true;
                }
            }
        }

        return result;

    }


}

