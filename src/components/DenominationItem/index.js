/* Write your CSS here */
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickButton = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="main-button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
