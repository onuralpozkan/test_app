import "./Card.css";
import { useDispatch } from "react-redux";
import {getTestInfo, startTest} from "../../store/Actions/testCardActions";
//import getTestData from "../../store/Actions/testDataActions";
import { color } from "../../utils/color";
const Card = ({ test, uuid,description, imgUrl, questions, isLoading, groupId }) => {
  const dispatch = useDispatch();
  const openTest = () => {
    dispatch(startTest(questions))
    dispatch(getTestInfo({uuid,test}))
  }
  const card = (<>
   <img className="card-photo" src={imgUrl} alt={`${test} - Cover`}/>
  <span className="card-badge" style={{backgroundColor: color(groupId)}}>Total Questions: {questions.length}</span>
  <div className="card-content" style={{backgroundColor: color(groupId)}}>
    <h3>{test}</h3>
    <p>{description}</p>
  </div>
  </>)
  return (
    <div className="card" onClick={() => openTest()}>
      
    {
      isLoading ? 'Loaaadinggg' : card
    }
    </div>
   
  )
}
export default Card

// test: "english",
// uuid: 1,
// description:"English Test",
// imgUrl:"https://picsum.photos/id/137/200/300",
// data: data