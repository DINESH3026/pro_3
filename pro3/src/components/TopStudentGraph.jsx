import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { students } from "../data/MockData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#000",
          border: "1px solid #333",
          borderRadius: "8px",
          padding: "8px 12px",
          fontSize: "12px",
          color: "#fff",
        }}
      >
        <p style={{ margin: "0 0 4px", fontWeight: 600 }}>{label}</p>
        <p style={{ margin: 0, color: "#818cf8" }}>
          completion : {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const TopStudentsGraph = () => {
  const sorted = [...students]
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 5);

  return (
    <div
      style={{
        backgroundColor: "#111827",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <h2
        style={{
          margin: "0 0 20px",
          fontSize: "16px",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        Top Students
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 0, right: 16, left: 8, bottom: 0 }}
          barCategoryGap="30%"
        >
          <XAxis
            type="number"
            domain={[0, 100]}
            hide
          />

          <YAxis
            type="category"
            dataKey="initials"
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={28}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
          />

          <Bar dataKey="percent" radius={[0, 4, 4, 0]}>
            {sorted.map((entry) => (
              <Cell key={entry.id} fill="#6366f1" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStudentsGraph;