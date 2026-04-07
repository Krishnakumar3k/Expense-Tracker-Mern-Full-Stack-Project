/* import axios from 'axios';
// ---------------------------------------------------------------------------
  // Krishna  code for reference ---------------------------------------------


  
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const expenseAPI = {
  getAllExpenses: async () => {
    try {
      const response = await apiClient.get('/api/expenses');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch expenses');
    }
  },

  createExpense: async (expenseData) => {
    try {
      const response = await apiClient.post('/api/expenses', expenseData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create expense');
    }
  },

  deleteExpense: async (id) => {
    try {
      const response = await apiClient.delete(`/api/expenses/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete expense');
    }
  },
};
 */