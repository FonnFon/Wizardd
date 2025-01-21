var wizard, wizardWalk;
var fundoImg;


function preload() {

    fundoImg = loadImage("fundo.jpg");
    /*wizardWalk = loadAnimation("wizard_sprite_1.png",
    "wizard_sprite_2.png")*/
}

function setup() {
    createCanvas(1600, 682);
    /*wizard = createSprite(50, 50);
    wizard.addAnimation("walking", wizardWalk)  
    wizard.velocityX = 5;
    wizard.velocityY = 5*/
}

function draw() {
    background(fundoImg);


    /*if(keyDown("d")) {
        wizard.velocityX = velocityX + 5
    }

    if(keyDown("a")) {
        wizard.velocityY = velocityX - 5
    }*/
    drawSprites();
}
