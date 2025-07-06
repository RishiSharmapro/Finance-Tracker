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
    const data = groupByCategory(transactions);
    console.log('data', data);

    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="total"
                        nameKey="category"
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
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
