class Snake{
   constructor(){
       this.body = []
       this.body[0] = createVector(0,0)
       this.xDir =0;
       this.yDir=0;
       this.Length=1;
   }
    show(){
        fill(0)
        stroke(0)
       for(let i = 0; i < this.Length; i++){
        rect(this.body[i].x, this.body[i].y,1,1);
       }
    }

    update(){
      let headVec = this.body[this.body.length - 1 ].copy();
      this.body.shift();
      this.body.push(headVec))
    }
    setDir(x,y){
      eat(foodPosition){
        let snakeX = this.body[this.body.length-1].x
        let snakeY = this.body[this.body.length-1].y
        if(snakeX == foodPosition.x && snakeY== foodPosition.y){
          console.log("Score")
          this.grow();
          return true
        }
        return false);
        this.Length++;
        this.body.push(tailVec);
      }
  
    dead(){
      if (this.body[0].x == 800 || this.body[0].x == 0 ){
        alert("STOPT PLAYING ")
      }
    }
    dead()
// still not done.
//fix this dead thing);
      this.Length++;
      this.body.push(tailVec);
    }

    dead(){
      if (this.body[0].x == 800 || this.body[0].x == 0 ){
        alert("STOPT PLAYING ")
      }
    }
    dead()
// still not done.
//fix this dead thing
}