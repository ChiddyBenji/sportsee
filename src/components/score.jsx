import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

function Score({ score }) {
  const scorePercentage = score * 100;

  const data = [
    {
      score: scorePercentage,
      fill: "#FF0000",
    },
  ];

  const startAngle = 90;
  const endAngle = 90 + (scorePercentage / 100) * 360;

  return (
    <div className="score-card">
      <h2>Score</h2>

      <ResponsiveContainer width="100%" height={263}>
        <RadialBarChart
          innerRadius="60%"
          outerRadius="50%"
          data={data}
          startAngle={startAngle}
          endAngle={endAngle}
        >
          <RadialBar
            minAngle={15}
            label={false}
            background
            clockWise
            dataKey="score"
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="center-txt"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          color: "#000",
          backgroundColor: "white",
          padding: "5px 10px",
          borderRadius: "50%",
          width: "85px",
          height: "95px",
          textAlign: "center",
        }}
      >
        <p><span style={{ fontWeight: 600 }}>{scorePercentage}%</span> <br /> de votre objectif</p>
      </div>
    </div>
  );
}

export default Score;
