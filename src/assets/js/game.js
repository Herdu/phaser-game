/**
 * Created by root on 23.08.17.
 */








var game = new Phaser.Game(gameX, gameY, Phaser.AUTO, '');


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('lose', loseState);


game.state.start('boot');