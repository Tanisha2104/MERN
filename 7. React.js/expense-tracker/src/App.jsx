import { useState, useEffect } from "react";
import ExpenseForm from "/components/ExpenseForm.jsx";
import "./App.css";

export default function App() {
  const [expenses, setExpense] = useState(() => {
    const storedata = localStorage.getItem("expenses");
    return storedata ? JSON.parse(storedata) : [];
  });

  const addexpense = (expense) => {
    setExpense([...expenses, expense]);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalAmount = expenses.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="font-bold text-3xl text-center">Expense Tracker</h1>
          {/* <button className="border-s-gray-300 p-2 ml-80  hover:bg-amber-500 bg-amber-800 " onClick={addexpense}>Add Expense</button> */}
          <p className="text-center font-bold text-gray-500 mt-1 mb-6 text-sm">
            Total Items :{" "}
            <span className="font-semibold text-blue-500">
              {expenses.length}
            </span>
          </p>

          <ExpenseForm Onexpense={addexpense} />

          <div className="mt-7 border-t pt-4">
            <div className="flex flex-row justify-between items-center mb-3">
              <h1 className="text-lg font-semibold text-gray-700">
                Total Expenses
              </h1>
              <span className="text-md font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Total: {totalAmount}
              </span>
            </div>

            {expenses.length === 0 ? (
              <p className="text-center text-gray-400 tetx-sm py-4">
                No Expense is added till now
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {expenses.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded"
                  >
                    <span className="text-gray-800 font-medium">
                      {item.title}
                    </span>
                    <span className="text-gray-900 font-bold">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
//add expense- // delete // search // filter by category //total expense-
//dark light theme //form- //local storage- //optimization by usememo and
//usecallback; // usecontext
