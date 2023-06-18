const cursor = document.querySelector(".cursor");
const cursorRect = cursor.getBoundingClientRect();
document.querySelector(".eye-wrap").addEventListener("mousemove", (e) => {
    // console.log("===============================")
    // console.log("cursor = " + cursor)
    // console.log("cursorRect = " + cursorRect)
    // 커서
    gsap.to(cursor, {
        duration: .5,
        left: e.pageX - cursorRect.width / 2,
        top: e.pageY - cursorRect.height / 2,
    })

    // 마우스 좌표 값
    let mousePageX = e.pageX;
    let mousePageY = e.pageY;

    // 전체 가로
    // window.innerWidth;		//1920 : 브라우저 크기
    // window.outerrWidth;		//1920 : 브라우저 크기 (스크롤바 포함)
    // window.screen.width;		//1920 : 화면 크기

    // 마우스 좌표 값 가운데로 초기화
    // 전체 길이/2 - 마우스 좌표값 == 0
    let centerPageX = window.innerWidth / 2 - mousePageX;
    let centerPageY = window.innerHeight / 2 - mousePageY;

    // 이미지 움직이기
    const imgMove01 = document.querySelector(".eye-box");
    // imgMove.style.transform = "translate("+centerPageX / 20 +"px, "+ centerPageY / 20 +"px)";
    // js를 쓰면 부드럽지가않아서 gsap로 더 부드럽게
    gsap.to(imgMove01, {
        duration: .3,
        x: centerPageX / -35,
        y: centerPageY / -35,
    })

    const imgMove02 = document.querySelector(".eye");
    gsap.to(imgMove02, {
        duration: .3,
        x: centerPageX / -25,
        y: centerPageY / -25,
    })

    const imgMove03 = document.querySelectorAll(".eye-mini");
    gsap.to(imgMove03, {
        duration: 1,
        x: centerPageX / 50,
        y: centerPageY / 50,
    })
    const imgMove04 = document.querySelectorAll(".eye-mini")[2];
    gsap.to(imgMove04, {
        duration: 1,
        x: centerPageX / 40,
        y: centerPageY / 40,
    })
    const imgMove05 = document.querySelectorAll(".eye-mini")[4];
    gsap.to(imgMove05, {
        duration: 1,
        x: centerPageX / 35,
        y: centerPageY / 35,
    })
    const imgMove06 = document.querySelectorAll(".eye-mini")[5];
    gsap.to(imgMove06, {
        duration: 1,
        x: centerPageX / 30,
        y: centerPageY / 40,
    })
    const imgMove08 = document.querySelectorAll(".eye-mini")[8];
    gsap.to(imgMove06, {
        duration: 1,
        x: centerPageX / 25,
        y: centerPageY / 40,
    })
});

document.querySelector(".eye-wrap").addEventListener("mouseout", (e) => {
    // 커서
    gsap.to(cursor, {
        duration: .5,
        left: e.pageX - cursorRect.width / 2,
        top: e.pageY - cursorRect.height / 2,
    })

    // 마우스 좌표 값
    let mousePageX = e.pageX;
    let mousePageY = e.pageY;

    // 전체 가로
    // window.innerWidth;		//1920 : 브라우저 크기
    // window.outerrWidth;		//1920 : 브라우저 크기 (스크롤바 포함)
    // window.screen.width;		//1920 : 화면 크기

    // 마우스 좌표 값 가운데로 초기화
    // 전체 길이/2 - 마우스 좌표값 == 0
    let centerPageX = window.innerWidth / 2 - mousePageX;
    let centerPageY = window.innerHeight / 2 - mousePageY;

    // 이미지 움직이기
    const imgMove01 = document.querySelector(".eye-box");
    // imgMove.style.transform = "translate("+centerPageX / 20 +"px, "+ centerPageY / 20 +"px)";
    // js를 쓰면 부드럽지가않아서 gsap로 더 부드럽게
    gsap.to(imgMove01, {
        duration: .3,
        x: 0,
        y: 0,
    })

    const imgMove02 = document.querySelector(".eye");
    gsap.to(imgMove02, {
        duration: .3,
        x: 0,
        y: 0,
    })

    const imgMove03 = document.querySelectorAll(".eye-mini");
    gsap.to(imgMove03, {
        duration: 1,
        x: 0,
        y: 0,
    })
    const imgMove04 = document.querySelectorAll(".eye-mini")[2];
    gsap.to(imgMove04, {
        duration: 1,
        x: 0,
        y: 0,
    })
    const imgMove05 = document.querySelectorAll(".eye-mini")[4];
    gsap.to(imgMove05, {
        duration: 1,
        x: 0,
        y: 0,
    })
    const imgMove06 = document.querySelectorAll(".eye-mini")[5];
    gsap.to(imgMove06, {
        duration: 1,
        x: 0,
        y: 0,
    })
    const imgMove08 = document.querySelectorAll(".eye-mini")[8];
    gsap.to(imgMove06, {
        duration: 1,
        x: 0,
        y: 0,
    })
});