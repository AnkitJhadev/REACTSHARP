import './Expenseitem.css'
function ExpenseItem() {
    const expensedate = new Date(2001,3,20)
    const expenseTitle = 'CAR INSURANCE'
    const expenseAmount = 295
    const locationofexpenditure = 'DELHI'
    return(
     <div className='expense-item'>
      <div>{expensedate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle
        }  {   locationofexpenditure}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
    );
}

export default ExpenseItem;