
let Animal = function () {
  this.name = null;
  this.food = null;
  this.foodImage = null;
  this.feel = null;
  //this.info = null;
  
  this.init = function (name, food, foodImage, feel) {
    this.name = name;
    this.food = food;
    this.foodImage = foodImage;
    this.feel = feel;
    //this.info = [{ name: this.name, food: this.food, foodImage: this.foodImage, feel : this.feel }];
    return this;
  };
//  this.createdCat = function () {
//     this.name = "Cat";
//     this.food = ["Xương", "Thức ăn hữu cơ", "Thịt", "Gà"];
//     this.foodImage = ["Happy4_Cat.gif","Happy3_Cat.gif","Angry_Cat.gif"];
//      this.feel = 100;
//     //this.info = [{ name: this.name, food: this.food, foodImage: this.foodImage, feel : this.feel }];
//     return this;
//   };
  // this.createdDog = function () {
  //   this.name = "Dog";
  //   this.food = ["Xương", "Thức ăn hữu cơ", "Thịt", "Gà"];
  //   this.foodImage = ["1.jpg", "2,jpg", "3,jpg", "4.jpg"];
  //   this.feel = 100;
  //   this.info = [{ name: this.name, food: this.food, foodImage: this.foodImage, feel : this.feel }];
  //   return this.info;
  // };
 
  // this.setCssImageMain = function(width,height,background,url){
  //   this.width = width;
  //   this.height = height;
  //   this.background = background;
  //   this.url = url;
  //   this.info = [{width : this.width + "px", height : this.height + "px", background : this.background, url : this.url}];
  //   return this.info;
  // }
};
