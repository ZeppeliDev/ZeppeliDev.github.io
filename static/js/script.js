var canvas = document.getElementById("atomicCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

var atom = Atoms();
atom.RandomShape();

const SHAPES = {
  SQUARE: 0,
  TRIANGLE: 1,
  CIRCLE: 2,
  POLYGON: 4
}

class Atoms
{
  constructor()
  {

  }

  RandomShape()
  {
    //var shapeNum = Math.floor(Math.random() * 4);
    ctx.fillRect(0, 0, 150, 150);
    var shapeNum = 0;
    switch(shapeNum)
    {
      case SHAPES.SQUARE:
        ctx.fillRect(0, 0, 150, 150);
    }
  }
}