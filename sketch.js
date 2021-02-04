var canvas;
var music;
var surface1, surface2, surface3, surface4, box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(695,580,170,30);
    surface2 = createSprite(490,580,170,30);
    surface3 = createSprite(295,580,170,30);
    surface4 = createSprite(95,580,170,30);

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,25,25);
    box.shapeColor = ("white");
    box.velocityY = 7;
    box.velocityX = 6;

    surface1.shapeColor = "red";
    surface2.shapeColor = "green";
    surface3.shapeColor = "blue";
    surface4.shapeColor = "yellow";

}

function draw() {
    background(0);

    //create edgeSprite
    edges = createEdgeSprites();


    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.shapeColor = "red";
        music.play();
    }
    if(box.isTouching(surface2)){
        box.shapeColor = "green";
    }
    if(box.isTouching(surface3)){
        box.shapeColor = "blue";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    if(box.isTouching(surface4)){
        box.shapeColor = "yellow";
    }

    drawSprites();
}
