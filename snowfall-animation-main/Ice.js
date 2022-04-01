class Ice{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.image=loadImage("snow1.jpg");
        this.radius = 5;
        World.add(world, this.rain);
    }
 
    updateY(){     
        if(this.rain.position.y > 2*height){
 
            Matter.Body.setPosition(this.rain, {x:random(0,1000), y:random(0,1000)})
        }
    }
 
    display(){
        fill("blue")
        //ellipseMode(CENTER);
        imageMode(CENTER);
		image(this.image, this.rain.position.x,this.rain.position.y,this.radius,this.radius)
        //ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
 }