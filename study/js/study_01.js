if(false === false){ // === 값과 타입이 모두 같아야 true, == 값만 같으면 true 
    console.log(false)
}


console.log(typeof(1))
console.log(typeof(undefined))

let name = '철수'

switch (name){

    case 영희:
        console.log(1);
    break;
    case 철수:
        console.log(2);
    break;
    default:
        console.log('default');

}

for(let i=0; i<10; i++){
    console.log(i);
}


let count = 0;
while(count < 10){
    console.log(count);
    count++;
}
