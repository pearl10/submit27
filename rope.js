class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
           pointB:{x:this.offsetX,y:this.offsetY}, 

            stiffness:0.04,
            length:200
        }
      this.rope=Constraint.create(options) ;
      World.add(world,this.rope) 
    }
    
    display(){
    
       // strokeWeight(3);
        //line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
         
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;
         
        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;

        strokeWeight(2);
        line( Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
    }
    } 