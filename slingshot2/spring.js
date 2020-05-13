class Spring{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.02,
            length: 6
        }
        this.pointB = pointB
        this.spring = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.pointA = body;
    }
    
    fly(){
        this.sling.pointA = null;
    }

    display(){
        
        if(this.sling.pointA){
            var pointA = this.sling.pointA.position;
            var pointB = this.pointB;
            push();
            
            stroke(40,20,10);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}