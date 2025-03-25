import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const CustomCursor = (props) => {
  const { points, width, height} = props;
  const { x, y } = points[0];

  return (
    <Rectangle
      fill="rgba(14, 14, 14, 0.3)"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

function Performance({ activityData }) {
  console.log("activityData reçu dans Performance.jsx :", activityData);

  const userSessions = activityData?.sessions;

  if (!userSessions || userSessions.length === 0) {
    return <p>Chargement des performances...</p>;
  }

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const formattedData = userSessions.map((session) => ({
    day: days[session.day - 1],
    sessionLength: session.sessionLength,
  }));

  return (
    <div
      className="performance-chart"
      style={{
        backgroundColor: "#FF0000",
        padding: "20px",
        borderRadius: "5px",
        position: "relative",
        overflow: "visible",
      }}
    >
      <ResponsiveContainer width="100%" height={160}>
        <LineChart
          data={formattedData}
          margin={{ top: 40, right: 20, left: 20, bottom: 10 }}
        >
          <text
            x={20}
            y={20}
            textAnchor="start"
            fontSize="14"
            fill="#fff"
            fontWeight="600"
            opacity="0.7"
          >
            Durée moyenne des sessions
          </text>

          <XAxis
            dataKey="day"
            stroke="#fff"
            tick={{ fill: "#fff" }}
            tickLine={false}
            axisLine={{ stroke: "red" }}
            tickFormatter={(tick) => tick}
            tickMargin={10}
          />
          <YAxis
            hide={true}
            domain={[0, "dataMax + 10"]}
            axisLine={{ stroke: "#fff" }}
            tickLine={false}
            tick={{ fill: "#fff" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgb(255, 255, 255)",
              border: "none",
            }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [`${value} min`]}
            itemStyle={{ color: "#000" }}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            
          />
        </LineChart>
      </ResponsiveContainer>

      <Rectangle
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}

export default Performance;
