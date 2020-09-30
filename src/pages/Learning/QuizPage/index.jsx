import React from "react";
import "./quiz.css";
import PropTypes from "prop-types";

QuizPage.prototype = {
  question: PropTypes.string,
};

QuizPage.defaultProps = {
  question: null,
};

function QuizPage(props) {
  const question = props.question;
  return (
    <div className="w-100">
      {question.map((value, index) => (
        <React.Fragment key={index}>
          <h3>{value.content}</h3>
          {value.answerList.map((item, index) => (
            <div className="checkbox-bg p-2 mb-2" key={index}>
              {item.answer}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default QuizPage;
