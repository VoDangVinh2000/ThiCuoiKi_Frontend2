// class Animal {
//   constructor(name, food, foodImage, feel) {
//     this.name = name;
//     this.food = food;
//     this.foodImage = foodImage;
//     this.feel = feel;
//   }

//   createdCat() {
//     let name = "Cat";
//     let food = ["Cá", "Thức ăn hữu cơ", "Thịt", "Chuột"];
//     let foodImage = ["1.jpg", "2,jpg", "3,jpg", "4.jpg"];
//     let info = [{ name: name, food: food, foodImage: foodImage }];
//     return info;
//   }

//   petAvailable() {
//     //Tạo sẵn 2 thú cưng ban đầu
//      let dog = new Animal(this.createdDog()[0].name,this.createdDog[0].food,this.createdDog[0].foodImage,"");
//     // let cat = new Animal(this.createdCat[0].name,this.created[0].food,this.created[0].foodImage,"");
//     console.log(dog);
//   }

//   petAvailableFood(food){
//       this.food = food;
//       return this.food;
//   }

// }

let Animal = function () {

  // this.init = function (name, food, foodImage, feel) {
  //   this.name = name;
  //   this.food = food;
  //   this.foodImage = foodImage;
  //   this.feel = feel;
  // };
  this.createdDog = function () {
    this.name = "Dog";
    this.food = ["Xương", "Thức ăn hữu cơ", "Thịt", "Gà"];
    this.foodImage = ["1.jpg", "2,jpg", "3,jpg", "4.jpg"];
    this.info = [{ name: this.name, food: this.food, foodImage: this.foodImage }];
    return this.info;
  };
  this.createdCat = function () {
    this.name = "Cat";
    this.food = ["Xương", "Thức ăn hữu cơ", "Thịt", "Gà"];
    this.foodImage = ["1.jpg", "2,jpg", "3,jpg", "4.jpg"];
    this.info = [{ name: this.name, food: this.food, foodImage: this.foodImage }];
    return this.info;
  };
  this.setCssImageMain = function(width,height,background,url){
    this.width = width;
    this.height = height;
    this.background = background;
    this.url = url;
    this.info = [{width : this.width + "px", height : this.height + "px", background : this.background, url : this.url}];
    return this.info;
  }
};
