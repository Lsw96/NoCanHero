function images(){
    let imgBox = document.querySelector('.whitePart');
    const imgBoxPosition = imgBox.getBoundingClientRect().top;
    // console.log(imgBoxPosition);

    const imgs01 = document.querySelector('.eyeEndding img:nth-of-type(2)')
    const imgs02 = document.querySelector('.eyeEndding img:nth-of-type(3)')

    if ( imgBoxPosition < -1386 ) {
        imgs01.style.top = '-10%';
    }
    else if ( imgBoxPosition < -1150 ) {
        imgs02.style.top = '-5%';
    }
    else {
        imgs01.style.top = '-50%';
        imgs02.style.top = '-50%';
    }
};

function mousePoint(){
    let mouseBox = document.querySelector('.whitePart');
    const mouseBoxPosition = mouseBox.getBoundingClientRect().top;
    // console.log(mouseBoxPosition);
    const mouses = document.querySelector('.eyeEndding .eye-moves');

    if ( mouseBoxPosition < -2550 ) {
        mouses.style.opacity = '0';
    }
    else {
        mouses.style.opacity = '1';
    }
};

window.addEventListener('scroll', function(){
    images();
    mousePoint();
});