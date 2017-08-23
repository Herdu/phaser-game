/**
 * Created by root on 23.08.17.
 */

var loadState = {
    preload: function(){
        game.load.image('fireTileImage', 'assets/img/terrain/lava.png');
        game.load.image('blockImage', 'assets/img/terrain/block32.png');
        //game.load.image('backgroundImage', 'assets/img/full-bg.png');
        game.load.image('backgroundImage', 'assets/img/terrain/mines_BG.png');
        //game.load.image('backgroundImage','assets/img/terrain/I_tpict1.png');
        game.load.image('treeImage', 'assets/img/terrain/Tree-sprites-standard-terrain.png');
        game.load.spritesheet('characterImage', 'assets/img/character.png', 50,50, 12);
        game.load.spritesheet('fireImage','assets/img/terrain/NewerCampFire.png',64,64,5);
        game.load.spritesheet('fireBreathImage', 'assets/img/fireBreath.png',640,400, 6);
        game.canvas.id = 'canvas';
    },

    create: function(){
        console.log('load state');




        game.state.start('menu');
    }
}