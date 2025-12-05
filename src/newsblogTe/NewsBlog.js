import './NewsBlog.css';
import { use, useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //하드코딩(텍스트를 직접) vs  변수  vs state변수
    let title = "React Study";

    // let [news1, setNews1] = useState('오늘의 뉴스');
    // let [news2, setNews2] = useState('어제의 뉴스');
    // let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    let [likeCount, setLikeCount] = useState(0);


    let [modalFlag, setModalFlag] = useState(false);

    let [selectedTitle, setselectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState();

    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>


            {
                news.map((item, index) => {
                    return (
                        <div className='post-list'>
                            <h4 onClick={() => {

                                setModalFlag(!modalFlag);

                                setselectedTitle(item);

                                setSelectedLikeCount(likeCountArr[index])
                            }}>{news[index]}
                                <span onClick={(event) => {
                                    event.stopPropagation();
                                    let temp = [...likeCountArr];
                                    temp[index] += 1;
                                    setLikeCountArr(temp);
                                }}> ❤</span> {likeCountArr[index]}
                            </h4>
                            <p>내용</p>
                            <button onClick={() => {
                                let templike = [...likeCountArr]
                                templike.splice(index,1)
                                // let templike = [likeCountArr.slice(0,index),likeCountArr.slice(index+1)];
                                setLikeCountArr(templike);
                                
                                let temp = [];
                                temp.splice(index,1);
                                // let temp = [news.slice(0,index),news.slice(index+1)];
                                setNews(temp);
                                
                            }}>삭제</button>
                        </div>
                    )
                })
            }

            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news3}</h4>
                <p>내용</p>
            </div> */}

            <div>
                <input type="text" id='input_news_title' value={inputText} onChange={(event) => {
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }} />
                <button onClick={() => {
                    // let title =  document.getElementById('input_news_title').value;

                    // let temp = [...news];
                    // temp.push(title);
                    // setNews(temp);

                    // document.getElementById('input_news_title').value = "";
                    // let tempHt = [...likeCountArr];
                    // tempHt.push(0);
                    if (inputText.trim() == '') {
                        alert("값이 없습니다.")
                    } else {
                        setLikeCountArr([...likeCountArr, 0]);
                        let temp = [...news];
                        temp.push(inputText);
                        setNews(temp);
                    }

                    setInputText('');

                }}>발행</button>
            </div>

            {
                /* modalFlag == true ? <Modal/> : null */
            }

            {
                modalFlag && <Modal news={news} setNews={setNews} title={selectedTitle} likeCount={selectedLikeCount} />
            }

        </div>
    )
}

export default NewsBlog;