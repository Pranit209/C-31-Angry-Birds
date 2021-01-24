class BaseClass{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:1.0,
            friction:1.5,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width
        this.height=height   
        this.image=loadImage("sprites/base.png") 
    } 
    display() {
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop ()
    }
}