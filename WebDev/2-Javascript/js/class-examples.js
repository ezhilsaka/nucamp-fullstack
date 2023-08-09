class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    behavior(){
      console.log(`The ${this.color} ${this.element} ${this.type} behaves like a child`);
    }
}

class Dino extends Monster{
  constructor(type, color, diet){
    super(type, color);
    this.diet = diet;
  }
  dietFun(){
    console.log(`The ${this.color} ${this.element} ${this.type} eats only the ${this.diet} food`); 
  }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar();
woodDragon.fly();
woodDragon.behavior(); 

const werewolf1 = new Werewolf("snow wolf", "gray");
werewolf1.howl();

const dino = new Dino("t-rex", "brown", "vege");
dino.dietFun();
dino.roar();

