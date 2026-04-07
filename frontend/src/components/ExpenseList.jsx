import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-500 text-lg">No expenses yet. Add your first expense above!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Expense List</h2>
      <div className="space-y-3">
        {expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
