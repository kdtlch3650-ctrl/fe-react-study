import { useState } from "react";

function State03(){

    // let arr = [1,2,3,4,5]

    let [arr,setarr] = useState([1,2,3,4,5]);

    const btn_func = function(){
        // arr.push(9);
        // setarr(arr); //배열일 경우에 가리키는 대상이 주소이기 떄문에 주소의 갱신이 일어나야 스테이트가 발생

        
        let temp = [...arr]; // 깊은 복사
        temp.push(9);
        setarr(temp);
        console.log(arr);
    }

    return(
        <div>
            <button onClick={()=>btn_func()}>버튼~</button>
            {
                arr.map((val)=>{
                    return <p>{val}</p>
                })
            }
        </div>
    );

}

export default State03;