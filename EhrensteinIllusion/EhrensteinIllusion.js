sizeWindow=540;

function setup() {
    createCanvas(sizeWindow,sizeWindow);
    delta = sizeWindow/8;
    deltaF = Math.round(delta/4);
    delta2=0;
    order = true;
}

function draw() {
    background(255)
    console.log(deltaF);
    if (delta2 == 0){
       order = true; 
    }
    if(delta2 == deltaF){
     order = false; 
    }
    if(order){
      delta2 = (delta2+1);       
    }else{
      delta2 = (delta2-1);
    }    
    for ( i = 1;i<=8;i+=1){
      if(i%2==0){
        for ( j = 2;j<8;j+=1){
          if(j%2==0){
            line(delta*i,delta*(j-1),delta*i,delta*j-delta2); // Vertical Lines
            line(delta*(j-1),delta*i,delta*j-delta2,delta*i); //Horizontal Lines
          }else{
            line(delta*i,delta*(j-1)+delta2,delta*i,delta*j); // Vertical Lines
            line(delta*(j-1)+delta2,delta*i,delta*j,delta*i); //Horizontal Lines            
          }
        }
      }else{
        for ( j = 2;j<8;j+=1){
          if(j%2==0){
            line(delta*i,delta*(j-1)+delta2,delta*i,delta*j); // Vertical Lines
            line(delta*(j-1)+delta2,delta*i,delta*j,delta*i); //Horizontal Lines
          }else{
            line(delta*i,delta*(j-1),delta*i,delta*j-delta2); // Vertical Lines
            line(delta*(j-1),delta*i,delta*j-delta2,delta*i); //Horizontal Lines            
          }
        }
      }
    }
  
}