// 함수선언문
function calculate(number){
    return number * number;
}

// 함수표현식, result 변수에 함수를 할당 이걸 함수표현식이라고함. 익명함수. 
var calculate = function calculate(number){
    return number * number;
}

//화살표함수, return을 생략할수있음. 
const calculate = () => 2

let result = calculate();
console.log(result);

// 함수scope, block scope
//함수scope 함수에서 정의한 블록문만 사용이 인정되는것, var 함수scope let 블록scope
let a = 30;
function cal(){
    let a = 30;
    console.log(a);
}

cal(); 
// 전역으로 a를선언해서 출력이됨 
console.log(a);  //함수 내부에서 선언한건 함수내부에서만 선언가능, RefreneceError 가 발생 

//블록scope, 선언된 블록내에서만 접근이가능함.
let k = 20;
{
    let b = 30;
    console.log(b);
    console.log(k); //둘다 나옴 
}

// 함수의 우선순위
// let 은 중복으로 선언이 불가능하지만, 재선언 불가능 함수안에서는 가능함, let은 블록밖에서도 선언이가능함.

var c = 10;

function cal(){
    var c = 2; //var은 재선언이 가능하다. 함수스코프임.
    console.log(c);
}

cal(); //a의 값은 2로 바뀌고 2가 출력된다. 

// 함수호이스팅
// 할당이 아닌 선언문을 끌어올림.

cal(); //호이스팅, 함수를 먼저 선언하고 호출은 나중에한다. 선언을 최우선으로 함.
function cal(){ 
    console.log('계산');
}

//함수표현식은 호이스팅이 되지않음.
cal();  //호이스팅이 되지않아서 호출이안됨. 
var cal = function(){
    console.log('계산');
}

function cal(a,b){
    return a+b;
}

console.log(cal(1,2));