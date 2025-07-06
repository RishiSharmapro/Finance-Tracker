"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddTransactionModal from "./AddTransactionModel";
import ShowTransactionModal from "./ShowInsightModel";
import MonthlyBarChart from "./MonthlyBarChart";

import CategoryPieChart from "./ui/CategoryPieChart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { set } from "mongoose";



const Dashboard = () => {
  // capture the transactions in state
  useEffect(() => {
    // Load transactions from local storage on component mount
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
    console.log("Transactions loaded from local storage: ", storedTransactions);
  }, []);

  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [isBarChart, setIsBarChart] = useState(1);
  const [OpenModel, setOpenModel] = useState(0);
  const [ShowInsightModel, setShowInsightModel] = useState(0)


  const groupByCategory = (transactions) => {
    const grouped = {};
    transactions.forEach((tx) => {
      const category = tx.category || "Uncategorized";
      grouped[category] = (grouped[category] || 0) + Number(tx.amount);
    });
    return Object.entries(grouped).map(([category, total]) => ({ category, total }));
  };

  const totalExpenses = transactions.reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  const grouped = groupByCategory(transactions);

  let topCategory = null;
  if (grouped.length > 0) {
    topCategory = grouped.reduce((prev, curr) => (curr.total > prev.total ? curr : prev));
  }

  const recentTx = transactions.length > 0
    ? [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    : null;

  // Function to toggle the modal
  const switchModel = () => {
    setOpenModel(!OpenModel);
    console.log("Model Opened: ", OpenModel);
  };

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    // adding id to the new transaction
    if (newTransaction.id) {
      // If the transaction already has an id, we assume it's an edit
      const updatedTransactions = transactions.map((transaction) =>
        transaction.id === newTransaction.id ? newTransaction : transaction
      );
      setTransactions(updatedTransactions);
      console.log("Transaction Updated: ", newTransaction);
      // also updating the transaction in local storage
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return;
    }
    newTransaction.id = transactions.length + 1;
    setTransactions([...transactions, newTransaction]);
    console.log("Transaction Added: ", newTransaction);
    storingTransaction(newTransaction);
  };

  const editTransaction = (id) => {
    const transaction = transactions.find(transaction => transaction.id === id);
    setEditingTransaction(transaction);
    switchModel();
  }

  const deleteTransaction = (id) => {
    // deleting the transaction from state
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
    console.log("Transaction Deleted: ", id);
    // also deleting the transaction from local storage
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const updatedStoredTransactions = existingTransactions.filter((transaction) => transaction.id !== id);
    localStorage.setItem("transactions", JSON.stringify(updatedStoredTransactions));
    console.log("Transaction deleted from local storage: ", id);
  };

  const storingTransaction = (transaction) => {
    // storing the transaction in local storage
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    existingTransactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(existingTransactions));
    console.log("Transaction stored in local storage: ", transaction);
  };

  return (
    <div className=" min-h-screen bg-gray-100 pb-40">
      <div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Total Expenses" value={`₹${totalExpenses}`} />
          <Card title="Top Category" value={`${topCategory?.category} – ₹${topCategory?.total}`} />
          <Card title="Most Recent" value={`${recentTx?.description} – ₹${recentTx?.amount}`} />
        </div> */}


        <h1 className="text-3xl font-bold text-center pt-8">Welcome to Your Dashboard</h1>
        <div className="relative flex justify-center items-center mt-6  mx-20 p-4 bg-white rounded-lg shadow-md">
          {/* <div className="absolute top-4 right-4 bg-slate-100 rounded-2xl border border-black z-10 flex space-x-4 mb-4">
            <button className={`${BarChart} && bg-slate-400 rounded-2xl px-2 cursor-pointer`}>Bar Chart</button>
            <button className={`${!BarChart} && bg-slate-400 rounded-2xl px-2 cursor-pointer`}>Pie Chart</button>
          </div> */}
          <div className="absolute text-sm top-4 right-4 bg-slate-100 rounded-xl border border-slate-700 z-10 flex p-1">
            <button
              onClick={() => setIsBarChart(true)}
              className={`px-2 rounded-xl cursor-pointer transition ${isBarChart ? "bg-slate-400 text-white" : "bg-transparent"
                }`}
            >
              Bar Chart
            </button>
            <button
              onClick={() => setIsBarChart(false)}
              className={`px-2 rounded-2xl cursor-pointer transition ${!isBarChart ? "bg-slate-400 text-white" : "bg-transparent"
                }`}
            >
              Pie Chart
            </button>
          </div>

          <div className={`${isBarChart ? "" : "hidden"} `}>
            <MonthlyBarChart transactions={transactions} />
          </div>
          <div className={`${!isBarChart ? "w-full" : "hidden"} `}>
            <CategoryPieChart transactions={transactions} />
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center text-gray-600 mt-2">
          Here you can track your expenses and manage your finances.
        </p>
      </div>
      <div className={" bg-white border border-xl rounded-lg mx-20 mt-4 text-gray-500"}>
        {/* <h1 className="text-2xl font-bold my-6 text-center">Recent Transactions</h1> */}
        <Table >
          {/* <TableCaption>Recent Transactions</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>
                  <button onClick={() => editTransaction(transaction.id)} className="text-blue-500 hover:underline cursor-pointer">
                    Edit
                  </button>
                  <button onClick={() => deleteTransaction(transaction.id)} className="text-red-500 hover:underline ml-2 cursor-pointer">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={5} className="text-center text-gray-500 mx-auto">
                <button onClick={switchModel} className="bg-gray-200 text-balck px-2 border rounded-sm cursor-pointer hover:bg-gray-100 mx-2">
                  Add Transactions
                </button>
                <button onClick={() => setShowInsightModel(true)} className="bg-gray-200 text-balck px-2 border rounded-sm cursor-pointer hover:bg-gray-100 mx-2">
                  Show Insight
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* {OpenModel && <AddTransactionModal open={OpenModel} onOpenChange={setOpenModel} />} */}
      <AddTransactionModal
        open={OpenModel}
        onOpenChange={setOpenModel}
        onSave={addTransaction}
        transaction={editingTransaction}
      />
      <ShowTransactionModal
        open={ShowInsightModel}
        onOpenChange={setShowInsightModel}
        totalExpenses={totalExpenses}
        topCategory={topCategory}
        recentTx={recentTx}
        transactions={transactions}
      />
    </div>
  );
};

export default Dashboard;
