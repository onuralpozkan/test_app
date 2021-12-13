import { useEffect, useState } from 'react';
import './PastResults.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/Actions/modalActions';
import { Button } from '../Button/Button';
import deleteIcon from '../../assets/icons/delete.svg';
import timesIcon from '../../assets/icons/times.svg';
const PastResults = () => {
  const dispatch = useDispatch();
  const [pastResults, setPastResults] = useState([]);
  const modalState = useSelector((state) => state.modalReducer.isModalOpen);

  useEffect(() => {
    if (localStorage.getItem('result') !== null) {
      setPastResults(JSON.parse(localStorage.getItem('result')));
    }
  }, [modalState]);
  const resultRows = pastResults.map((test) => (
    <tr key={test.testInfo.uuid}>
      <td>{test.testInfo.test}</td>
      <td>{test.correctCount}</td>
      <td>{test.wrongCount}</td>
      <td>{test.emptyCount}</td>
    </tr>
  ));
  const handleDelete = () => {
    localStorage.clear();
    dispatch(closeModal());
    window.location.reload();
  }
  return (
    <>
      <div
        className={modalState ? 'overlay' : ''}
        onClick={() => dispatch(closeModal())}
      ></div>
      <div className={`results-modal ${modalState ? 'open-modal' : ''}`}>
        <h1>Past Results</h1>
        <table className="results-table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Correct</th>
              <th>Wrong</th>
              <th>Empty</th>
            </tr>
          </thead>
          <tbody>{resultRows}</tbody>
        </table>
        <span className="close-btn" onClick={() => dispatch(closeModal())}>
         <Button icon={timesIcon} clsName='light' handleClick={() => dispatch(closeModal())}/>
        </span>

        <Button icon={deleteIcon} label='Delete' clsName='danger' handleClick={handleDelete}/>
      </div>
    </>
  );
};

export default PastResults;
