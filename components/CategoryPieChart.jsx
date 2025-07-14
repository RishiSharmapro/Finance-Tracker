'use-client'
import React, { useState, useEffect } from 'react';
import { CloudCog } from "lucide-react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";


const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f7f', '#a29bfe', '#55efc4'];

function groupByCategory(transactions) {
    const grouped = {};

    transactions.forEach((tx) => {
        const category = tx.category || "Uncategorized";
        grouped[category] = (grouped[category] || 0) + Number(tx.amount);
    });

    return Object.entries(grouped).map(([category, total]) => ({ category, total }));
}

const CategoryPieChart = ({ transactions }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Handler to update width based on window size
        const updateWidth = () => {
            const newWidth = window.innerWidth < 700 ? 370 : 700;
            setWidth(newWidth);
        };

        updateWidth();

        // Listen to resize events
        window.addEventListener('resize', updateWidth);
    }, []);

    const data = groupByCategory(transactions);
    console.log('data', data);
    if (data.length === 0) {
        return (
            <div className="w-full h-[300px] flex items-center justify-center">
                <CloudCog className="h-12 w-12 text-gray-500" />
                <p className="text-gray-500">No transactions available</p>
            </div>
        );
    }

    return (
        <div className="w-full h-[300px] flex items-center justify-center">
            <ResponsiveContainer width={width} height="100%">
                <PieChart>
                    <Pie
                        dataKey="total"
                        nameKey="category"
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={width < 400 ? 50 : 100}

                        label={({ name, percent }) =>
                            `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${value}`} />
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default CategoryPieChart;
