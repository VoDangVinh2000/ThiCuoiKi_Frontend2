//Sự kiện trước khi load trang.
window.onbeforeunload = function () {
  return (
    "Any string value here forces a dialog box to \n" +
    "appear before closing the window."
  );
};

//Trạng thái chào mừng
function welcome() {
    $(document).ready(function(){
        $('#modalStartGame').modal('show');
        let startGame = document.getElementById("startGame");
        startGame.play();
    });
}
 welcome();


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
// Tang level
let exp = 0;
let cCssload_line_exp = document.querySelector('#cssload-line-exp');
let level = 1;
let cLevel_game = document.querySelector('.level-game');
  cCssload_line_exp.style.width = 0 + "%";
function upLevel(){
    
    if(exp < 100){
        //Âm thanh tăng kinh nghiệm
        exp += 10;
        cCssload_line_exp.style.width = exp + "%";
        cLevel_game.innerHTML = "Level : " + level;
        adjustUpLevel();
    }
   
}
function adjustUpLevel(){
    if(exp == 100){
        level += 1;
        cLevel_game.innerHTML = "Level : " + level;
        exp = 0;
        cCssload_line_exp.style.width = exp + "%";
    
        $(document).ready(function(){
            $('#modalUpLevel').modal('show');
            //Âm thanh tăng cấp
            let upLevel = document.getElementById("upLevel");
            upLevel.play();
          
            setTimeout(() => {
                $('#modalUpLevel').modal('hide');
                upLevel.pause();
            }, 3000);
        })
    }
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
                div_inside_list_food.insertAdjacentHTML('beforeend'
                ,'<div class="food"><img class="imageFood" src="./public/img/animal-food/cat/'
                +element.image+'" ><p class="amount-food">'+element.amount+'</p></div>');
            });
            animal.getToy.forEach((v_toy,indexToy) => {
                cInside_list_toys.insertAdjacentHTML('beforeend','<div id="toys" class="toys"><img class="imageToy" src="./public/img/animal-toys/'
                +v_toy.image+'"><p class="amount-toy">'+v_toy.amount+'</p></div>');
            });
        }
    }
}

function money_initinal(arg){
    p_money.innerHTML = "Xu : " + arg; 
}
//Let's go
let widthSubt = 0;
 let money = 100;
 let oop_cat = [];
let startOopCat = function(animal){
    //Âm thanh bắt đầu sau khi chọn con mèo (6s)
    
    //Cat
    oop_cat = animal;
    let hp_cat = oop_cat.feel;//100
    //Quy định 20s, mỗi giây chiều rộng giảm 10 <=> width = 100%
    let time = 20;
  
    let check = false;
    let nameFood = "";
        let timeGetFood = setInterval(() => {
            time -= 1;
            widthSubt += 4;
            // cWarningAnimal.innerHTML = "Đói, đói, đói";
            // cWarningAnimal.style.display = "block";
            cLoaderLine.style.width = "calc(100% - "+widthSubt+"px)"; 
            //Hp = 100 thì chuyển sang màu đỏ
            if(widthSubt > 100){
                cLoaderLine.style.background = "red";
                oop_cat.getImage = "./public/img/animal-feel/Doi-an-meo.gif";
                img_animal_main.src = oop_cat.getImage;
            
            //    replayGameFood(widthSubt);
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
                        //Xử lý ở if check == true         
                    });
            })
            if(check == true){
                widthSubt -= 50;
                setFirstRequest(timeGetFood,cWarningAnimal,cTime,widthSubt,cLoaderLine);
                //increaseMoney(money);
                //money += 50;
                //p_money.innerHTML = "Xu : " + money;
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
}
let cWarningAnimal = document.querySelector('.warning-animal');
let cTime = document.querySelector('.time');
let p_money = document.querySelector('.money');
let image_animation_animal = document.querySelector(".image-animation-animal");
let img_animal_main =  document.querySelector("#img-animal-main");
let appendAnimal_buy = document.querySelector('.appendAnimal-Buy');
let div_inside_list_food = document.querySelector('.inside-list-food');
let cLoaderLine = document.querySelector('#cssload-line');

 //Toys
 
 let widthToys_subt = 0;
 let cssload_line_toys =  document.querySelector('#cssload-line-toys');
 let cInside_list_toys = document.querySelector('.inside-list-toys');
    //created toys when start game
    //the image store of toys
    let imgStoreToys = [{image : "ball.jpg",price : 300, amount : 1}, {image : "hello-kitty.jfif", price : 150,amount : 1}
    , {image : "laze.png" , price : 250, amount : 1}, {image : "meme-toy1.jfif", price : 400, amount : 1}
    , {image : "meme-toy2.jpg",price : 285, amount : 1} , {image : "toys-mouse-blue.jpg",price : 350, amount : 1}];
    let imgStoreFood = [{name : "Cám" ,image : "food1.png",amount : 1,price : 100}, {name:"Fris", image : "friskies.png",amount : 1
    ,price : 140},{name:"Thịt",image : "meat.jpg",amount : 1,price : 200}, {name : "Sữa",image : "sua.jpg",amount : 1, price : 250}
    , {name : "Xương cá",image : "xuong-ca.jpg",amount : 1, price : 300}];
    
    let cStore_list_toys = document.querySelector('.store-list-toys');
    let cStore_list_food = document.querySelector('.store-list-food');
