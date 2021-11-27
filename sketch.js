let snake;
let rez = 10;
let w;
let food;
let h;
function setup() {
  createCanvas(800, 800);
  w = floor(width/ rez);
  h = floor(height/rez);
  snake = new Snake();
  foodLocation();
}

 function foodLocation(){
   let x = floor(random(w));
   let y = floor(random(h));
   food = createVector(x,y);
 }
function draw() {
  scale(rez)
  background(220);
  snake.show()
  snake.update()
    fill(255,45,0)
    stroke(255,45,0)
   rect(food.x,food.y,1,1);
   if(snake.eat(food)== true){
    foodLocation()
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 'a') {
   snake.setDir(-1,0)
  } else if (keyCode === RIGHT_ARROW || keyCode === 'd') {
   snake.setDir(1,0)
  }
  if (keyCode === DOWN_ARROW || keyCode === 's') {
   snake.setDir(0,1)
  } else if (keyCode === UP_ARROW || keyCode === 'w') {
    snake.setDir(0,-1)
  }
  
}


