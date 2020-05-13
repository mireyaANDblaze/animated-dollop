class ground{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = 100;
        this.height = 15;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
}