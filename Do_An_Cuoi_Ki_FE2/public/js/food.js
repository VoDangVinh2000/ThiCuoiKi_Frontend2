
class food{

    constructor (_nameFood, _colorFood){
        this.nameFood = _nameFood;
        this.color = _colorFood;
    }
    get getName(){
      return this.nameFood;
    }
    set getName(name){
      this.nameFood = name;
    }
    get getColor(){
      return this.color;
    }
    set getColor(color){
      this.color = color;
    }
}
// const food  = new Food();

