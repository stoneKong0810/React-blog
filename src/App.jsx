import { useState } from 'react';
import './App.css';

function App() {
	const [titles, setTitles] = useState([
		'남자 코트 추천',
		'강남 우동 맛집',
		'여자 향수 추천',
	]);
	const [likesCounts, setLikesCounts] = useState([1, 2, 3]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
	const [inputValue, setInputValue] = useState('');

	return (
		<div className="App">
			<div className="black-nav">
				<h4>React Blog</h4>
			</div>
			{titles.map((data, i) => {
				return (
					<div className="list" key={i}>
						<h4
							onClick={() => {
								setIsModalOpen(!isModalOpen);
								setCurrentTitleIndex(i);
							}}
						>
							{data}
							<span
								onClick={(e) => {
									e.stopPropagation();
									let copy = [...likesCounts];
									copy[i] += 1;
									setLikesCounts(copy);
								}}
							>
								❤️
							</span>
							{likesCounts[i]}
						</h4>
						<p>2월 17일 발행</p>
						<button
							onClick={() => {
								let copy = [...titles];
								copy.splice(i, 1);
								setTitles(copy);
							}}
						>
							글 삭제
						</button>
					</div>
				);
			})}
			<input
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setTitles([...titles, inputValue]);
					setInputValue('');
				}}
			>
				글 추가
			</button>
			{!isModalOpen ? null : (
				<Modal
					updateTitle={setTitles}
					title={titles}
					modalTitle={currentTitleIndex}
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
