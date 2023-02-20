song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
newSong_1="";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(400, 150);
    video = createCapture(VIDEO);
    video.position(350,150)
    //video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('red');
    stroke('red');
    newSong_1= song1.isPlaying();
    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
    song1.stop();

    if(song2==false){
        song2.play()
    }
    else{
        document.getElementById("").innerHTML="song name:malang song"
    }
    }





}
function preload() {
    song1 = loadSound("hp.mp3");
    song2 = loadSound("malang.mp3");

}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);
        scoreLeftWrist = results[0].pose.keypoints[9].score
        scoreRightWrist = results[0].pose.keypoints[10].score
        console.log(scoreLeftWrist)

    }
}

function play() {
    song1.play();
    song.setVolume(1);
    song.rate(1);
}