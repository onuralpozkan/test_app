import './Card.css';
import { useDispatch } from 'react-redux';
import { getTestInfo, startTest } from '../../store/Actions/testCardActions';
//import getTestData from "../../store/Actions/testDataActions";
import { color } from '../../utils/color';
import { Ripple } from 'react-css-spinners';
const Card = ({
  test,
  uuid,
  description,
  imgUrl,
  questions,
  isLoading,
  groupId,
}) => {
  const dispatch = useDispatch();
  const openTest = () => {
    dispatch(startTest(questions));
    dispatch(getTestInfo({ uuid, test }));
  };
  const card = (
    <>
      <img className="card-photo" src={imgUrl} alt={`${test} - Cover`} />
      <span className="card-badge" style={{ backgroundColor: color(groupId) }}>
        Total Questions: {questions.length}
      </span>
      <div className="card-content" style={{ backgroundColor: color(groupId) }}>
        <h3>{test}</h3>
        <p>{description}</p>
      </div>
    </>
  );
  return (
    <div className="card" onClick={() => openTest()}>
      {isLoading ? (
        <div className="ripple">
          <Ripple color="#444546" size={100} thickness={5} />
        </div>
      ) : (
        card
      )}
    </div>
  );
};
export default Card;
