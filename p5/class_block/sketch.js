/*
 * Tiny example of object oriented design
 *
 */

var myBlock;


function setup()
{
  createCanvas(640,480);
  myBlock = new Block();
} // setup()


function draw()
{
  background(200);
  myBlock.draw();
} // draw()


function Block()
{
var x=random(500);
var y=random(500);
var w=5+random(100);
var h=5+random(100);
var blockColor=color(random(255),random(255),random(255));
 
  this.draw = function()
  {
    fill(blockColor);
    rect(x,y,w,h);
  }
} // Block{}

