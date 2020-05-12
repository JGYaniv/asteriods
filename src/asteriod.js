const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const curelean = "#2a52be"
const lebowskiPantone = ["#e6b080", "#a68200", "43351F", "#e36b4d", "#4d263b", "#2a52be"]
const radii = [4,4,4,5,5,5,5,5,10,10,10,15,20,30]
function Asteriod(options) {
    this.COLOR = Util.pickRandom(lebowskiPantone);
    this.RADIUS = Util.pickRandom(radii);

    MovingObject.call(this, {
        color: this.COLOR,
        radius: this.RADIUS,
        pos: options.pos,
        vel: options.vel
    });
}

Util.inherits(Asteriod, MovingObject);

module.exports = Asteriod;