const el = document.getElementById('first')
el.className = 'gray'
console.log(el)

const el2 = document.querySelector('.red')
console.log(el2)

const el3 = document.querySelectorAll('.red')
console.log(el3)

const el4 = document.querySelector('h3') 
if(el4.hasAttribute('id')){ //id라는 속성을 가지고있으면 hi를 출력 
    console.log('hi')
    el4.setAttribute('id','hi') //id의 h3가 hi로 바뀜 
    console.log(el4.getAttribute('id'))
}

const el5 = document.getElementById('.h3');
el5.textContent = 'hello' //요소를 선택해서 Text를 바꿈. 
console.log(el5.textContent);

const newEl = document.createElement('li')
const newText = document.createTextNode('사번')
newEl.appendChild(newText) 

const container = document.querySelector('ul')
container.appendChild() //ul에 conatainer 추가. 
console.log(container)

//h3스타일링 변경
const el6 = document.querySelector('h3')
el6.style.backgroundColor = 'red'; 