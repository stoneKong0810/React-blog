import { useState } from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '여자 향수 추천',
  ]);

  let [loved, addLoved] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={() => addLoved(++loved)}>❤️</span> {loved}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
