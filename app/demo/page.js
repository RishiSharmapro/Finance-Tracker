import React from 'react'
import Dashboard from '@/components/Dashboard'

const demoTransactions = [
  {
    amount: "1200",
    date: "2025-07-01",
    description: "Weekend spendings",
    category: "Entertainment",
    id: 1,
  },
  {
    amount: "551",
    date: "2025-06-10",
    description: "Party",
    category: "Food",
    id: 2,
  },
  {
    amount: "200",
    date: "2025-05-07",
    description: "Grocery",
    category: "Utilities",
    id: 3,
  },
  {
    amount: "709",
    date: "2025-04-06",
    description: "Spendings",
    category: "Transport",
    id: 4,
  },
  {
    amount: "1000",
    date: "2025-02-06",
    description: "Grocery",
    category: "Utilities",
    id: 5,
  },
  {
    amount: "2342",
    date: "2025-03-06",
    description: "Party",
    category: "Food",
    id: 6,
  },
  {
    amount: "465",
    date: "2025-01-05",
    description: "Weekend spendings",
    category: "Transport",
    id: 7,
  },
  {
    amount: "8756",
    date: "2024-12-18",
    description: "Party",
    category: "Transport",
    id: 8,
  },
];


const page = () => {
  return (
    <div>
        <Dashboard transactions={demoTransactions} />
    </div>
  )
}

export default page