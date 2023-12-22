import { getQuestions, random } from './db.js';
import { useState } from 'react';
import './Quiz.css';

const questionBase = getQuestions()();

function QuizQuestion() {
  const [questions, setQuestions] = useState(0);

  const handelNextQuestion = () => {
    setQuestions(questions + 1);
  };

  console.log(questionBase);

  return (
    <div className="quiz-container">
      <div className="heading">
        <h2>Quiz Application UI</h2>
      </div>
      <div className="display-content">
        <div className="content-container">
          <div className="Quiz-title">Quiz Title</div>
          <div className="questionNo ">
            <div> {questions + 1}.</div>
            <div>{questionBase[questions].question}</div>
          </div>
          <div className="Option-content">
            {questionBase[questions].options.map((k, i) => {
              return <div className="Ques-btn">{k.text}</div>;
            })}
          </div>
          <div onClick={handelNextQuestion}>next</div>
        </div>
        <div className="option-bar">
          <div className="option-heading">
            <div>Question</div>
            <div className="need-help">Need Help?</div>
          </div>
          <div>
            {questionBase.map((k, i) => (
              <div className="count">{i}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizQuestion;
