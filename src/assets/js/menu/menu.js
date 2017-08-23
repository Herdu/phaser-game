/**
 * Created by root on 23.08.17.
 */


var menuState = {
    preload: function(){
        cursors = game.input.keyboard.createCursorKeys();
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);

        game.add.text(80,150,  'Press enter to start',
            {
               font: '30px Courier', fill: '#ffffff'
            });
    },

    create: function(){
        console.log('menu state');
    },

    update: function(){
        if (enterKey.isDown){
            game.state.start('play');
        }
    }
}