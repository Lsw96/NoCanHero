console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(1%2);
console.log("This is 'String'");
console.log('This is "String"');
console.log("This is \"String\"");
console.log('This is \'String\'');
console.log("이름\t나이");
console.log("안녕\n하세오");
console.log("\\\\");
console.log("가나다" + "라마" + "바사아" + "자차카타" + "파하");
console.log("안녕하세오"[0]);
console.log("안녕하세오"[1]);
console.log("안녕하세오"[3]);
let str_01 =`
Hi!
    It's me!
             JavaScript!
So Cool!`;
console.log(str_01);
console.log(52 < 273);
console.log(52 > 273);
console.log("하마" < "가방");
let hours = (new Date()).getHours();
console.log(hours < 3 || 8 < hours);
console.log(3 <= hours && hours <= 8);
let pi = 3.14159265;
let radius = 10;
console.log(`둘레: ${2 * pi * radius}`);
console.log(`넓이: ${pi * radius * radius}`);
// let output = 0;
// output += 52;
// output += 273;
// output += 103;
// console.log(output);
let output = "hello ";
    output += "world ";
    output += "!";
console.log(output);
let number = 10;
console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);
console.log(typeof('String')); //String
console.log(typeof(273)); //Number
console.log(typeof(true)); //Boolean
console.log(typeof(function () { })); //function
console.log(typeof({})); //Object
console.log(typeof(alpha)); //Undefined
console.log(typeof(null)); //Object
console.log(Number("52"));
console.log(Number("52.273"));
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("안녕하세오")); //NaN
let nan = Number("안녕하세요");
console.log(nan == nan);
console.log(nan != nan);
console.log(isNaN(nan));
console.log(Boolean(0));
console.log(Boolean(nan));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(!!0);
console.log(!!nan);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);