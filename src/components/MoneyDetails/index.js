// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {details, toDelete} = props
  const {id, title, type, amount} = details

  const onDelete = () => {
    toDelete(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{type}</p>
      <p>{amount}</p>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default MoneyDetails
