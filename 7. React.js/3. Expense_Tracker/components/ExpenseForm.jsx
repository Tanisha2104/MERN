import React, { use, useEffect, useState } from "react";

function ExpenseForm({ Onexpense }) {
  const [title, Settitle] = useState("");
  const [price, Setprice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      title,
      price: Number(price),
    };

    Onexpense(expense);
    Settitle("");
    Setprice("");
  };

  return (
    <div>
      <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="" className="text-md font-medium text-gray-700 mb-1">
            Title{" "}
          </label>
          <input
            type="text"
            required
            placeholder="Ex: Book, Groceries"
            value={title}
            onChange={(e) => Settitle(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus: ring-blue-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-md font-medium text-gray-700 mb-1">
            Price :{" "}
          </label>
          <input
            type="text"
            required
            placeholder="Ex: 50"
            value={price}
            onChange={(e) => Setprice(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus: ring-blue-200"
          />
        </div>
        <div className="flex flex-col">
          <button className="w-full bg-blue-500 text-white font-medium py-3 rounded hover:bg-blue-600 transition">
            Add button
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;

// onchange() and onclick()
