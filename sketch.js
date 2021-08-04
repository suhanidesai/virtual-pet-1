var dogimg
var dog
var foodcount
var database
function preload()
{
dogimg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
dog=createSprite(400,350,30,30) 
dog.addImage(dogimg)
dog.scale=0.5
var foodref = database.ref("foodcount");
foodref.on("value",function (data){
foodcount = data.val();
}
)
}
function draw() {  
background("green")
textSize(30)
stroke("black")
fill("black")
text("food count remaining is " + foodcount, 275,150)
if(keyDown("DOWN_ARROW")){
database.ref("/").update({
foodcount: foodcount-1
})
}
  drawSprites();
  //add styles here

}



