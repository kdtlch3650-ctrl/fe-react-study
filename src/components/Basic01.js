

function Basic01() {

    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";

    let himsg = "";

    let flag = true;

    for (let i = 1; i <= 10; i++) {
        himsg += "안녕~";
    }

    return (
        <div className="App">
            <h1>React Basic01</h1>
            <h2 className="">{hello}</h2>
            {
                //if문 불가 삼항연산자 가능
                flag == true ? <h2>{hello}</h2> : <h2>{hello2}</h2>
            }
            {/* <h2>{hello2}</h2> */}
            {
                flag == false && <h2>{hello2}</h2>
            }
            {
                flag == true && <h2>{hello2}</h2>
            }

            <h2 style={{ color: 'blue', fontSize: '20px' }}>{himsg}</h2>
        </div>
    );
}

export default Basic01;