// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {details, toDelete} = props
  const {id, title, typeValue, amount} = details

  const onDelete = () => {
    toDelete(id)
  }

  return (
    <li className="li">
      <p>Rs {title}</p>

      <p>Rs {amount}</p>
      <p>Rs {typeValue}</p>
      <button
        className="button1"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default MoneyDetails
