document.querySelector('.button').addEventListener('click',function(){
    alert('hello')
})

console.log(this) //js에서 this를 선언하면 윈도우창을 띄워줌

const btn = document.querySelector('.button')
btn.addEventListener('click',function(e){ //이벤트루프에서는 요소가 출력이된다. 
    console.log(e.currentTarget)
    console.log(e.currentTarget === this) //this는 요소를 가르킴 
})

const body = document.querySelector('body')
const div = document.querySelector('div')
const button = document.querySelector('button')

body.addEventListener('click',function(){ //이벤트 버블링, 버튼클릭시, button -> div -> body순으로 console이 출력
    console.log('body') //true로 바꿀시, 캡쳐링, 부모 -> 자식 순으로console 출력 
},true)

body.addEventListener('click', function(){
    console.log('div')
})

body.addEventListener('click', function(){
    console.log('button')
})

const div2 = document.querySelector('div2')
div2.addEventListener('click',function(e){
    console.log(this === e.currentTarget) //currentTarget는 이벤트에 바인딩된 요소를 가르킴. 
})




