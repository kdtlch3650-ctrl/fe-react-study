function News01(){
    return(
        <div className="post-list">
                <h4 onClick={() => {
                    setModalFlag(!modalFlag);
                }}>{news[0]} <span onClick={(event) => {
                    event.stopPropagation(); //이벤트 발생을 추가로 전파(전달) stop
                    setLikeCount(likeCount++) //하트 갯수 증가 + 재랜더링
                }}>🖤</span>{likeCount}
                </h4>
                <p>내용</p>
            </div>
    );
}

export default News01;