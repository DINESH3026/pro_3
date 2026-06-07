import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { weeklyActivity } from "../data/MockData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#000",
          border: "1px solid #333",
          borderRadius: "8px",
          padding: "10px 14px",
          fontSize: "12px",
          color: "#fff",
        }}
      >
        <p style={{ margin: "0 0 6px", fontWeight: 600, color: "#fff" }}>
          {label}
        </p>
        {payload.map((entry) => (
          <p
            key={entry.dataKey}
            style={{ margin: "2px 0", color: entry.color }}
          >
            {entry.dataKey} : {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const WeeklyActivityGraph = () => {
  return (
    <div
      style={{
        backgroundColor: "#111827",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Weekly Activity
          </h2>
          <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#9ca3af" }}>
            Submissions vs completions
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "6px",
            padding: "4px 12px",
            fontSize: "12px",
            color: "#9ca3af",
          }}
        >
          Last 7 days
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={weeklyActivity}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="submissionsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="completionsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            tickCount={5}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#374151", strokeWidth: 1 }} />

          {/* 
            FIX: Only use <Area> — no extra <Line> for the same dataKey.
            <Area> already renders both the filled region AND the line stroke.
            Adding a <Line> on top duplicates the series in the tooltip.
          */}
          <Area
            type="monotone"
            dataKey="submissions"
            stroke="#6366f1"
            strokeWidth={2}
            fill="url(#submissionsGrad)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#fff",
              stroke: "#6366f1",
              strokeWidth: 2,
            }}
          />

          <Area
            type="monotone"
            dataKey="completions"
            stroke="#10b981"
            strokeWidth={2}
            fill="url(#completionsGrad)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#fff",
              stroke: "#10b981",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "12px",
        }}
      >
        {[
          { color: "#6366f1", label: "submissions" },
          { color: "#10b981", label: "completions" },
        ].map(({ color, label }) => (
          <span
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#9ca3af",
            }}
          >
            <span
              style={{
                width: 12,
                height: 3,
                borderRadius: 2,
                background: color,
                display: "inline-block",
              }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WeeklyActivityGraph;