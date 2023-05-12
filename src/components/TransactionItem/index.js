// Write your code here
const TransactionItem = props => {
  const {transactionTypeDetails} = props
  const {optionId, displayText} = transactionTypeDetails

  return <option value={optionId}>{displayText}</option>
}

export default TransactionItem
