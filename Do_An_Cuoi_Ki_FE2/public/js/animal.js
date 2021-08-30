function animal(name, food, foodImage, feel) {
  this.name = name;
  this.food = food;
  this.foodImage = foodImage;
  this.feel = feel;
}

function helloAnimal(){
    return this.name;
}