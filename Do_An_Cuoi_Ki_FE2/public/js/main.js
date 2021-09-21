//Sự kiện trước khi load trang.
// window.onbeforeunload = function () {
//   return (
//     "Any string value here forces a dialog box to \n" +
//     "appear before closing the window."
//   );
// };

// Kết thúc chào người chơi
let hello__name__player = document.querySelector(".hello__name__player");
hello__name__player.style.display = "none";
// const end__finish = document.querySelector(".end__finish");
// end__finish.addEventListener("click", () => {

// hello__name__player.style.display = "none";
// });

// // // Hiển thị tên người chơi
// const get__name__player = document.querySelector(".startAfterSaveName");

// get__name__player.addEventListener("click", () => {
//   let instructor__name = document.querySelector(".instructor__name");
//   let name__title = document.querySelector(".name__title");
//   let name__player = document.querySelector(".name__player");
//   let img__instructor = document.querySelector(".img__instructor");
//   let error__name = document.querySelector(".error__name");

//   if (name__player.value === "") {
//     error__name.style.display = "block";
//   } else {
//     name__title.innerHTML = name__player.value;
//     instructor__name.style.display = "block";
//     img__instructor.style.display = "block";
//     //add data-dismiss cho thẻ modal bằng Jquery
//     $("button.startAfterSaveName").attr("data-dismiss", "modal");
//     //Bắt đầu các trạng thái của game sau khi lưu tên
//   }
// });

//Trạng thái chào mừng
function welcome() {}



//Vẽ hướng dẫn.
let drawingTutorial = () =>{
   //Bước 1
     this.buoc1 = function(){

    }
    this.buoc2 = function(){
      console.log('buoc2');
    }
    // let src = "./public/img/animal-tutorial-images/left-arrow.jpg";
    // let image = new Image();
    // image.drawIamge(src,50,60);
    return this;
}




function appendAnimalBuy(animals){
    animals.map((item) => appendAnimal_buy.insertAdjacentHTML('beforeend','<div class="col"><div class="animal-select"><img src="'
    +item.image+'" ></div></div>'));
}

function createOop_Cat(animals,img_animal_main){
    for(const [index,animal] of Object.entries(animals)){
        if(animal.getName == "Cat"){
            animal.getImage = "./public/img/animal-feel/binhthuong-meo.gif";
            img_animal_main.src = animal.getImage;
            animal.getFood.forEach((element,index2) => {
                div_inside_list_food.insertAdjacentHTML('beforeend','<div class="food"><p class="nameFood">'
                +element.name+'</p><img class="imageFood" src="./public/img/animal-food/cat/'
                +element.image+'" ><p class="amount-food">'+element.amount+'</p></div>');
            });
        }
    }
}

