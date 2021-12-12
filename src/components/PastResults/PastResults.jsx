import { useEffect, useState } from 'react';
import './PastResults.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/Actions/modalActions';
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
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          X
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete Past
        </button>
      </div>
    </>
  );
};

export default PastResults;
