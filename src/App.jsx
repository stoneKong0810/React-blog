import { useState } from 'react';
import './App.css';

function App() {
  let [title, updateTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '여자 향수 추천',
  ]);
  let [loved, addLoved] = useState([1, 2, 3]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {title.map((data, i) => {
        return (
          <div className="list" key={data}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {data}
              <span
                onClick={() => {
                  let copy = [...loved];
                  copy[i] = copy[i] + 1;
                  addLoved(copy);
                }}
              >
                ❤️
              </span>
              {loved[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal === false ? null : (
        <Modal
          updateTitle={updateTitle}
          title={title}
          modalTitle={modalTitle}
        />
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          props.updateTitle([
            '여자 코트 추천',
            '서울 돈까스 맛집',
            '파이썬 독학',
          ]);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default App;
