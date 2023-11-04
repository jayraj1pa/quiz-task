import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "./db"; // Import the questions array from db.js

function Quiz() {
  const [score, setScore] = useState(0);
  const [questnum, setQuestNum] = useState(0);
  const [show, setShow] = useState(false);

  const handleQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nxt = questnum + 1;
    if (questions.length > nxt) {
      setQuestNum(nxt);
    } else {
      setShow(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setQuestNum(0);
    setShow(false);
  };

  return (
    <div className="org">
      <div className="main">
        <h1>Trivia Master</h1>
        <h2>Score: {score}</h2>
          <h3>Question: {questions[questnum].text}</h3>
          <ul>
            {questions[questnum].options.map((item, index) => (
              <li
                onClick={() => handleQuestion(item.isCorrect)}
                key={item.id} // Use "id" instead of "index"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {show ? (
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : null}
      </div>
  );
}

export default Quiz;
