/**
 * Created by root on 20.08.17.
 */


var drawFireBreath = function(x,y){
    console.log(x+" "+y);
    var fireBreath = game.add.sprite(x+10,y-225, 'fireBreathImage');
    fireBreath.animations.add('fireBreath', [0,1,2,3,4,5]);
    fireBreath.animations.play('fireBreath', 30, false,true);
};