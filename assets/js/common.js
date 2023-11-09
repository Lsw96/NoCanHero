$('.switch').on('click', () => {
    const bodyHasDarkClass = $('body').hasClass('dark'); // body 요소에 'dark' 클래스가 있는지 확인합니다.
    const aboutHasWhiteClass = $('.about-content').hasClass('white'); // '.about-content' 요소에 'white' 클래스가 있는지 확인합니다.

    $('.switch').toggleClass('active');
    $('body').toggleClass('dark', !bodyHasDarkClass); // 'dark' 클래스를 토글하되, 기존에 'dark' 클래스가 있으면 제거합니다.
    $('.about-content').toggleClass('white', !aboutHasWhiteClass); // 'white' 클래스를 토글하되, 기존에 'white' 클래스가 있으면 제거합니다.
    $('.about-text').toggleClass('black');
});

$('.about-text ul li').each(function() {
    $(this).on('click', function() {
        $('.about-text ul li').removeClass('actives');
        $(this).toggleClass('actives');
    });
});