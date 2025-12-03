function State02() {

    //실제 데이터 여러개로 반복
    let msgArr = ["안녕", "안녕", "안녕", "안녕"];

    //단순 반복용도로 사용할 배열
    let numArr = [1, 1, 1, 1, 3];

    //화면에 여러개 표시하는 내용을 반복문으로
    let elArr = [];
    for (let i = 1; i <= 5; i++) {
        elArr.push(<p>Hi hello~{i}</p>);
    }

    let text = "";
    for (let index = 0;index < 5; index++) {
        text += "<p>Hi Hello~</p>";
    }


    return (
        <div>
            {
                msgArr.map(function (msg) {
                    return (
                        <p>{msg}</p>
                    )
                })
            }

            <hr />

            {
                numArr.map(() => {
                    return (
                        <p>안녕하세요~</p>
                    )
                })
            }

            <hr />
            {elArr}
            <hr />
            {text}
        </div>
    )
}
export default State02;