function money_initinal(arg){
    p_money.innerHTML = "Xu : " + arg;
    
}
function increaseMoney(money){
    // money += 50;
    // p_money.innerHTML = "Xu : " + money;

    // money = p_money.innerHTML;
    //     console.log(money);
}
//Let's go
let widthSubt = 0;
let startOopCat = function(animal,money){
    //Cat
    let oop_cat = animal;
    let hp_cat = oop_cat.feel;//100
    //Quy định 20s, mỗi giây chiều rộng giảm 10 <=> width = 100%
    let time = 20;
  
    let check = false;
    let nameFood = "";
        let timeGetFood = setInterval(() => {
            time -= 1;
            widthSubt += 5;
            // cWarningAnimal.innerHTML = "Đói, đói, đói";
            // cWarningAnimal.style.display = "block";
            cLoaderLine.style.width = "calc(100% - "+widthSubt+"px)"; 
            //Hp = 100 thì chuyển sang màu đỏ
            if(widthSubt > 100){
                cLoaderLine.style.background = "red";
                oop_cat.getImage = "./public/img/animal-feel/Doi-an-meo.gif";
                img_animal_main.src = oop_cat.getImage;
                replayGameFood(widthSubt);
                return;
            }
            else{
                cLoaderLine.style.background = "green";
            }
            //Kiểm tra trong khoảng thời gian 20s, nếu ng dùng click thức ăn => tăng hp, tăng tiền,
            //Ngược lại: hp < 100 => đổi ảnh, set animal.
            let cImageFood = document.querySelectorAll('.imageFood');
                cImageFood.forEach((element,index) => { // click image food loop
                    element.addEventListener('click',function(){
                        check = true;
                        nameFood = oop_cat.getFood[index].name; 
                        //Xử lý ở if check == true         
                    });
            })
            if(check == true){
                widthSubt -= 50;
                setFirstRequest(timeGetFood,cWarningAnimal,cTime,widthSubt,cLoaderLine);
                //increaseMoney(money);
                money += 50;
                p_money.innerHTML = "Xu : " + money;
                decreaseFood(oop_cat,nameFood); 
                if(cLoaderLine.style.background == "green"){
                    oop_cat.getImage = "./public/img/animal-feel/vui-meo.gif";
                    img_animal_main.src = oop_cat.getImage;
                }
            }
            else{
                if(time == 0 && check != true){
                    clearInterval(timeGetFood);
                }
            }
        }, 1000);
        //clearInterval(timeGetFood);
    let cImageFood = document.querySelectorAll('.imageFood');
    cImageFood.forEach((element,index) => { // click image food loop
        element.addEventListener('click',function(){
            nameFood = oop_cat.getFood[index].name; 
            widthSubt -= 50;
            cLoaderLine.style.width = "calc(100% - "+widthSubt+"px)"; 
             money += 50;
            p_money.innerHTML = "Xu : " + money;
        });
    });
   
}

let cWarningAnimal = document.querySelector('.warning-animal');
let cTime = document.querySelector('.time');
let p_money = document.querySelector('.money');
let image_animation_animal = document.querySelector(".image-animation-animal");
let img_animal_main =  document.querySelector("#img-animal-main");
let appendAnimal_buy = document.querySelector('.appendAnimal-Buy');
let div_inside_list_food = document.querySelector('.inside-list-food');
let cLoaderLine = document.querySelector('#cssload-line');
 let money = 100;
 //Toys
 let widthToys_subt = 0;
 let cssload_line_toys =  document.querySelector('#cssload-line-toys');
 let cInside_list_toys = document.querySelector('.inside-list-toys');
let startGame = function(){
    
    let foodCat = [{name : "Thịt", image : "meat.jpg",amount : 5},{name : "Sữa", image : "sua.jpg",amount : 5}];
    let feelCat = 100;
    let foodDog = [{name : "Xương", image : "meat.jpg",amount : 2},{name : "Cơm", image : "com.jpg",amount : 2}];
    let feelDog = 100;
    //created oop animals
    let imageCat = "./public/img/cat1.jpg";
    let imageDog = "./public/img/dog-1.png";
    const animals = [
        new animal("Cat",imageCat,foodCat,feelCat),
    ];
   
    money_initinal(money);
    //insert div select-animal
    appendAnimalBuy(animals);
    //player choose an animal
    let animal_select = document.querySelectorAll('.animal-select');
    animal_select.forEach((element,index) => {
        element.addEventListener('click',function(){
            if(index == 0){
                createOop_Cat(animals,img_animal_main);
                element.style.display = "none";
                startOopCat(animals[0],money);
                animalFeel_toys();
                let checkDied = false;
                let timeGetFood = setInterval(() => {
                    if(widthSubt > 100){
                        cLoaderLine.style.background = "red";
                        //animals[0].getImage = "./public/img/animal-feel/Doi-an-meo.gif";
                        img_animal_main.src = "./public/img/animal-feel/Doi-an-meo.gif";
                        replayGameFood(widthSubt);
                    }
                    else{
                        cLoaderLine.style.background = "green";
                    }
                     if(cLoaderLine.style.background == "green"){
                        animals[0].getImage = "./public/img/animal-feel/binhthuong-meo.gif";
                        img_animal_main.src = animals[0].getImage;
                    }
                    cLoaderLine.style.width = "calc(100% - "+widthSubt+"px)"; 
                    widthSubt += 10;
                }, 1000);
            }
        });
    });

}
startGame();

