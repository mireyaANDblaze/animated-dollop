class Arrow{
    constructor(x,y){
        var options={
            restitution: 0.8,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = 70;
        this.height = 30;
        this.image = loadImage("sprites/shoot.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}