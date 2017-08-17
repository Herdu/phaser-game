/**
 * Created by root on 16.08.17.
 */
function preload() {
    game.load.image('backgroundImage','assets/img/terrain/I_tpict1.png');
    game.load.image('treeImage', 'assets/img/terrain/Tree-sprites-standard-terrain.png');
    game.load.spritesheet('characterImage', 'assets/img/character.png', 50,50, 12);
    game.canvas.id = 'canvas';

}
