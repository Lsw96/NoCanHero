"use strict";
// "use strict"; 엄격모드를 사용한다 strict(엄격한)은 함수호출에서 제공한대로 값이 정확하게 사용됨을 의미
// 변수만들기 타입종류: string number boolean null undefined···
let 이름 = 'kim'; // 이 변수엔 string 문자형타입만 들어올 수 있다.
let 이룸 = ['kim', 'park']; // ArrayType string 문자형만 담긴 array만 들어올 수 있다.
let 이롬 = { name: 'kim' }; // ObjectType ?는 옵션으로 name가 들어올 수도있고 안 들어올 수도있다.
let 이릉 = 'kim'; // UnionType 문자형 또는 숫자형이 들어올 수 있다.
let 위름; // 타입실드 해제문법(모든자료형타입 허용) / 타입관련버그가 나도 잡아주지 않음
let 위룸; // any보다 안전함(모든 자료형타입 허용) / 해제 안함 / 수학연산안됨 
let 이룽 = 123;
// 함수를 만들때 타입지정 가능
function 함수(x) {
    return x * 2;
}
함수(123);
let john = [123, true];
let johns = { name: 'kim', age: '123' };
//class 타입지정
class User {
    constructor(name) {
        this.name = name;
    }
}
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
// object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
// 근데 제목과 가수는 문자만 들어올 수 있어야합니다.
let favorite = { song: '제주도', singer: '태연' };
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
