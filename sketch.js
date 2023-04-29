var fr,mr;
function setup() {
  createCanvas(1200,800);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(400,400,39,50)
  fr.shapeColor="blue"
  mr.shapeColor="blue"
  fr.debug=true
  mr.debug=true
  fr.velocityY=2
  mr.velocityY=-2
}

function draw() {
  background(20,68,60);  
  drawSprites();


if (mr.x-fr.x<mr.width/2+fr.width/2
&& fr.x-mr.x<mr.width/2+fr.width/2)
{

  fr.velocityX=fr.velocityX*-1;
  mr.velocityX=mr.velocityX*-1;
}

if (mr.y-fr.y<mr.height/2+fr.height/2
&& fr.y-mr.y<mr.height/2+fr.height/2)
{

  fr.velocityY=fr.velocityY*-1;
  mr.velocityY=mr.velocityY*-1;
}

}