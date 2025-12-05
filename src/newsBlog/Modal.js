function Modal({probs}) {
    return (
        <div className="modal">
            <h3>{probs.ptitle}</h3>
            <p>{probs.pday}</p>
            <p>{probs.pcontent}</p>
            <button onClick={() => {
                let temp = [...probs.news];
                temp[0] = 'Today News';
                probs.setNews(temp);
            }}>첫글 제목 긴급 변경</button>
        </div>
    );
}

export default Modal;