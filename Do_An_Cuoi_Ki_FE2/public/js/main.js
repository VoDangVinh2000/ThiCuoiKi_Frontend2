//Sự kiện trước khi load trang.
// window.onbeforeunload = function () {
//   return (
//     "Any string value here forces a dialog box to \n" +
//     "appear before closing the window."
//   );
// };

// Kết thúc chào người chơi
const end__finish = document.querySelector(".end__finish");

// end__finish.addEventListener("click", () => {
let hello__name__player = document.querySelector(".hello__name__player");
hello__name__player.style.display = "none";
// });

// Hiển thị tên người chơi
const get__name__player = document.querySelector(".startAfterSaveName");

get__name__player.addEventListener("click", () => {
  let instructor__name = document.querySelector(".instructor__name");
  let name__title = document.querySelector(".name__title");
  let name__player = document.querySelector(".name__player");
  let img__instructor = document.querySelector(".img__instructor");
  let error__name = document.querySelector(".error__name");

  if (name__player.value === "") {
    error__name.style.display = "block";
  } else {
    name__title.innerHTML = name__player.value;
    instructor__name.style.display = "block";
    img__instructor.style.display = "block";
    //add data-dismiss cho thẻ modal bằng Jquery
    $("button.startAfterSaveName").attr("data-dismiss", "modal");
    //Bắt đầu các trạng thái của game sau khi lưu tên
  }
});

//Trạng thái chào mừng
function welcome() {}

//Thử tạo sẵn 2 đối tượng chó và mèo thuộc lớp động vật,

function animal(name, food, foodImage, feel) {
  this.name = name;
  this.food = food;
  this.foodImage = foodImage;
  this.feel = feel;
  //let doan = ["Xương","Thịt nạc", "Cơm", "Thức ăn hữu cơ động vật"];

  //let info = [{name : name, doan : doan}];
  // return info;
}

function createdDog() {
  let name = "Dog";
  let food = ["Xương", "Thức ăn hữu cơ", "Thịt", "Gà"];
  let foodImage = ["1.jpg", "2,jpg", "3,jpg", "4.jpg"];

  let info = [{ name: name, food: food, foodImage: foodImage }];
  return info;
}

function createdCat() {
  let name = "Cat";
  let food = ["Cá", "Thức ăn hữu cơ", "Thịt", "Chuột"];
  let foodImage = ["1.jpg", "2,jpg", "3,jpg", "4.jpg"];

  let info = [{ name: name, food: food, foodImage: foodImage }];
  return info;
}

function createdElephant() {}

function animal_food_image() {}

function startGame() {
  let createDog = new createdDog();
  let createCat = new createdCat();
  let dog = new animal(createDog[0].name, "", "", "");
  let cat = new animal(createCat[0].name, createCat[0].food,"","");
  let wrapperGame = document.querySelector('.wrapper-game');
  console.log(dog);
  console.log(cat);
  // Xử lí hiển thị thông báo chào người chơi
  // Ẩn hiện massage
  const finish__massage = document.querySelector(".finish__massage");
  finish__massage.addEventListener("click", () => {
    let title__instructor = document.querySelector(".title__instructor");
    let img__instructor = document.querySelector(".img__instructor");

    title__instructor.style.display = "none";
    img__instructor.style.display = "none";
  });
  // Close massage
  document.querySelector(".close").addEventListener("click", () => {
    let title__instructor = document.querySelector(".title__instructor");
    let img__instructor = document.querySelector(".img__instructor");

    title__instructor.style.display = "block";
    img__instructor.style.display = "block";
  });
  //Bắt sự kiện khi người dùng nhấn key code
  document.addEventListener("keydown", (key) => {
    let title__instructor = document.querySelector(".title__instructor");
    let img__instructor = document.querySelector(".img__instructor");
    if (key.keyCode === 27) {
      title__instructor.style.display = "block";
      img__instructor.style.display = "block";
    }
  });
}

startGame();
