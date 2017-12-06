/*
 * Tiny example of object oriented design
 *
 */

var myBlock1;
var myBlock2;
var myBlock3;


function setup()
{
  createCanvas(640,480);
  myBlock1 = new Block();
  myBlock2 = new Block();
  myBlock3 = new Block();
} // setup()


function draw()
{
  background(200);
  myBlock1.draw();
  myBlock2.draw();
  myBlock3.draw();
} // draw()


function Block()
{
var x=random(500);
var y=random(400);
var w=5+random(100);
var h=5+random(100);
var blockColor=color(random(255),random(255),random(255));
 
  this.draw = function()
  {
    fill(blockColor);
    rect(x,y,w,h);
  }
} // Block{}

