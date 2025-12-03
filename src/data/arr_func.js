
console.log('js arr 관련 함수');

let arr = [10, 20, 30, 40];

//js 유용한 함수

// 1) map

arr.map(function () { // 배열의 요소들 접근 반복 실행하면서 return 가능
    console.log('arr map');

})

arr.forEach(function (v) { // arr만큼 반복문
    console.log('forEach' + v);
})

arr.map(function (item) { // 매개변수 1개 item 배열의 값 주입 반복
    console.log('arr map' + item);
})
arr.map(function (item, index) { // 매개변수 2개 item 배열값 index 인덱스값 주입 반복
    console.log('arr map' + item + 'index :' + index);
})

let result = arr.map(function () { //차이점 : 리턴해서 결과값 만들 수 있음 [99,99,99,99] 나옴 
    return 99;
})
console.log(result);
let result2 = arr.map(function (item) { // 언디파인만 4개뜸
    console.log(item);
})
console.log(result2);
let result3 = arr.map(function (item) { //[110,120,130,140]
    return item + 100;
})
console.log(result3);
let result4 = arr.map(function (item) { //[110,120,130,140]
    return '가지고 있는 값:' + item;
})
console.log(result4);

let menuArr = ['우동', '라면', '김밥'];
let result5 = menuArr.map(function (name) {
    return '<p>' + name + '</p>'; //'p'는 리액트에서 사용
})
console.log(result5);

let result6 = menuArr.map((name)=>'<p>'+name+'</p>'); // => 뒤에 {}없으면 바로 리턴으로 인식

//2) filter
//
arr = [10,20,30,40];
//실행 결과가 참(true) 결과만 return

let result7= arr.filter((value)=>{
    return true;
})
console.log(result7);

let result8= arr.filter((value)=>{
    return value>10;
})
console.log(result8);

let result9= arr.filter((value)=>{
    return value!=30;
})
console.log(result9);

//3)find
let result10=arr.find((value)=>{
    return value ==20; //못찾으면 undefined;
})
console.log(result10);
//4)findIndex
let result11=arr.findIndex((value)=>{
    return value ==20; //못찾으면 -1;
})
console.log(result11);

//return
let arr2 = [10,20,30];
console.log(arr2[2]);

let [n1,n2,n3] = [77,88,99];
console.log(n1,n2,n3);

let [num, setNum] = [77,88];

let obj = {
    num1:30,
    num2:50
}

let obj2 = obj;
console.log(obj2.num1);

let {num1,num2} = obj;
console.log(num1,num2);