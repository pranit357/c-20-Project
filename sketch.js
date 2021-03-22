var mouse, mouseImage1, mouseImage2;
var cat, catImage1, catImage2;
var backdroundImage;



function preload() 
{
    backgroundImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    mouseImage1 = loadAnimation("images/mouse2.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImage2 = loadAnimation("images/mouse3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage3 = loadAnimation("images/mouse1.png");
}

function setup()
{
    createCanvas(1300,800);

    cat= createSprite(1100,700,10,10);
    cat.addAnimation("cat",catImage1);
    cat.scale = 0.1;

    mouse = createSprite(200,700,10,10);
    mouse.addAnimation("mouse",mouseImage1);
    mouse.scale = 0.1;
}

function draw() 
{
    background(backgroundImage);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2+80)
    {
        cat.velocityX = 0;

        cat.addAnimation("catHappy",catImage3);
        cat.changeAnimation("catHappy");

        mouse.addAnimation("mouseHappy",mouseImage3);
        mouse.changeAnimation("mouseHappy");
    }

    drawSprites();
}


function keyPressed()
{
    if(keyCode === RIGHT_ARROW)
    {
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("catRunning");
        
    }

    if(keyCode === LEFT_ARROW)
    {
        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.changeAnimation("mouseTeasing");
    }
}
