// Write your code here
import './index.css'

const TransactionItem = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <div className="balanceSection">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="transactionImg"
        />
        <div className="headingSection">
          <p className="heading2">Your Balance</p>
          <p data-testid="balanceAmount" className="paragraph2">
            RS {balance}
          </p>
        </div>
      </div>

      <div className="balanceSection">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="transactionImg"
        />
        <div className="headingSection">
          <p className="heading2">Your Income</p>
          <p data-testid="incomeAmount" className="paragraph2">
            RS {income}{' '}
          </p>
        </div>
      </div>

      <div className="balanceSection">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="transactionImg"
        />
        <div className="headingSection">
          <p className="heading2">Your Expenses</p>
          <p data-testid="expensesAmount" className="paragraph2">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default TransactionItem
