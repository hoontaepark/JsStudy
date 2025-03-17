// 원시타입, 객체타입이 존재함.
// JS에서는 거의 모든것이 객체임, 객체는 Key,Value의 형태

// 객체타입안에 함수를 선언가능 이 함수를 메소드라고 함.
const obj = {
    name: 'park',
    age : '25',
    say : function(){
        console.log('hi'); //리터럴방식 
    },
    arr : [1,2,3],
    objobj :{
        name : 'hello'
    }

}

//배열도 객체타입
const arr = [1,2,3];
console.log(arr[0]);

// 객체를 생성하는 방법
// 생성자 함수, 리터럴 방식
// 객체접근강법, 대괄호, 마침표 방법
// 대괄호방법
console.log(obj["name"]);

// 배열에접근하려면
console.log(obj['arr']);

// 객체접근도가능
console.log(obj['objobj']);
// 객체안의 객체안의 키값
console.log(obj['objobj']['name']);
// 배열접근
console.log(obj['arr'][0]);
// 함수
console.log(obj['say']);

// 마침표방법
// name 접근
console.log(obj.name);
// 배열인덱스접근
console.log(obj.arr[0]);
// 객체안의객체
console.log(obj.objobj.name);
// 함수
console.log(obj.say());

// key값 변경
// 대괄호방법
obj['name'] = 'lee';
console.log(obj['name']);
// 마침표방법
obj.name = 'kim';
console.log(obj.name);