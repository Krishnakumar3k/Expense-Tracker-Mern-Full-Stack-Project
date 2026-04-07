function ExpenseItem({ expense, onDelete, onEdit }) {
  const handleDelete = () => {
    onDelete(expense._id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {expense.category}
            </span>
          </div>
          <p className="text-gray-700 text-sm">{expense.description}</p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(expense.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-800">
            ${expense.amount.toFixed(2)}
          </span>
          <button
            onClick={() => onEdit(expense)}
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded-md transition-colors duration-200"
            aria-label="Edit expense"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-md transition-colors duration-200"
            aria-label="Delete expense"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