let startGame = function(){
   
    let foodCat = [{name : "Thịt", image : "meat.jpg",amount : 2},{name : "Sữa", image : "sua.jpg",amount : 2}];
    let feelCat = 100;
    let foodDog = [{name : "Xương", image : "meat.jpg",amount : 2},{name : "Cơm", image : "com.jpg",amount : 2}];
    let feelDog = 100;
    let toyCat = [{image : "hello-kitty.jfif",amount : 2 },{image : "laze.png", amount : 2}];
    //created oop animals
    let imageCat = "./public/img/cat1.jpg";
    let imageDog = "./public/img/dog-1.png";
    const animals = [
        new animal("Cat",imageCat,foodCat,toyCat,feelCat),
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
                startOopCat(animals[0]);
               
                store_loadToys();
                store_loadFood();
                decreaseFood(oop_cat);
                buyFood();
                buyToys();
                vuotVe();
                animalFeel_toys();
                let checkDied = false;
                let hungryCat = document.getElementById("hungryCat");
                let timeGetFood = setInterval(() => {  
                    if(widthSubt > 100 ){
                        cLoaderLine.style.background = "red";
                        //animals[0].getImage = "./public/img/animal-feel/Doi-an-meo.gif";
                        img_animal_main.src = "./public/img/animal-feel/Doi-an-meo.gif";
                        //Âm thanh đòi ăn
                        
                        hungryCat.play();
                        replayGameFood(widthSubt);
                    }
                    else{
                        //Âm thanh đã ăn
                        cLoaderLine.style.background = "green";
                        hungryCat.pause();
                        // img_animal_main.src = "./public/img/animal-feel/vui-meo.gif";   
                    }
                    cLoaderLine.style.width = "calc(100% - "+widthSubt+"px)"; 
                    widthSubt += 6;
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
function removeListFood(){
    let cFood = document.querySelectorAll('.food');
    cFood.forEach(element => {
        element.remove();
    });
}
function loadFoodAfterBuy(){
    removeListFood();
    oop_cat.getFood.forEach(element => {
        
          div_inside_list_food.insertAdjacentHTML('beforeend'
                ,'<div class="food"><img class="imageFood" src="./public/img/animal-food/cat/'
                +element.image+'" ><p class="amount-food">'+element.amount+'</p></div>');
    });
    decreaseFood(oop_cat);
}

function decreaseFood(oop_cat){
    let cAmount_food = document.querySelectorAll('.amount-food');
    let cFood = document.querySelectorAll('.food');
    let imageFood = document.querySelectorAll('.imageFood');
        cFood.forEach((element,index) => {
            element.addEventListener('click', function(){
                imageFood.forEach((v_image,indexImage) => {
                    v_image.addEventListener('click',function(){
                        if(indexImage  == index){
                            let findIndexSlash = v_image.src.lastIndexOf('/');
                            let subStrURL = v_image.src.substr(findIndexSlash + 1);//Lấy ra tên image 
                            oop_cat.getFood.forEach(item => {
                                if(item.image == subStrURL){
                                    let amount = item.amount - 1;
                                    if(amount == 0){
                                        item.amount = amount;
                                        oop_cat.getFood = oop_cat.getFood.filter((item,indexFilter) => item.amount !== 0);
                                    }
                                    item.amount = amount;  
                                    money += 25;
                                    p_money.innerHTML = "Xu : " + money;
                                    widthSubt -= 50;
                                    cLoaderLine.style.width = "calc(100% - "+widthSubt+")";
                                    let hungryCat = document.getElementById("hungryCat");
                                    hungryCat.pause();
                                    upLevel();
                                    //Âm thanh chọn đồ ăn
                                    let chooseEat = document.getElementById("chooseEat");
                                    chooseEat.play();
                                    // document.getElementById('chooseEat').onclick = function(){
                                    //      chooseEat.play();
                                    // };
                                    loadFoodAfterBuy();
                                }          
                            });  
                        }
                    }); 
                });
            });
        });   
}

//replay game food
function replayGameFood(widthSubt){
    //let idDialogLoseNotice = document.querySelector('#noticeLoseGame');
    //let btnReplay = document.querySelector('#btnReplay');
    if(widthSubt >= 190){
        img_animal_main.src = "./public/img/animal-feel/cat-died.jpg"; 
        $(document).ready(function(){
            $('#modalReplayGame').modal('show');
            //Đã có âm thanh
            let loseGame = document.getElementById('loseGame');
            loseGame.play();
            setTimeout(() => {
                location.reload();
            }, 5000);
        });
    }
   
}
//replay fame toys
function replayGameToys(widthToys_subt){
    if(widthToys_subt >= 190){
        img_animal_main.src = "./public/img/animal-feel/cat-died.jpg"; 
        $(document).ready(function(){
            $('#modalReplayGame').modal('show');
            //Đã có âm thanh
            let loseGame = document.getElementById('loseGame');
            loseGame.play();
            setTimeout(() => {
                location.reload();
            }, 5000);
        });
    }
}

//Food
function buyFood(){
    let store_food = document.querySelectorAll('.store-food');
    let imageFood = document.querySelectorAll('.store-image-food');
    let priceFood = document.querySelectorAll('.store-price-food');
    store_food.forEach((element,index) => {
        element.addEventListener('click', function(){
            imageFood.forEach((v_image,indexImage) => {
                priceFood.forEach((v_price,indexPrice) => {
                    if(indexPrice == indexImage && indexPrice == index){
                        let imageUrl = v_image.src;
                        let price = v_price.innerHTML; 
                        let check = false;
                        if(price > money){
                             $(document).ready(function(){
                                $('#modalNoticeStore').modal('show');
                            });
                        }
                        else{
                            oop_cat.getFood =   oop_cat.getFood.map(item => {
                                var temp = Object.assign({},item);
                                let str_imageURL = 'http://127.0.0.1:5501/Do_An_Cuoi_Ki_FE2/public/img/animal-food/cat/' + temp.image;
                                if(imageUrl === str_imageURL){
                                    check = true;
                                    temp.amount = item.amount + 1;  
                                }
                                return temp;
                            });
                            if(check == false){
                                let findIndexSlash = imageUrl.lastIndexOf('/');
                                let subStrURL = imageUrl.substr(findIndexSlash + 1);//Lấy ra tên image 
                                oop_cat.getFood = [...oop_cat.getFood,{name : "vv",image : subStrURL , amount : 2}];
                            }
                            let calcMoney = money - price;
                            p_money.innerHTML = calcMoney;
                            money = calcMoney;
                            //Âm thanh mua đồ ăn
                            let buy = document.getElementById("buy");
                            buy.play();
                            loadFoodAfterBuy();
                        }
                    }
                });
            });
        });
    });
}


//Implement function check price when player buy food or toys
function check_price_FoodOrToys(moneyCurrent,price){
    if(moneyCurrent < price){
          $(document).ready(function(){
            $('#modalNoticeStore').modal('show');
        });
    }
    else{
        let moneyResult = moneyCurrent - price;
        p_money.innerHTML = "Xu : " + moneyResult;
        money = moneyResult;
    }
}
//Toys
function animalFeel_toys(){
    //loadToys();
    decreaseToy(oop_cat);
    let setTimeFeel;
    let hungryCat = document.getElementById("hungryCat");
    let timeGetToys = setInterval(() => {
        if(widthToys_subt > 100){
            cssload_line_toys.style.background = "#f6b93b";
            //Âm thanh buồn
            setTimeout(() => {
                img_animal_main.src = "./public/img/animal-feel/buon-meo.gif";
            }, 2000);
            hungryCat.play();
            replayGameToys(widthToys_subt);    
        }
        else{
            //Âm thanh vui vẻ
            hungryCat.pause();
            cssload_line_toys.style.background = "dodgerblue"; 
            
            img_animal_main.src = "./public/img/animal-feel/vui-meo-2.gif";     
        }
        widthToys_subt += 5;
        cssload_line_toys.style.width = "calc(100% - "+widthToys_subt+"px)";
    }, 1000);
}
//Implement function player choose toys 
function decreaseToy(oop_cat){
    let cAmount_toy = document.querySelectorAll('.amount-toy');
    let cToys = document.querySelectorAll('.toys');
    let imageToy = document.querySelectorAll('.imageToy');
        cToys.forEach((element,index) => {
            element.addEventListener('click', function(){
                imageToy.forEach((v_toy,indexToy) => {
                    v_toy.addEventListener('click',function(){
                        if(indexToy  == index){
                            let findIndexSlash = v_toy.src.lastIndexOf('/');
                            let subStrURL = v_toy.src.substr(findIndexSlash + 1);//Lấy ra tên image 
                            oop_cat.getToy.forEach(item => {
                                if(item.image == subStrURL){
                                    let amount = item.amount - 1;
                                    if(amount == 0){
                                        item.amount = amount;
                                        oop_cat.getToy = oop_cat.getToy.filter((item,indexFilter) => item.amount !== 0);
                                    }
                                    if(subStrURL == 'meme-toy1.jfif' || subStrURL == 'ball.jpg' || subStrURL == 'toys-mouse-blue.jpg'){
                                        item.amount = amount;  
                                        money += 50;
                                        p_money.innerHTML = "Xu : " + money;
                                        widthToys_subt -= 70;
                                        cssload_line_toys.style.width = "calc(100% - "+widthSubt+")";
                                        upLevel();
                                    }
                                    else{
                                        item.amount = amount;  
                                        money += 50;
                                        p_money.innerHTML = "Xu : " + money;
                                        widthToys_subt -= 50;
                                        cssload_line_toys.style.width = "calc(100% - "+widthSubt+")";
                                        upLevel();
                                    }
                                    //Âm thanh chọn đồ chơi
                                    let chooseEat = document.getElementById("chooseEat");
                                    chooseEat.play();
                                    loadToyAfterBuy();
                                }          
                            });  
                        }
                    }); 
                });
            });
        });   
}
function removeListToy(){
    let cToy = document.querySelectorAll('.toys');
    cToy.forEach(element => {
        element.remove();
    });
}
function loadToyAfterBuy(){
    removeListToy();
    oop_cat.getToy.forEach(element => {
          cInside_list_toys.insertAdjacentHTML('beforeend'
          ,'<div id="toys" class="toys"><img class="imageToy" src="./public/img/animal-toys/'
                +element.image+'"><p class="amount-toy">'+element.amount+'</p></div>');
    });
    decreaseToy(oop_cat);
}
//Toys
function buyToys(){
    let store_toy = document.querySelectorAll('.store-toys');
    let imageToy = document.querySelectorAll('.store-image-toy');
    let priceToy = document.querySelectorAll('.store-price-toy');
    store_toy.forEach((element,index) => {
        element.addEventListener('click', function(){
            imageToy.forEach((v_image,indexImage) => {
                priceToy.forEach((v_price,indexPrice) => {
                    if(indexPrice == indexImage && indexPrice == index){
                        let imageUrl = v_image.src;
                        let price = v_price.innerHTML; 
                        let check = false;
                        if(price > money){
                             $(document).ready(function(){
                                $('#modalNoticeStore').modal('show');
                                //Âm thanh không đủ tiền
                                let noMoney = document.getElementById("noMoney");
                                noMoney.play();
                            });
                        }
                        else{
                            oop_cat.getToy =   oop_cat.getToy.map(item => {
                                var temp = Object.assign({},item);
                                let str_imageURL = 'http://127.0.0.1:5501/Do_An_Cuoi_Ki_FE2/public/img/animal-toys/' + temp.image;
                                if(imageUrl === str_imageURL){
                                    check = true;
                                    temp.amount = item.amount + 1;  
                                }
                                return temp;
                            });
                            if(check == false){
                                let findIndexSlash = imageUrl.lastIndexOf('/');
                                let subStrURL = imageUrl.substr(findIndexSlash + 1);//Lấy ra tên image 
                                oop_cat.getToy = [...oop_cat.getToy,{image : subStrURL , amount : 2}];
                            }
                            let calcMoney = money - price;
                            p_money.innerHTML = calcMoney;
                            money = calcMoney;
                            //Âm thanh mua đồ chơi
                            let buy = document.getElementById("buy");
                            buy.play();
                            loadToyAfterBuy();
                        }
                    }
                });
            });
        });
    });
}

function store_loadToys(){
    if(imgStoreToys != null){
        imgStoreToys.map((item) => cStore_list_toys.insertAdjacentHTML('beforeend'
          ,'<div class="col-md-6 store-toys"><img class="store-image-toy" src="./public/img/animal-toys/'+item.image
        +'"><p class="store-price-toy">'+item.price+'</p></div>'))
    }
}
function store_loadFood(){
    if(imgStoreFood != null){
        imgStoreFood.map((item) => cStore_list_food.insertAdjacentHTML('beforeend'
          ,'<div class="col-md-6 store-food"><img class="store-image-food" src="./public/img/animal-food/cat/'+item.image
        +'"><p class="store-price-food">'+item.price+'</p></div>'))
    }
}



//vuot ve thu cung
function vuotVe(){
    let image_animal_main = document.querySelector('#img-animal-main');
    let cFeel = document.querySelector('.feel');
    image_animal_main.addEventListener('click',function(){
        cFeel.style.display = "block";
        let feelNumber = 10;
        widthToys_subt -= 50;
        cFeel.innerHTML = "+" + feelNumber;
        //Âm thanh vuốt ve 
        let catCute = document.getElementById("catCute");
        catCute.play();
        let setTime_vuotve = setTimeout(() => {
            catCute.pause();
        }, 2000);
        cssload_line_toys.style.width = "calc(100% - "+widthToys_subt+")";
        let dem = 1;
        let setTimeNoneFeel = setTimeout(() => {
            cFeel.style.display = "none";
            if(widthToys_subt < 0){
                money += 200;
                p_money.innerHTML = money;
              
                //Âm thanh thưởng tiền
            }
        }, 7000);
    });
} 
