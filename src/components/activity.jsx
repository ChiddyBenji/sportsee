import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Activity({ activityData, title }) {
  const sessions = activityData?.sessions || activityData?.value;
  if (!sessions || sessions.length === 0) {
    return <div>Pas de données disponibles</div>;
  }
  const SCALE_FACTOR = 2;
  const SCALE_KILOGRAMS = 1;

  const data = sessions.map((session, index) => ({
    index: index + 1,
    kilogram: (session.kilogram ?? 0) * SCALE_KILOGRAMS,
    calories: (session.calories ?? 0) * SCALE_FACTOR,
    realCalories: session.calories ?? 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />

        <YAxis
          yAxisId="right"
          dataKey="kilogram"
          orientation="right"
          domain={[69, "dataMax + 50"]}
          tick={{ fill: "#000" }}
        />

        <YAxis yAxisId="left" hide={true} domain={[0, "dataMax + 200"]} />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const { kilogram, realCalories } = payload[0].payload;
              return (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <p style={{ margin: 0 }}>{kilogram} kg</p>
                  <p style={{ margin: 0 }}>{realCalories} kCal</p>
                </div>
              );
            }
            return null;
          }}
        />

        <Legend
          verticalAlign="top"
          align="right"
          iconSize={10}
          iconType="circle"
          payload={[
            {
              value: (
                <span className="legend-text" style={{ color: "#000" }}>
                  Poids (kg)
                </span>
              ),
              type: "circle",
              color: "#000000",
            },
            {
              value: (
                <span className="legend-text" style={{ color: "#000" }}>
                  Calories brûlées (kCal)
                </span>
              ),
              type: "circle",
              color: "#FF0000",
            },
          ]}
        />

        <text
          className="dynamic-text"
          x={20}
          y={40}
          textAnchor="start"
          fontSize="18"
          fill="#333"
          fontWeight="600"
        >
          {title || "Activité quotidienne"}
        </text>

        <Bar
          dataKey="kilogram"
          fill="#000000"
          barSize={10}
          radius={[10, 10, 0, 0]}
          yAxisId="right"
        />

        <Bar
          dataKey="calories"
          fill="#FF0000"
          barSize={10}
          radius={[10, 10, 0, 0]}
          yAxisId="left"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Activity;
