var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1db8aaa9-04bd-43b7-a968-b67b64481c3b","7756880a-f1d7-4862-a55d-536ac98bec1e","d0a9ed9c-26b9-4ec1-a286-f20123654c64","3edc2d30-f8ff-4f59-87e6-5a49a49e6df9","c8c253dd-0163-443b-8512-f0e9e377fc7a","783aff6f-d51c-4b21-bd9b-8017fd2c11ac","115140a2-8e39-47d4-a0b8-b4faf8344ea2","bdbb1351-d92b-45a8-8f74-1e14b24daccd","4c0a1146-b905-4784-bddc-99a8f4954d48","28242749-fa8d-43f5-b2e6-a096878ac711","95816e75-1fb9-4c2f-81c7-8100ffe657b2","12c9bbc1-a06b-42e1-9f8c-44cf391fcb97","04fc7e27-820f-4b8f-a7a3-60d4505cb7ba","87d664bf-9657-4bac-bb48-cec4d767eae9","6afad232-6f12-4db8-a1b9-c58d7578b865"],"propsByKey":{"1db8aaa9-04bd-43b7-a968-b67b64481c3b":{"name":"bg1.png","sourceUrl":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/1db8aaa9-04bd-43b7-a968-b67b64481c3b.png","frameSize":{"x":402,"y":403},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z5yS9lrvfCAyktPRlgQTxzDq42ORlGU6","loadedFromSource":true,"saved":true,"sourceSize":{"x":402,"y":403},"rootRelativePath":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/1db8aaa9-04bd-43b7-a968-b67b64481c3b.png"},"7756880a-f1d7-4862-a55d-536ac98bec1e":{"name":"bg2.png","sourceUrl":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/7756880a-f1d7-4862-a55d-536ac98bec1e.png","frameSize":{"x":402,"y":402},"frameCount":1,"looping":true,"frameDelay":4,"version":"T0usR9pk1e_.RWhIh7bJIChGSstkSYaF","loadedFromSource":true,"saved":true,"sourceSize":{"x":402,"y":402},"rootRelativePath":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/7756880a-f1d7-4862-a55d-536ac98bec1e.png"},"d0a9ed9c-26b9-4ec1-a286-f20123654c64":{"name":"rover1.png","sourceUrl":null,"frameSize":{"x":103,"y":75},"frameCount":3,"looping":true,"frameDelay":12,"version":"nurEqNpZzICUsv_vlXYkxdgEf03LLQwK","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":225},"rootRelativePath":"assets/d0a9ed9c-26b9-4ec1-a286-f20123654c64.png"},"3edc2d30-f8ff-4f59-87e6-5a49a49e6df9":{"name":"rover2.png","sourceUrl":null,"frameSize":{"x":84,"y":87},"frameCount":3,"looping":true,"frameDelay":12,"version":"a9aolbQ5xtI3aA2L0eFiZu.jVfscVGBA","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":174},"rootRelativePath":"assets/3edc2d30-f8ff-4f59-87e6-5a49a49e6df9.png"},"c8c253dd-0163-443b-8512-f0e9e377fc7a":{"name":"rover3.png","sourceUrl":null,"frameSize":{"x":113,"y":102},"frameCount":3,"looping":true,"frameDelay":12,"version":"bfYc6mFRhxVE1UJBYPNIa9pZ9LFNRMy2","loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":204},"rootRelativePath":"assets/c8c253dd-0163-443b-8512-f0e9e377fc7a.png"},"783aff6f-d51c-4b21-bd9b-8017fd2c11ac":{"name":"rover4.png","sourceUrl":null,"frameSize":{"x":145,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":".nGX184PqaguKpAT_jHwyIqt1eJ2dnqM","loadedFromSource":true,"saved":true,"sourceSize":{"x":145,"y":150},"rootRelativePath":"assets/783aff6f-d51c-4b21-bd9b-8017fd2c11ac.png"},"115140a2-8e39-47d4-a0b8-b4faf8344ea2":{"name":"image_2021-07-11_191255.png_1","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/115140a2-8e39-47d4-a0b8-b4faf8344ea2.png","frameSize":{"x":69,"y":93},"frameCount":1,"looping":true,"frameDelay":4,"version":"sDqUeHx69sTHEn4caIQtOp.OqHmY6XzU","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":93},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/115140a2-8e39-47d4-a0b8-b4faf8344ea2.png"},"bdbb1351-d92b-45a8-8f74-1e14b24daccd":{"name":"rocket","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/bdbb1351-d92b-45a8-8f74-1e14b24daccd.png","frameSize":{"x":52,"y":82},"frameCount":1,"looping":true,"frameDelay":4,"version":"TWMwKRStJpeNBi37qz9eQZMKVPaCTQOV","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":82},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/bdbb1351-d92b-45a8-8f74-1e14b24daccd.png"},"4c0a1146-b905-4784-bddc-99a8f4954d48":{"name":"image-removebg-preview (5).png_1","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/4c0a1146-b905-4784-bddc-99a8f4954d48.png","frameSize":{"x":220,"y":356},"frameCount":1,"looping":true,"frameDelay":4,"version":"1kI1cn9KskxaCRhe3DJnQykJT1VMAuhe","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":356},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/4c0a1146-b905-4784-bddc-99a8f4954d48.png"},"28242749-fa8d-43f5-b2e6-a096878ac711":{"name":"best","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/28242749-fa8d-43f5-b2e6-a096878ac711.png","frameSize":{"x":220,"y":356},"frameCount":1,"looping":true,"frameDelay":4,"version":"1OZyT1lxbmyHu4MlXQR.EEq9aucly6Us","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":356},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/28242749-fa8d-43f5-b2e6-a096878ac711.png"},"95816e75-1fb9-4c2f-81c7-8100ffe657b2":{"name":"best1","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/95816e75-1fb9-4c2f-81c7-8100ffe657b2.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"sGS3WYliKQp9dnCvvk0AdMuAIor64kak","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/95816e75-1fb9-4c2f-81c7-8100ffe657b2.png"},"12c9bbc1-a06b-42e1-9f8c-44cf391fcb97":{"name":"best2","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/12c9bbc1-a06b-42e1-9f8c-44cf391fcb97.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"_d2xHrK6TMVCsCdWXNhsOFDYn1fVoTJX","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/12c9bbc1-a06b-42e1-9f8c-44cf391fcb97.png"},"04fc7e27-820f-4b8f-a7a3-60d4505cb7ba":{"name":"best3","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/04fc7e27-820f-4b8f-a7a3-60d4505cb7ba.png","frameSize":{"x":492,"y":507},"frameCount":1,"looping":true,"frameDelay":4,"version":"MBPUK_zYd1jd38y9eMfMI7ZWbj_xDsJz","loadedFromSource":true,"saved":true,"sourceSize":{"x":492,"y":507},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/04fc7e27-820f-4b8f-a7a3-60d4505cb7ba.png"},"87d664bf-9657-4bac-bb48-cec4d767eae9":{"name":"best4","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/87d664bf-9657-4bac-bb48-cec4d767eae9.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"_jjbi7zLhlGfq9AtEpGMRaoBlH6wNv2d","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/87d664bf-9657-4bac-bb48-cec4d767eae9.png"},"6afad232-6f12-4db8-a1b9-c58d7578b865":{"name":"best5","sourceUrl":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/6afad232-6f12-4db8-a1b9-c58d7578b865.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"O5MOvtCAvd4Yk81IT.m6nnLFm0BmnorD","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/oesy4tEF2LlYNb0YdW0eZYS4NdsVy03bNOE-K_c3K7k/6afad232-6f12-4db8-a1b9-c58d7578b865.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Mission: You are on the MISSION MARS. Make your Signature by creating trace using your ROVER  //

//Create a sprite for the background and adding image
var bg= createSprite(200,200,10,10);
bg.setAnimation("bg1.png");



//Create a rover to make traces and adding image to the rover.
var rover = createSprite(200,200,10,10);
rover.setAnimation("rover3.png");
rover.scale=0.75;

var rocket = createSprite(308,190);
rocket.setAnimation("best5");
rocket.scale = 0.3;
rocket.visible = false;


//other variables
var lines = [];
var timeCalled = 0;
var penDown = true;


//Adding color to the trace created using the rover 
stroke(rgb(61,43,31));
strokeWeight(10);



function draw() {
  background("white");
  
  drawSprites();
  
  
  //To display the trace you created using your rover. 
  for(var x = 0; x < lines.length; x++){
    line(lines[x][0], lines[x][1],
         lines[x][2], lines[x][3]);
  }
}



//       *******     sample code for reference      ********//

// SYNTAX : functionname (input)
// forward function moves front with the distance given as input. eg: forward(20) will move front by 20 steps.
// backward function moves backward with the distance given as input. eg: backward(20) will move backward by 20 steps.
// turnRight function rotates in clockwise with a certain degree . eg: turnRight(20) will rotate right side by 20 degrees.
// turnLeft function rotates in anti-clockwise with a certain degree . eg: turnLeft(20) will rotate left side by 20 degrees.
// lift up function will not make traces on the Mars.
//lift down will not make traces on the Mars.




//       *******     sample code for reference      ********//

// ROVER INSTRUCTIONS TO MARK YOUR TRACE -- START //

// enter your code here!

liftUp();
backward(150);
turnLeft(90);
forward(150);
liftDown();
turnRight(90);
forward(50);
backward(25);
turnRight(90);
forward(75);
turnRight(90);
forward(25);
backward(50);
liftUp();
turnRight(180);
forward(150);
liftDown();
turnLeft(135);
forward(85);
turnRight(90);
forward(45);
turnRight(90);
forward(45);
turnLeft(90);
forward(40);
turnRight(90);
forward(40);
turnRight(90);
forward(80);
liftUp();
forward(275);
turnRight(135);
backward(25);
forward(50);
liftDown();
turnRight(155);
forward1(100);
turnLeft(130);
forward(100);
turnRight(135);
forward(100);
turnLeft(130);
forward1(180);
liftUp();
turnRight(135);
forward(120);
turnRight(220);
turnLeft(25);



















// ROVER INSTRUCTIONS TO MARK YOUR TRACE -- END //


//Function to control the steps and directions of the rover. 
//rover.rotation is used for rotating the rover in a particular angle.
//x1 - start position in x direction
//y1- start position in y direction
//x2 -  position in x direction after travelling a certain distance
//y2 - position in y direction after travelling a certain distance
//one degree is equivalent to pi/180 radians. 
//Math.cos(),Math.sin() method returns a numeric value between -1 and 1.

function move(angle,distance){
  timeCalled +=1;
  setTimeout(function(){
    rover.rotation = rover.rotation + angle;
    var radian = rover.rotation * Math.PI / 180;
    var x1 = rover.x;
    var y1 = rover.y;
    var x2 = rover.x + (distance * Math.cos(radian));
    var y2 = rover.y + (distance * Math.sin(radian));
    rover.x = x2;
    rover.y = y2;
    if(penDown === true){
      lines.push([x1,y1,x2,y2]);
    }
  },timeCalled * 250);
}

// To move the rove in forward direction
function forward(distance){
 move(0,distance);
}
function forward1(distance){
 fill("blue");
 move(0,distance);
 rocket.visible = true;
}

//To move the rover in backward riection
function backward(distance){
 move(0,-distance);
}

// To rotate the rover in clockwise directiopn
function turnRight(angle){
 move(angle,0);
}

// To move the rover in anticlockwise direction
function turnLeft(angle){
  move(-angle,0);
}

// Lift the rover up to avoid making traces on the ground
function liftUp(){
  timeCalled += 1;
  setTimeout(function() {
    penDown = false;
  }, 250 * timeCalled);
}

// Make the rover touch the ground to draw traces on the ground
function liftDown(){
  timeCalled += 1;
  setTimeout(function() {
    penDown = true;
  }, 250 * timeCalled);
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
