import { CloudCog } from "lucide-react";
import React, { useState } from "react";

export default function CreateTransaction({ onSubmit, update }) {
    const [form, setForm] = useState(update || {
        amount: "",
        date: "",
        description: "",
        category: "",
    });

    console.log("update: ", update)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();       // prevent page reload
        onSubmit(form);           // send data to parent
        setForm({                 // reset form fields
            amount: "",
            date: "",
            description: "",
            category: "",
        });
        console.log("Form submitted: ", form);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
            />
            <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
            />
            <input
                name="description"
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
            />
            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
            >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Create Transaction
            </button>
        </form>
    );
}
