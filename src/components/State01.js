import { useState } from "react";


function State01() {


    //useState ->상태를 저장하는 변수, 재랜더링이 되어도 값이 유지
    //state 변수 값이 set 함수를 통해서 변경 된 경우! -> 화면 재랜더링


    let cnt = 0;
    //const|let [변수명, set함수명] = useState(초기값);

    let [count, setCount] = useState(0);
    let [num, setNum] = useState(0);

    return (
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>

            <button onClick={()=>{
                console.log('cnt증가버튼 눌림');
                cnt++;
                console.log(cnt);

                num++
                console.log(num);
            }}>cnt증가버튼</button>

            <br />
            <p>{count}</p>
            <button onClick={function(){
                // count++;  값은 증가 하지만 랜더링 x
                setCount(count+1); //재랜더링 발생!
                setNum(num); //재랜더링 발생 조건 -> 인근에 있는 재렌더링 요소를 모아서 한번에 수행
                console.log(count);
            }}>count 증가 버튼</button>
        </div>
    )


}

export default State01;