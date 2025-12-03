import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//public.index의 root
const root = ReactDOM.createRoot(document.getElementById('root'));
//<React.StrictMode> 엄격한 검증 모드
//App 실제 구현 장소
//App.js 실행 ->리턴으로 코드 전송 ->root로 html에 넣음
root.render(
  <React.StrictMode> 
    <App />
    {/* <TempApp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
