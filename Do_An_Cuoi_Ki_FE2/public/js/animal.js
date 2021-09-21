
// let Animal = function () {
//   this.name = null;
//   this.image = null;
//   let food = new Food();
//   let feel = new Feel();
//   let status = new Status();
//   this.init = function (name ,image, food, feel, status) {
//     this.name = name;
//     this.image= image;
//     this.food = food;
//     this.feel = feel;
//     this.status = status;
//     this.animal = {name : this.name, image : this.image,food : this.food, feel : this.feel, status : this.status };
//     return this.animal;
//   };
//   this.setName = function(value){
//     this.name = value;
//     return this.name;
//   }
//   this.setFood = function(value){
//     this.food = value;
//     return this.food;
//   }
//   this.setFeel = function(value){
//     this.feel = value;
//         return this.feel;
//   }

// };


// class Animal extends multi.inherit(Food,Feel){

//     constructor (animalName,_nameFood,_colorFood,_feel,_vinh){
//          super(_nameFood,_colorFood,_feel,_vinh);
//         this.name = animalName;
//     }
//     get getName(){
//       return this.name;
//     }
//     set getName(name){
//       this.name = name;
//     }

// }

class animal{
    constructor (_name,_image,_food,_feel){
        this.name = _name;
        this.image = _image;
        this.food = _food;
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