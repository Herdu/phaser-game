/**
 * Created by root on 23.08.17.
 */


var bootState = {
    create: function() {
        console.log('boot state');
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.state.start('load');
    }
}