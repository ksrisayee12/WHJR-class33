class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
    this.image2 = loadImage("sprites/pig hurt.png")
  }
  display(){
   // console.log(this.body.speed);
    if (this.body.speed<=3){
      super.display();
    }
    else{
      World.remove(world, this.body)
      push()
      this.Visibility-=5;
      tint(255,this.Visibility);
      image(this.image2,this.body.position.x,this.body.position.y,50,50);
      pop()
    }
  }
  score(){
    if (this.Visibility < 0 && this.Visibility > -105){
      score++
    }
  }
}