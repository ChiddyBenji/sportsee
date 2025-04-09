import React, { useState, useEffect } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function Radarcard({ activityData }) {
  if (!activityData?.length) {
    return <p>Chargement des données d'activité...</p>;
  }

  const kindLabels = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const formattedData = activityData.map((item) => ({
    activity: kindLabels[item.kind] || "Inconnu",
    value: item.value,
  }));

  const [fontSize, setFontSize] = useState(window.innerWidth < 1600 ? 12 : 16);
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth < 1600 ? "100%" : "33%"
  );

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 1600 ? 9 : 16);
      setChartWidth(window.innerWidth < 1600 ? "33%" : "33%");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="radar-chart"
      style={{
        backgroundColor: "#282D30",
        padding: "20px",
        borderRadius: "5px",
        width: chartWidth,
      }}
    >
      <ResponsiveContainer width="100%" height={225}>
        <RadarChart outerRadius="80%" data={formattedData}>
          <PolarGrid stroke="#fff" radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="transparent"
            tick={{ fill: "#fff", fontSize }}
          />
          <PolarRadiusAxis stroke="transparent" tick={false} axisLine={false} />
          <Radar
            name="Activité"
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Radarcard;
