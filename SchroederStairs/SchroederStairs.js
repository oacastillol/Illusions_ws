sizeWindow=240;

function setup() {
    createCanvas(sizeWindow,sizeWindow);
    steps = 30;
    delta = sizeWindow/steps;
    noLoop();
}

function draw() {
  // Marco
  line(delta,sizeWindow-delta,sizeWindow-(3*delta),sizeWindow-delta);
  line(delta,delta*3,delta,sizeWindow-delta);
  line(delta*3,delta,sizeWindow-delta,delta);
  line(sizeWindow-delta,delta,sizeWindow-delta,sizeWindow-(3*delta));
 //Diagonales
  line(delta,(delta*3),(delta*3),delta);
  line(sizeWindow-(3*delta),sizeWindow-delta,sizeWindow-delta,sizeWindow-(3*delta));
  for(i = 1, j=3; delta*i<sizeWindow-(3*delta);i+=2,j+=2){
    fillX(delta*i,delta*j,delta*j,delta*i);
  }
  for(i = 3, j=5; delta*i<sizeWindow-delta;i+=2,j+=2){
    fillY(delta*i,delta*j,delta*i,delta*j);
  }  
}

function fillX (xi,xf,y,yf){
  while(y>yf){
    if(y % 2 == 0){
      line(xi,y,xf,y);
    }
   xi += 1;
   xf += 1;
   y -= 1;
  }
}

function fillY(yi,yf,x,xf){
  while(x<xf){
   line(x,yi,x,yf);
   x += 1;
   yi -= 1;
   yf -= 1;
  }
}