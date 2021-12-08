import './App.css';
import Card from './components/Card/Card.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Test from './components/Test/Test.jsx';
import { fetchData } from './store/Actions/testDataActions.js';

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
        {singleTestArr.length === 0 ? (
          testCards
        ) : (
          <Test questions={singleTestArr} />
        )}
      </div>
    </div>
  );
}

export default App;
