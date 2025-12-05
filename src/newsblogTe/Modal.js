
function Modal(probs) {
    return (
        <div className="modal" style={{backgroundColor:probs.bgColor}}>
            <h3>{probs.title} ❤ {probs.likeCount}</h3>
            
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                let temp = [...probs.news];
                temp[0] = '긴급뉴스';
                probs.setNews(temp);
            }}>첫줄긴급변경</button>
        </div>
    );
}

export default Modal;