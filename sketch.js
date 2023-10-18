let s0 = "You might think you've peeped the scene,";
let s1 = "You haven't, the real one's far too mean.";
let s2 = "The watered down one, the one you know,";
let s3 =  "Was made up centuries ago.";
let s4 = "They made it sound all wack and corny.";
let s5 = "Yes, it's awful, blasted boring!";
let s6 = "Twisted fictions, sick addiction,";
let s7 = "Well, gather 'round, children, zip it, listen!";

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255, 0, 0);
  line1();
  line2();
  line3();
  line4();
  line5();
  line6();
  line7();
  line8();
}

function line1() {
  push();
  rotate(PI/3);
  text(s0, 150, 50);
  pop();
}

function line2() {
  push();
  rotate(PI/1.5);
  text(s1, 10, -300);
  pop();

}

  function line3() {
    push();
  rotate(PI/2);
  text(s2, 350, -145);
  pop();

}

function line4() {
  push();
rotate();
text(s3, 420, 200);
pop();

}

function line5() {
  push();
rotate(PI/2);
text(s4, 200, -400);
pop();

}

function line6() {
  push();
rotate(PI/2);
text(s5, 415, -400);
pop();

}

function line7() {
  push();
rotate();
text(s6, 420, 375);
pop();
}

function line8() {
  push();
rotate();
text(s7, 420, 575);
pop();

}