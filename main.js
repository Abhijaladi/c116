noseX=0
noseY=0



function preload() {
mustache=loadImage("https://i.postimg.cc/FFSCTVBZ/mustache.avif");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();


    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Id Intialized')
    //
}
function draw () {
    image(video, 0, 0, 300, 300);

    /*fill(255,0,0);
stroke(255,0,0);
circle(mustacheX,mustacheY,20);*/
image(mustache,noseX-15,noseY-15,40,40);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses (results) {
    if(results.length>0)
        {
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("mustache x =" + noseX);
        console.log("mustache y =" + noseY);
        console.log(results);
    }
}