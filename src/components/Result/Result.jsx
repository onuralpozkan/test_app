import { useState } from 'react'
import { Button } from '../Button/Button'
import './Result.css'
const Result = ({results}) => {
  const [hideCard, setHideCard] = useState(false)
  const toggleResultCard = () => {
    setHideCard(!hideCard);
  }
  return (
    <div className={`results ${hideCard && 'toggleResult'}`}>
      <h1>Result Card</h1>
      <table className='result-table'>
        <tbody>
          <tr>
            <td>Correct Count</td>
            <td>{results.correctCount}</td>
          </tr>
          <tr>
            <td>Wrong Count</td>
            <td>{results.wrongCount}</td>
          </tr>
          <tr>
            <td>Emppty Count</td>
            <td>{results.emptyCount}</td>
          </tr>
        </tbody>
      </table>
      <Button label='Hide' clsName='light' isBlock handleClick={toggleResultCard}/>
      <span className='show-btn'>
      {hideCard && <Button label='Show' clsName='primary' handleClick={toggleResultCard}/>}
      </span>
    </div>
  )
}

export default Result
