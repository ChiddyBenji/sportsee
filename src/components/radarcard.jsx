import React from "react";
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

  return (
    <div
      className="radar-chart"
      style={{
        backgroundColor: "#282D30",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <ResponsiveContainer width="100%" height={160}>
        <RadarChart outerRadius="80%" data={formattedData}>
          {/* Supprime les lignes radiales */}
          <PolarGrid stroke="#fff" radialLines={false} />
          {/* Garde les mots mais sans ligne qui les relie */}
          <PolarAngleAxis
            dataKey="activity"
            stroke="transparent"
            tick={{ fill: "#fff" }}
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
