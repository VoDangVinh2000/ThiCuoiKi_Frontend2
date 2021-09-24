
class animal{
    constructor (_name,_image,_food,_toy,_feel){
        this.name = _name;
        this.image = _image;
        this.food = _food;
        this.toy = _toy;
        this.feel = _feel;
    }
    get getName(){
      return this.name;
    }
    set getName(name){
      this.name = name;
    }
    get getFood(){
      return this.food;
    }
    set getFood(food){
      this.food = food;
    }
    get getToy(){
      return this.toy;
    }
    set getToy(toy){
      this.toy = toy;
    }
    get getFeel(){
      return this.feel;
    }
    set getFeel(feel){
      this.feel = feel;
    }
     get getImage(){
      return this.image;
    }
    set getImage(image){
      this.image = image;
    }
}
// module.exports = animal;