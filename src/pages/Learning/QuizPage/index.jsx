import React, { useEffect, useState } from "react";
import "./quiz.css";
import PropTypes from "prop-types";
import { QuestionCircleFilled } from "@ant-design/icons";

QuizPage.prototype = {
  question: PropTypes.string,
};

QuizPage.defaultProps = {
  question: null,
};

function QuizPage(props) {
  // const question = props.question;
  const [question, setQuestion] = useState(props.question);
  const [listAnswer, setListAnswer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setQuestion(props.question);
  }, [props.question]);

  useEffect(() => {
    function initListAnswer() {
      if (question.length > 0) {
        let listTemp = [];
        for (let i = 0; i < question.length; i++) {
          listTemp.push({ index: i, done: false, result: false, choice: null });
        }
        setListAnswer(listTemp);
        setLoading(false);
      }
    }
    initListAnswer();
    console.log("useEffect 2 run:", listAnswer);
  }, [props.question]);

  const handleChoice = (questionNumber, result, choice) => {
    console.log(questionNumber);
    let listTemp = [...listAnswer];
    listTemp[questionNumber] = {
      ...listTemp[questionNumber],
      done: true,
      result: result,
      choice: choice,
    };

    setListAnswer(listTemp);
    console.log(listAnswer);
  };

  function answerComponent(questionNumber) {
    const choice = listAnswer[questionNumber].choice;
    if (listAnswer[questionNumber].done && !listAnswer[questionNumber].result) {
      const rightAnswer = question[questionNumber].answerList.find(
        (element) => element.correct === true
      );
      console.log("rightAnswer:", rightAnswer);
      return (
        <React.Fragment>
          <div className="wrong-bg p-2 mb-2">
            {question[questionNumber].answerList[choice].answer}
          </div>
          <div>
            &rarr; Right answer: {rightAnswer.answer} <br/>Chỗ này sửa lại css, Đạt
            làm !
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="right-bg p-2 mb-2">
          {question[questionNumber].answerList[choice].answer}
        </div>
      </React.Fragment>
    );
  }
  if (!loading) {
    return (
      <div className="w-100">
        {question.map((value, parentIndex) => (
          <React.Fragment key={parentIndex}>
            <p className="pb-5 pt-3 question"><QuestionCircleFilled style={{ fontSize: '20px'}} />{value.content}</p>
            {listAnswer[parentIndex].done && answerComponent(parentIndex)}
            {!listAnswer[parentIndex].done &&
              value.answerList.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="checkbox-bg p-2 mb-2 "
                    key={index}
                    onClick={() =>
                      handleChoice(parentIndex, item.correct, index)
                    }
                  >
                    {item.answer}
                  </div>
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default QuizPage;
