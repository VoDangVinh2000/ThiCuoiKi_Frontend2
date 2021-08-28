

// Xử lí hiển thị thông báo chào người chơi

// Ẩn hiện massage
const finish__massage = document.querySelector('.finish__massage');

finish__massage.addEventListener('click', () => {
    let title__instructor = document.querySelector('.title__instructor');
    let img__instructor = document.querySelector('.img__instructor');

    title__instructor.style.display = 'none';
    img__instructor.style.display = 'none';
});

// Close massage
document.querySelector('.close').addEventListener('click', () => {
    let title__instructor = document.querySelector('.title__instructor');
    let img__instructor = document.querySelector('.img__instructor');

    title__instructor.style.display = 'block';
    img__instructor.style.display = 'block';
})

//Bắt sự kiện khi người dùng nhấn key code
document.addEventListener('keydown', key => {
    let title__instructor = document.querySelector('.title__instructor');
    let img__instructor = document.querySelector('.img__instructor');

    if(key.keyCode === 27){
        title__instructor.style.display = 'block';
        img__instructor.style.display = 'block';
    }

})

// Xử lý khi người dùng chưa nhập tên



// Hiển thị tên người chơi
const get__name__player = document.querySelector('.get__name__player');

get__name__player.addEventListener('click', () => {
    let instructor__name = document.querySelector('.instructor__name');
    let name__title = document.querySelector('.name__title');
    let name__player = document.querySelector('.name__player');
    let img__instructor = document.querySelector('.img__instructor');
    let error__name = document.querySelector('.error__name');


    if(name__player.value === ''){
        error__name.style.display = 'block';
    }else{   
        name__title.innerHTML = name__player.value;
        instructor__name.style.display = 'block';
        img__instructor.style.display = 'block';
        //add data-dismiss cho thẻ modal bằng Jquery
        $('button.get__name__player').attr("data-dismiss","modal");
    }
    
});


// Kết thúc chào người chơi
const end__finish = document.querySelector('.end__finish');

end__finish.addEventListener('click', () => {
    let hello__name__player = document.querySelector('.hello__name__player');
    hello__name__player.style.display = 'none';
});




