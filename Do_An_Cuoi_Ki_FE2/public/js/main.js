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


//Trạng thái tạo sẵn đồ ăn
var iconSelect;
var selectedText;
var icons = [];
function loadFood_StartGame(){
    window.onload = function(){    
        selectedText = document.getElementById('selected-text'); 
        document.getElementById('my-icon-select').addEventListener('changed', function(e){
            selectedText.value = iconSelect.getSelectedValue();
        });   
        iconSelect = new IconSelect("my-icon-select");
        // var icons = [];
        icons.push({'iconFilePath':'public/img/icons/1.png', 'iconValue':'1'});
        icons.push({'iconFilePath':'public/img/icons/2.png', 'iconValue':'2'});
        icons.push({'iconFilePath':'public/img/icons/3.png', 'iconValue':'3'});  
        iconSelect.refresh(icons);  
    }; 
}


//Trạng thái tạo sẵn đồ chơi


let name = document.querySelectorAll(".appendAnimal-Buy .animal-select"); //Lấy tên từ thẻ div
let image_animation_animal = document.querySelector(".image-animation-animal");
let img_animal_main =  document.querySelector("#image-animation-animal");
function startGame() {
  //  let createDog = new createdDog();
  //   let createCat = new createdCat();
  // let wrapperGame = document.querySelector('.wrapper-game');
  // console.log();
  // let dog = new Animal(createDog[0].name, createDog[0].food, "", "");
  // let cat = new Animal(createCat[0].name,createCat[0].food,"","");
  loadFood_StartGame();
  let animal = new Animal();
  name.forEach((element) => {
    element.addEventListener("click", () => {
      let petName = element.innerText;
      if (petName == "Cat") {
        //Khi chọn vào cat thaì đối tượng cat sẽ được tạo và bắt đầu.
        //let catCreate = animal.createdCat()[0]; // Đối tượng mèo được tạo
       
        let food = [
          {name : "Cá", image : "1.jpg" },
          {name : "Xương", image : "2.jpg"},
          {name : "Sữa", image : "sua.png"}
        ];
         //Khởi tạo đối tượng mèo
        let init_oob_cat = animal.init(petName,"","",100);
        console.log(icons); 
        // let feel = catCreate.feel;
        
        // let calcu = setInterval(() => {
        //     if(feel == 0){
        //        console.log(feel);
        //        return;
        //     }
        //     feel -= 20;
        //     console.log(feel);
        // }, 3000);
        
       
        // bgCat = animal.setCssImageMain();
        //let backgroundImage = [{ backgroundImage: "none", backgroundSize: "cover" }]; 
        //tạo css cho image
        //let setCssImageMain = animal.setCssImageMain( 400, 400,  backgroundImage,  "./public/img/cat.png");
        // bgCat.style.width = setCssImageMain[0].width;
        // bgCat.style.height = setCssImageMain[0].height;
        // bgCat.style.background = "url(" + setCssImageMain[0].url + ")";
        // bgCat.style.backgroundSize =
        //   setCssImageMain[0].background[0].backgroundSize;
        // console.log(setCssImageMain);
      } else if (petName == "Pig") {

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


