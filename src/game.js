const Asteriod = require("./asteriod.js")
const Util = require("./utils.js");

function Game(){
    this.DIM_X = 1000;
    this.DIM_Y = 500;
    this.NUM_ASTERIODS = 100;
    this.asteriods = [];
}


Game.prototype.addAsteriods = function(ctx){
    // debugger
    this.draw(ctx);

    for (let i=0; i<this.NUM_ASTERIODS; i++){
        const asteriod = new Asteriod({
            pos: this.randomPosition(),
            vel: Util.randomVec(10)
        });

        this.asteriods.push(asteriod);
        console.log(asteriod);
        asteriod.move(this)
        asteriod.draw(ctx);
    }
}

Game.prototype.moveObjects = function (ctx) {
    this.draw(ctx);
    console.log("moving")
    this.asteriods.forEach((asteriod) => {
        asteriod.move(this);
    })

}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteriods.forEach(function(asteriod) {
        asteriod.draw(ctx);
    })
};

Game.prototype.randomPosition = function(){
    return [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)]
};

Game.prototype.wrap = function(pos){
    // console.log([pos[0] % this.DIM_X, pos[1] % this.DIM_Y])
    return [Math.abs(pos[0] % this.DIM_X), Math.abs(pos[1] % this.DIM_Y)]
}

Game.prototype.checkCollisions = function(){
    for(let i=0; i<this.asteriods.length; i++){
        for(let j=i+1; j<this.asteriods.length; j++){
            // debugger
            let ast1 = this.asteriods[i];
            let ast2 = this.asteriods[j];
            if (ast1.isCollidedWith(ast2)){
                let newVel1 = [ast1.vel[0] * -1, ast1.vel[1] * -1];
                let newVel2 = [ast2.vel[0] * -1, ast2.vel[1] * -1];
                ast1.vel = newVel1
                ast2.vel = newVel2
            }
        }
    }
}

Game.prototype.step = function(ctx){
    this.moveObjects(ctx);
    this.checkCollisions();
}

module.exports = Game;