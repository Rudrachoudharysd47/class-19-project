var hunter , hunterImg
var dream , dreamImg
var dreambg , dreambgImg
var ground , groundImg


function preload(){

hunterImg = loadAnimation("hunter-removebg-preview.png","huunter-removebg-preview.png");
dreamImg = loadAnimation("dream-removebg-preview.png","dreammm-removebg-preview.png");
dreambgImg = loadImage("dream bg.jpg")
groundImg = loadImage("ground-removebg-preview.png")

}

function setup() {
 createCanvas(600,600)

ground = createSprite(50,300)
ground.addImage("ground",groundImg)
ground.X=ground.width /5;

dreambg = createSprite(300,300)
dreambg.addImage("dreambg",dreambgImg)
dreambg.X=dreambg.width /5;

hunter = createSprite(50,420)
hunter.addAnimation("hunter",hunterImg)
hunter.scale=0.3
hunter.velocityX=2.4

dream = createSprite(150,420)
dream.addAnimation("dream",dreamImg)
dream.scale=0.2
dream.velocityX=2.2


}

function draw() {
 background(0)
 drawSprites()

if (hunter.isTouching(dream)) {
    dream.destroy()
}

hunter.depth = dream.depth + 8;









}