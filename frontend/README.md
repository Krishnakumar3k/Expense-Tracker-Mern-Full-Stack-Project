# Expense Tracker - MERN Stack Application

A full-stack expense tracking application built with MongoDB, Express.js, React.js, and Node.js.

## Features

- View total expenses with real-time calculation
- Add new expenses with category, amount, and description
- Delete expenses with confirmation
- Responsive design with Tailwind CSS
- Clean MVC architecture on the backend
- Real-time updates without page reload

- live host link : VITE_API_URL=https://expense-tracker-mern-full-stack-project.onrender.com
- Local host link :

## Tech Stack

**Frontend:**
- React.js
- Vite
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Project Structure

```
expense-tracker/
├── backend/
│   ├── controllers/
│   │   └── expenseController.js
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   └── server.js
├── src/
│   ├── components/
│   │   ├── AddExpense.jsx
│   │   ├── ExpenseItem.jsx
│   │   └── ExpenseList.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally, or MongoDB Atlas account

## Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
The `.env` file should contain:
```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
PORT=5000
VITE_API_URL=http://localhost:5000
```

## Running the Application

### Option 1: Run Frontend and Backend Separately

**Terminal 1 - Start MongoDB (if using local MongoDB):**
```bash
mongod
```

**Terminal 2 - Start Backend Server:**
```bash
npm run server
```
The backend will run on http://localhost:5000

**Terminal 3 - Start Frontend:**
```bash
npm run dev
```
The frontend will run on http://localhost:5173

### Option 2: Run Both Simultaneously (Recommended)

```bash
npm run dev:all
```

This will start both the frontend and backend servers concurrently.

## API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/expenses` | Get all expenses |
| POST | `/expenses` | Create a new expense |
| DELETE | `/expenses/:id` | Delete an expense by ID |

### Example Request Body (POST /expenses):
```json
{
  "category": "Groceries",
  "amount": 50.00,
  "description": "Weekly grocery shopping"
}
```

## Usage

1. The dashboard displays the total expenses at the top
2. Use the "Add New Expense" form to add expenses
3. Each expense shows the category, description, amount, and date
4. Click the trash icon to delete an expense
5. The total updates automatically when expenses are added or removed

## Database Schema

### Expense Model
```javascript
{
  category: String (required),
  amount: Number (required, minimum: 0),
  description: String (required),
  createdAt: Date (default: now)
}
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Troubleshooting

**Issue: Cannot connect to MongoDB**
- Ensure MongoDB is running locally on port 27017
- Or update the `MONGODB_URI` in `.env` to point to your MongoDB Atlas cluster

**Issue: CORS errors**
- Ensure the backend server is running on port 5000
- Check that CORS is properly configured in `backend/server.js`

**Issue: Frontend can't connect to backend**
- Verify `VITE_API_URL` in `.env` points to the correct backend URL
- Ensure the backend server is running

## License
