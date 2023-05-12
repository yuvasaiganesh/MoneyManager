import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    amountList: [],
    title: '',
    amount: '',
    type: '',
    balance: 0,
    income: 0,
    expenses: 0,
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  toDelete = id => {
    this.setState(prevState => ({
      amountList: prevState.amountList.filter(each => each.id !== id),
    }))
  }

  toChange = event => {
    this.setState({type: event.target.value})
  }

  toSubmit = event => {
    event.preventDefault()
    const {type, amount, title} = this.state
    const newList = {id: v4(), title, amount, type}

    if (type === 'Income') {
      this.setState(prevState => ({
        amountList: [...prevState.amountList, newList],
        title: '',
        amount: '',
        balance: prevState.income + amount - prevState.expenses,
        income: prevState.income + amount,
        expenses: prevState.expenses,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        amountList: [...prevState.amountList, newList],
        title: '',
        amount: '',
        balance: prevState.income - (prevState.expenses + amount),
        income: prevState.income,
        expenses: prevState.expenses + amount,
      }))
    }
  }

  render() {
    const {
      amountList,
      title,
      amount,
      type,
      balance,
      income,
      expenses,
    } = this.state
    console.log(amountList)
    return (
      <div className="mainSection">
        <div className="nameSection">
          <h1 className="heading1">Hi, Richard</h1>
          <p className="paragraph1">
            welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <div className="displaySection">
          <div className="balanceSection">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="transactionImg"
            />
            <div className="headingSection">
              <h1 className="heading2">Your Balance</h1>
              <p className="paragraph2">RS {balance}</p>
            </div>
          </div>

          <div className="balanceSection">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
              alt="income"
              className="transactionImg"
            />
            <div className="headingSection">
              <h1 className="heading2">Your Income</h1>
              <p className="paragraph2">RS {income} </p>
            </div>
          </div>

          <div className="balanceSection">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
              alt="expenses"
              className="transactionImg"
            />
            <div className="headingSection">
              <h1 className="heading2">Your Expenses</h1>
              <p className="paragraph2">Rs {expenses}</p>
            </div>
          </div>
        </div>

        <div className="formAndListSection">
          <form className="formSection" onSubmit={this.toSubmit}>
            <h1 className="heading3">Add Transactions</h1>
            <div className="labelSection">
              <label htmlFor="Title">TITLE</label>
              <input
                placeholder="TITLE"
                onChange={this.titleChange}
                value={title}
                id="Title"
              />
            </div>
            <div className="labelSection">
              <label htmlFor="Amount">AMOUNT</label>
              <input
                placeholder="AMOUNT"
                onChange={this.amountChange}
                value={amount}
                id="Amount"
              />
            </div>
            <select value={type} onChange={this.toChange}>
              {transactionTypeOptions.map(each => (
                <TransactionItem
                  transactionTypeDetails={each}
                  key={each.displayText}
                />
              ))}
            </select>
            <button type="submit">Add</button>
          </form>

          <ul className="ListSection">
            <li>
              <p className="paragraph3">Title</p>
              <p className="paragraph3">Amount</p>
              <p className="paragraph3">Type</p>
            </li>
            {amountList.map(each => (
              <MoneyDetails details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
