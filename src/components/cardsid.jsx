import React from "react";
import energy from "../images/energy.svg";
import chicken from "../images/chicken.svg";
import apple from "../images/apple.svg";
import cheeseburger from "../images/cheeseburger.svg";

function Cardsid({ activityData }) {
  if (!activityData) {
    console.log("Aucune donnée reçue pour activityData.");
    return <p>Aucune donnée disponible.</p>;
  }
  const formatValue = (value, unit) => {
    if (value == null || value === "") return "Donnée non disponible";
    return `${value.toLocaleString()}${unit}`;
  };

  const keyMetrics = [
    {
      label: "Calories",
      value: activityData.calorieCount,
      icon: energy,
      unit: "kCal",
      bgClass: "bg-energy",
    },
    {
      label: "Protéines",
      value: activityData.proteinCount,
      icon: chicken,
      unit: "g",
      bgClass: "bg-proteins",
    },
    {
      label: "Glucides",
      value: activityData.carbohydrateCount,
      icon: apple,
      unit: "g",
      bgClass: "bg-carbs",
    },
    {
      label: "Lipides",
      value: activityData.lipidCount,
      icon: cheeseburger,
      unit: "g",
      bgClass: "bg-lipids",
    },
  ];

  return (
    <div className="cardsid-container">
      {keyMetrics.map((metric, index) => (
        <div key={index} className="card">
          <div className={`card-icon ${metric.bgClass}`}>
            <img src={metric.icon} alt={metric.label} />
          </div>
          <div className="card-txt">
            <span>{formatValue(metric.value, metric.unit)}</span>
            <p>{metric.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardsid;
