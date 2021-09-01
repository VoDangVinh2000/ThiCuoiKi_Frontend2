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

let name = document.querySelectorAll(".appendAnimal-Buy .animal-select"); //Lấy tên từ thẻ div

function startGame() {
  //  let createDog = new createdDog();
  //   let createCat = new createdCat();
  // let wrapperGame = document.querySelector('.wrapper-game');
  // console.log();
  // let dog = new Animal(createDog[0].name, createDog[0].food, "", "");
  // let cat = new Animal(createCat[0].name,createCat[0].food,"","");
    let animal = new Animal();
  name.forEach((element) => {
    element.addEventListener("click", () => {
      let petName = element.innerText;
      let bgCat = document.querySelector('.bg-cat');
      if (petName == "Cat") {
        //Khi chọn vào cat thì đối tượng cat sẽ được tạo và bắt đầu.
        let catCreate = animal.createdCat()[0]; // Đối tượng mèo được tạo
        // bgCat = animal.setCssImageMain();
        let backgroundImage = [{backgroundImage : "none",backgroundSize : "cover"}];//tạo css cho image
        let setCssImageMain = animal.setCssImageMain(400,400,backgroundImage,"./public/img/cat.png");
        bgCat.style.width = setCssImageMain[0].width;
        bgCat.style.height = setCssImageMain[0].height;
        bgCat.style.background = "url("+setCssImageMain[0].url+")";
        bgCat.style.backgroundSize = setCssImageMain[0].background[0].backgroundSize;
        console.log(setCssImageMain[0].background[0].backgroundSize);
        // console.log(setCssImageMain);
      } 
      else if (petName == "Pig") {
          
        }
    });
  });
  //Append when new buy animal
  // let appendBuyAnimal = document.querySelector('.appendAnimal-Buy');
  // appendBuyAnimal.insertAdjacentHTML('beforeend','<div class="col"><div class="bird"></div></div>');
  

  //let dog = animal.init(createdDog[0].name,createdDog[0].food,createdDog[0].foodImage,createdDog[0].feel);
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

//khai báo thú cưng và bacground thú cưng
let cat = document.querySelector(".cat");
let bgcat = document.querySelector(".bg-cat");
let pig = document.querySelector(".pig");
let bgpig = document.querySelector(".bg-pig");
let notepet = document.querySelector(".note-pet");

//sự kiện ảnh khi người choi click vào ảnh thú cưng
cat.addEventListener("click", function () {
//   cat.style.transform = "scale(1.3)";
//   cat.style.border = "1px solid blue";
//   bgpig.style = "none";
//   bgcat.style.width = "400px";
//   bgcat.style.height = "400px";
//   //bgcat.style.background='url(./public/img/catgif.gif)';
//   bgcat.style.backgroundSize = "cover";
//   bgcat.style.marginTop = "100px";
//   bgcat.style.marginLeft = "350px";
//   pig.style.transform = "none";
//   pig.style.border = "none";
});
pig.addEventListener("click", function () {
//   pig.style.transform = "scale(1.3)";
//   pig.style.border = "1px solid blue";
//   bgcat.style = "none";
//   bgpig.style.width = "400px";
//   bgpig.style.height = "400px";
//   // bgpig.style.background='url(./Do_An_Cuoi_Ki_FE2/public/img/heo.gif)';
//   bgpig.style.backgroundSize = "cover";
//   bgpig.style.marginTop = "100px";
//   bgpig.style.marginLeft = "350px";
//   cat.style.transform = "none";
//   cat.style.border = "none";
});
//sự kiện hiện ghi chú khi người dùng hover vào ảnh của thú cưng
cat.onmouseover = function () {
  notepet.style.marginLeft = "130px";
  notepet.style.background = "white";
  notepet.innerHTML = "Con mèo";
};
pig.onmouseover = function () {
  notepet.style.marginLeft = "180px";
  notepet.innerHTML = "Con lợn";
  notepet.style.background = "white";
};
//sự kiện kết thúc ghi chú khi người dùng không hover vào thú cưng
function callHoverEvent() {
  notepet.innerHTML = "";
}
