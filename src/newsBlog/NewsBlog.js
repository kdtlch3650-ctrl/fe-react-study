import './NewsBlog.css'
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //하드코딩 (텍스트를 직접) vs 변수 vs state 변수
    let title = "React Study";

    // let [news1, setNews1] = useState('오늘의 뉴스');
    // let [news2, setNews2] = useState('어제의 뉴스');
    // let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);
    return (
        <div>
            <div className="black-nav">
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>



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
            <div className="post-list">
                <h4>{news[1]}</h4>
                <p>내용</p>
            </div>
            <div className="post-list">
                <h4>{news[2]}</h4>
                <p>내용</p>
            </div>
            {/* <div className="post-list">
                <h4>{news[0]}</h4>
                <p>내용</p>
            </div>
            <div className="post-list">
                <h4>{news2}</h4>
                <p>내용</p>
            </div>
            <div className="post-list">
                <h4>{news3}</h4>
                <p>내용</p>
            </div> */}

            {
                // modalFlag == true ? <Modal/>:null
            }
            {
                modalFlag && <Modal />
            }
        </div>
    );
}
export default NewsBlog;