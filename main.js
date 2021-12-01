img = "";
status1 = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("#0000FF");
    text("Dog", 45, 75);
    noFill();
    stroke("#0000FF");
    rect(30, 60, 450, 350);

    fill("#0000FF");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
    
}