import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ExpenseList from './components/ExpenseList';

const API_URL = import.meta.env.VITE_API_URL || 'https://expense-tracker-mern-full-stack-project.onrender.com';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/expenses`);
      setExpenses(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load expenses. Please ensure the server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expenseData) => {
    try {
      const response = await axios.post(`${API_URL}/api/expenses`, expenseData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setExpenses((prev) => [response.data, ...prev]);
      setShowAddForm(false);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Expense added successfully',
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire('Error!', err.response?.data?.message || 'Failed to add expense', 'error');
      console.error(err);
    }
  };

  const handleDeleteExpense = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this expense!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/api/expenses/${id}`);
        setExpenses((prev) => prev.filter((expense) => expense._id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Expense deleted successfully',
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.fire('Error!', 'Failed to delete expense', 'error');
        console.error(err);
      }
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setShowAddForm(false);
  };

  const handleUpdateExpense = async (id, expenseData) => {
    try {
      const response = await axios.put(`${API_URL}/api/expenses/${id}`, expenseData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setExpenses((prev) =>
        prev.map((expense) => (expense._id === id ? response.data : expense))
      );
      setEditingExpense(null);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Expense updated successfully',
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire('Error!', err.response?.data?.message || 'Failed to update expense', 'error');
      console.error(err);
    }
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg shadow-lg p-6 mb-8 text-white">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide mb-2 opacity-90">Total Expenses</p>
            <p className="text-5xl font-bold">${totalExpenses.toFixed(2)}</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            {showAddForm ? 'Cancel' : '+ Add Expense'}
          </button>
        </div>

        {showAddForm && <AddExpense onExpenseAdded={handleAddExpense} />}

        {editingExpense && (
          <EditExpense
            expense={editingExpense}
            onExpenseUpdated={handleUpdateExpense}
            onCancel={handleCancelEdit}
          />
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading expenses...</p>
          </div>
        ) : (
          <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} onEdit={handleEditExpense} />
        )}
      </div>
    </div>
  );
}

export default App;
