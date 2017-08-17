/**
 * Created by root on 13.08.17.
 */

var gameX = 800;
var gameY = 600;

var worldX = 3000;
var worldY = 3000;

var game = new Phaser.Game(gameX, gameY, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var cursors;

var character;




