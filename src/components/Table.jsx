// component import
import ExpenseItem from "./ExpenseItem"

const Table = ({ expenses }) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            ["Index", "Name", "Amount", "Date", "Budget", ""].map((i, index) => (
                                <th key={index}>{i}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense, index) => (
                            <tr key={expense.id}>
                                <ExpenseItem index={index} expense={expense} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table
