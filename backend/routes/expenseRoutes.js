import express from 'express';
import { getAllExpenses, createExpense, deleteExpense, updateExpense } from '../controllers/expenseController.js';

const router = express.Router();

router.get('/', getAllExpenses);
router.post('/', createExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

export default router;