//Implement function set òf first request if checkClickFood function == true
function setFirstRequest(timeGetFood,cWarningAnimal,cTime,widthSubt,cLoaderLine){
    clearInterval(timeGetFood);
    cWarningAnimal.innerHTML = "";
    cWarningAnimal.style.display = "none";
    cTime.style.display = "none";
    cLoaderLine.style.width = "calc(100% - "+widthSubt+"px)"; 
}

function decreaseFood(oop_cat,nameFood){
    let cAmount_food = document.querySelectorAll('.amount-food');
    let cFood = document.querySelectorAll('.food');
     oop_cat.getFood.forEach((element,index) => {
        if(element.name === nameFood){
            cFood.forEach((v_cFood,indexCFood)=> {
                v_cFood.addEventListener('click',function(){
                    cAmount_food.forEach((v_cAmountFood,indexCAmountFood) => {
                        if(indexCAmountFood == indexCFood ){
                            let amountFood = v_cAmountFood.innerHTML;//2
                            amountFood -= 1;//1
                            if(amountFood  == 0){
                                v_cFood.remove();
                                element.amount = amountFood;
                                return;
                            }
                            element.amount = amountFood; 
                            v_cAmountFood.innerHTML = element.amount;
                            return;
                        }
                    });
                });
            });
        }
    })
}

//replay game
function replayGameFood(widthSubt){
    //let idDialogLoseNotice = document.querySelector('#noticeLoseGame');
    //let btnReplay = document.querySelector('#btnReplay');
    if(widthSubt >= 190){
        img_animal_main.src = "./public/img/animal-feel/cat-died.jpg"; 
        // $(document).ready(function(){
        //     $('#modalReplayGame').modal('show');
        //     setTimeout(() => {
        //         location.reload();
        //     }, 3000);
        // });
    }
   
}

//Toys
function animalFeel_toys(){
    loadToys();
    setInterval(() => {
        widthToys_subt += 5;
        cssload_line_toys.style.width = "calc(100% - "+widthToys_subt+"px)"
    }, 1000);
}
function loadToys(){
    const createdToys = [
        {image : "toys-mouse-blue.jpg"},
        {image : "hello-kitty.jfif"}
    ]
    createdToys.map((item) => cInside_list_toys.insertAdjacentHTML('beforeend','<div class="toys"><img src="./public/img/animal-toys/'
    +item.image+'"></div>') );
}




























  
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




// window.onload = function(){
//   setInterval(() => {
//     startGame();
//   }, 1000);
// }

//Cho ăn : quy định thời gian 
// function eatAnimal(){
//     let div_time_to_get_food = document.querySelector('.time-to-get-food');
//     let time
// }






























//Append when new buy animal
  // let appendBuyAnimal = document.querySelector('.appendAnimal-Buy');
  // appendBuyAnimal.insertAdjacentHTML('beforeend','<div class="col"><div class="bird"></div></div>');

  //let dog = animal.init(createdDog[0].name,createdDog[0].food,createdDog[0].foodImage,createdDog[0].feel);
  // Xử lí hiển thị thông báo chào người chơi
  // Ẩn hiện massage
  // const finish__massage = document.querySelector(".finish__massage");
  // finish__massage.addEventListener("click", () => {
  //   let title__instructor = document.querySelector(".title__instructor");
  //   let img__instructor = document.querySelector(".img__instructor");

  //   title__instructor.style.display = "none";
  //   img__instructor.style.display = "none";
  // });
  // // Close massage
  // document.querySelector(".close").addEventListener("click", () => {
  //   let title__instructor = document.querySelector(".title__instructor");
  //   let img__instructor = document.querySelector(".img__instructor");

  //   title__instructor.style.display = "block";
  //   img__instructor.style.display = "block";
  // });
  // //Bắt sự kiện khi người dùng nhấn key code
  // document.addEventListener("keydown", (key) => {
  //   let title__instructor = document.querySelector(".title__instructor");
  //   let img__instructor = document.querySelector(".img__instructor");
  //   if (key.keyCode === 27) {
  //     title__instructor.style.display = "block";
  //     img__instructor.style.display = "block";
  //   }
  // });


