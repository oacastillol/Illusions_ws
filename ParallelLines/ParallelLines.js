var keyPress = false;
function setup() {
       createCanvas(windowWidth,windowHeight);
       noLoop();
}

function draw() {
    background(255)
    margen = windowHeight/30;
    deltaX = windowWidth/11;
    deltaX2 = deltaX/2;
    for ( i = 1;i<=10;i+=1){
      line(deltaX*i,margen,deltaX*i,windowHeight-margen);
      if(keyPress){
        for(j=1;j<20;j+=1){
          posY= margen*j;
          posFY = margen*(j+10);
          if(i%2==0){
            line((deltaX*i)-deltaX2,posY,(deltaX*i)+deltaX2,posFY);
          }else{
            line((deltaX*i)-deltaX2,posFY,(deltaX*i)+deltaX2,posY);
          }
        }
      }
    }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(keyPress){
    keyPress = false;
  }
  else{
    keyPress = true; 
  }
  redraw();
}