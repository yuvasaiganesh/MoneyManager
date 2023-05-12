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
    type: transactionTypeOptions[0].optionId,

    incomeAmount: 0,
    expensesAmount: 0,
    balanceAmount: 0,
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  getDelete = id => {
    const {amountList} = this.state
    const item = amountList.filter(each => each.id === id)

    if (item[0].typeValue === transactionTypeOptions[0].displayText) {
      this.setState(prevState => ({
        amountList: prevState.amountList.filter(each => each.id !== id),
        incomeAmount: prevState.incomeAmount - item[0].amount,
        balanceAmount: prevState.balanceAmount - item[0].amount,
      }))
    } else if (item[0].typeValue === transactionTypeOptions[1].displayText) {
      this.setState(prevState => ({
        amountList: prevState.amountList.filter(each => each.id !== id),
        expensesAmount: prevState.expensesAmount - item[0].amount,
        balanceAmount: prevState.balanceAmount + item[0].amount,
      }))
    }
  }

  toChange = event => {
    this.setState({
      type: event.target.value,
    })
  }

  toSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newType = transactionTypeOptions.filter(
      each => each.optionId === type,
    )
    const newList = {id: v4(), title, amount, typeValue: newType[0].displayText}

    if (type === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount + amount,
      }))
    } else if (type === transactionTypeOptions[1].optionId) {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount + amount,
      }))
    }

    this.setState(prevState => ({
      amountList: [...prevState.amountList, newList],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
      balanceAmount: prevState.incomeAmount - prevState.expensesAmount,
    }))
  }

  render() {
    const {
      amountList,
      title,
      amount,

      expensesAmount,
      incomeAmount,
      balanceAmount,
      type,
    } = this.state

    return (
      <div className="mainSection">
        <div className="nameSection">
          <h1 className="heading1">Hi, Richard</h1>
          <p className="paragraph1">
            welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="displaySection">
          <TransactionItem
            balance={balanceAmount}
            income={incomeAmount}
            expenses={expensesAmount}
          />
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
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
          <div className="historySection">
            <h1>History</h1>
            <ul className="ulSection">
              <li className="listSection1">
                <p className="paragraph3">Title</p>
                <p className="paragraph3">Amount</p>
                <p className="paragraph3">Type</p>
                <p>..</p>
              </li>

              {amountList.map(each => (
                <MoneyDetails
                  details={each}
                  key={each.id}
                  toDelete={this.getDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
