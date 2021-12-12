import './App.css';
import Card from './components/Card/Card.jsx';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Test from './components/Test/Test.jsx';
import { fetchData } from './store/Actions/testDataActions.js';
import PastResults from './components/PastResults/PastResults';
import { openModal } from './store/Actions/modalActions';
import { Button } from './components/Button/Button';

import deleteIcon from './assets/icons/delete.svg';

function App() {
  const dispatch = useDispatch();
  const singleTestArr = useSelector(
    (state) => state.testCardReducer.singleTest
  );
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { isLoading, tests } = useSelector((state) => state.testDataReducer);
  const testCards = tests.map((test) => (
    <Card key={test.uuid} isLoading={isLoading} {...test} />
  ));
  return (
    <div className="app">
      <div className="app-title">
        <h1>Test App</h1>
      </div>
      <div className="app-menu">
        {JSON.parse(localStorage.getItem('result')) !== null ? <button className="result-btn" onClick={()=> dispatch(openModal())}>Past Results</button> : null}
        {singleTestArr.length === 0 ? (
          testCards
        ) : (
          <Test questions={singleTestArr} />
        )}
      </div>
       <PastResults />
       <Button icon={deleteIcon} isBlock={false} clsName='light' />
    </div>
  );
}

export default App;
