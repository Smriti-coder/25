class paper {
    constructor(x, y,radius,options) {
        var options = {
           
            restitution : 0.3,
            friction : 0,
            density : 1.2
        };

        this.body=Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius= radius;
      //  this.maxSides= maxSides;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
       
    }

    display(){
      //  push()
     //   fill(255)
     //   image(this.image,4,4);
      //  pop()

      push()
     // translate(groundPos.x, groundPos.y);
      rectMode(CENTER)
      //strokeWeight(4);
      fill(128,128,128)
      image(this.image,this.body.position.x,this.body.position.y,this.radius, this.radius);
      pop()
      
    }
        
} 
