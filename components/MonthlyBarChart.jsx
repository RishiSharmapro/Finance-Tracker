// components/MonthlyBarChart.js
'use client';

import React, { useState, useEffect } from 'react';
import { CloudCog } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function groupByMonth(transactions) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const grouped = {};

    transactions.forEach((tx) => {
        const date = new Date(tx.date);
        const month = months[date.getMonth()];
        // const month = `${months[date.getMonth()]} ${date.getFullYear()}`;
        if (date.getFullYear() !== new Date().getFullYear()) {
            return; // Skip transactions not in the current year
        }
        grouped[month] = (grouped[month] || 0) + Number(tx.amount);
    });
    // convert the amounts to integers
    return Object.entries(grouped).map(([month, total]) => ({ month, total }));
}

function sortByMonth(data) {
    const monthOrder = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
    };

    return data.sort((a, b) => monthOrder[a.month] - monthOrder[b.month]);
}

const MonthlyBarChart = ({ transactions }) => {
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


    const data = groupByMonth(transactions);
    const sortedData = sortByMonth(data); // sorting the data by month
    if (sortedData.length === 0) {
        return (
            <div className="w-full h-[300px] flex items-center justify-center">
                <CloudCog className="h-12 w-12 text-gray-500" />
                <p className="text-gray-500">No transactions available</p>
            </div>
        );
    }

    return (
        <ResponsiveContainer width={width} height={300}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: "#555", fontWeight: "bold" }}
                    axisLine={{ stroke: "#ccc" }}
                />
                <YAxis
                    domain={[0, 'dataMax + 200']}
                    tick={{ fontSize: 12, fill: "#555" }}
                    tickFormatter={(value) => `₹${value}`}
                />
                <Tooltip
                    formatter={(value) => [`₹${value}`, "Total Spent"]}
                    labelFormatter={(label) => `Month: ${label}`}
                />
                <Bar
                    dataKey="total"
                    fill="#8884d8"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={true}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MonthlyBarChart;
