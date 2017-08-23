/**
 * Created by root on 23.08.17.
 */


var loseState = {
    preload: function(){
        game.add.text(80,150,  "You've lost! Press enter to start again...",
            {
                font: '30px Courier', fill: '#ffffff'
            });
    },

    create: function(){
        console.log('lose state');
    },

    update: function(){
        if (enterKey.isDown){
            game.state.start('play');
        }
    }
}