function News01(){
    return(
        <div className="post-list">
                <h4 onClick={() => {
                    // 순수 함수 영역이기에 if 문 가능
                    //return 밖에다 하는것과 같음
                    // if (modalFlag == true) {
                    //     setModalFlag(false);
                    // } else {
                    //     setModalFlag(true);
                    // }

                    // setModalFlag(modalFlag ? false :true); //참이면 거짓반환 거짓이면 참반환

                    setModalFlag(!modalFlag); //!true => false;

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