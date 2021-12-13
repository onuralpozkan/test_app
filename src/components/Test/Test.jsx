import { useDispatch, useSelector } from 'react-redux';
import { startTest } from '../../store/Actions/testCardActions';
import { useState } from 'react';
import './Test.css';
import returnIcon from '../../assets/icons/return.svg';
import acceptIcon from '../../assets/icons/accept.svg';
import { saveResult } from '../../utils/saveResult';
import { Button } from '../Button/Button';


const Test = ({ questions }) => {
  const testInfo = useSelector(state => state.testCardReducer.testInfo)
  console.log('test info bilader', testInfo);
  const [result, setResult] = useState({wrongCount:0,empyCount:0,correctCount:0})
  const dispatch = useDispatch();
  const myForm = document.getElementsByTagName("form");
  const inputs = document.getElementsByTagName("input");

  let emptyCount = 0;
  let correctCount = 0;
  let userAns = [];
  const selectAnswer = (ev) => {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked
        ? (inputs[i].parentElement.classList.add("selected"))
        : (inputs[i].parentElement.classList.remove("selected"));
    }
  const { name, value } = ev.target;
  userAns[name] = { [name]: value };
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    for (let i = 0; i < questions.length; i++) {
      if (userAns[i] && userAns[i][i] === questions[i].answer) {
        correctCount++;
      } else if (!userAns[i]) {
        emptyCount++;
      } 
    }
    for (let t = 0; t < questions.length; t++) {
      for (let k = 0; k < 4; k++) {
        if (myForm[t][k].value === questions[t].answer) {
          myForm[t][k].parentElement.style.backgroundColor = "green";
        }
      }
    }
    let wrongCount = questions.length - (correctCount + emptyCount); 
    setResult({ correctCount, wrongCount, emptyCount })

    const resultData = {testInfo,wrongCount,correctCount,emptyCount};
    saveResult(resultData);
  }
  return (
    <div className="test" style={{ margin:'0px auto' }}>
      <h1 className="test-title">
          This is a {testInfo.test} Test
      </h1>
      {JSON.stringify(result)}
      {questions.map((question) => (
      <form id="test-form" onSubmit={handleSubmit} key={question.id}>
        <ul className="question">
          <li className="question-title"><span>{`${question.id + 1})`}</span> {question.question}</li>
          <li className="answer"><label><span>A.</span> {question.a}<input onChange={selectAnswer} type="radio" name={question.id} value="a" id="a" /></label></li>
          <li className="answer"><label><span>B.</span> {question.b}<input onChange={selectAnswer} type="radio" name={question.id} value="b" id="b" /></label></li>
          <li className="answer"><label><span>C.</span> {question.c}<input onChange={selectAnswer} type="radio" name={question.id} value="c" id="c" /></label></li>
          <li className="answer"><label><span>D.</span> {question.d}<input onChange={selectAnswer} type="radio" name={question.id} value="d" id="d" /></label></li>
        </ul>
      </form>
      ))}
      <span className='back-btn'>
        <Button icon={returnIcon} clsName='warning' handleClick={()=>dispatch(startTest([]))} />
      </span>
      <Button icon={acceptIcon} clsName='primary' isBlock label='Submit' handleClick={handleSubmit}/>
    </div>
  );
};

export default Test;
/*
 {
          "id": 0,
          "question": "French Qusetion 1.",
          "a": "'m going to work with",
          "b": "'m going to work by",
          "c": "go to work with,go to work with,go to work with,go to work with,go to work with",
          "d": "go to work by",
          "answer": "a"
        },
*/