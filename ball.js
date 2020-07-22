class Ball {
    constructor(x, y) {
      var options = {
       
        restitution:1,
        friction:0,
        density:1.2
       
      }
     
     
      this.body = Bodies.circle(x, y,30, options);
     
      this.radius= 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("black");
      fill("pink");
     ellipse(0,0,this.radius, this.radius);
      pop();
     }
      }
     













  