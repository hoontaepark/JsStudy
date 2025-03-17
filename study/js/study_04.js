// JS에서 배열은 일반적인 배열이랑다름
// 일반적인 배열은 하나의 데이터타입만 넣을수있음, 하지만 JS는 다름
const arr = [1, 'str', false];  //이런식으로 가능
// JS는 배열도 객체

// 배열 값변경
const arr2 = [1,2,3]
arr[2]=4;
console.log(arr);

// 배열 삭제
delete arr[2];
console.log(arr);

//배열맨끝에 요소추가
arr2.push(4);
console.log(arr2);

// 배열 맨끝요소삭제
arr2.pop();
console.log(arr2);

// 맨앞요소삭제
arr2.shift();
console.log(arr2);

// 맨앞에 요소추가
arr2.unshift(3);
console.log(arr2);

// splice, 배열의 특정부분을 삭제하거나 추가할수있음
arr2.splice(1,1); //index1부터 요소 1개를 지움. 
console.log(arr2);

// 배열의 특정부분을 추가
arr2.splice(4,0,2); //index4에 2를 요소2를 추가. 
console.log(arr2);

arr2.splice(4,0,2, 3, 4); //index4이부터 2,3,4를 추가 이런식으로 계속 추가가능. 
console.log(arr2);

// slice =start 부터 end전까지 잘라서 새로운 배열을 만듬.
const arr3 = arr2.slice(0,3);
console.log(arr3);

// concat = 배열을 합쳐서 새로운 배열을 만듬.
const arr4 = arr2.concat(arr3);
console.log(arr4);

// forEach = 배열의 요소를 하나씩 꺼내서 함수를 실행함.
arr2.forEach(item => console.log(item));

// 배열탐색
arr5 = [1,2,3,4,5,6,7,8,9,10];
const result = arr.indexOf(4,0); //index[0]에서부터 요소4를찾는다있으면 인덱스반환 업으면 -1반환. 
console.log(result);

// includes = 배열에 요소가 있는지 확인함. 있으면 true 없으면 false
const result2 = arr5.includes(4);
console.log(result2);

// find = 배열에서 조건에 맞는 요소를 찾아서 반환함.
const result3 = arr5.find(item => item > 5);
console.log(result3);

// filter = 배열에서 조건에 맞는 요소를 찾아서 배열로 반환함.
const result4 = arr5.filter(item => item > 5);
console.log(result4);

