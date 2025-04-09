import React, { useState, useRef, useEffect } from "react";
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
  const { points, width, containerHeight, topOffset } = props;

  if (!points || points.length === 0) return null;

  const { x, y } = points[0];

  let cursorWidth = 0;
  if (points.length > 1) {
    cursorWidth = points[points.length - 1].x - x;
  }

  if (cursorWidth < width) {
    cursorWidth = width;
  }

  return (
    <Rectangle
      fill="rgba(14, 14, 14, 0.3)"
      x={x}
      y={y - topOffset}
      width={cursorWidth}
      height={containerHeight + topOffset}
    />
  );
};

function Performance({ activityData }) {
  const userSessions = activityData?.sessions;

  if (!userSessions || userSessions.length === 0) {
    return <p>Chargement des performances...</p>;
  }

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const formattedData = userSessions.map((session) => ({
    day: days[session.day - 1],
    sessionLength: session.sessionLength,
  }));

  const chartContainerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (chartContainerRef.current) {
      setContainerHeight(chartContainerRef.current.clientHeight);
    }
  }, [chartContainerRef.current]);

  const topOffset = 40;

  return (
    <div
      className="performance-chart"
      style={{
        backgroundColor: "#FF0000",
        borderRadius: "5px",
        position: "relative",
        overflow: "visible",
        width: "38%",
      }}
      ref={chartContainerRef}
    >
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={formattedData}
          margin={{ top: 40, right: 20, left: 20, bottom: 20 }}
        >
          <text
            x={20}
            y={40}
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
            tick={{ fill: "#fff", fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "red" }}
            tickFormatter={(tick) => tick}
            tickMargin={10}
            interval="preserveStartEnd"
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
            cursor={
              <CustomCursor
                containerHeight={containerHeight}
                width={chartContainerRef.current?.clientWidth}
                topOffset={topOffset}
                points={formattedData}
              />
            }
          />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              fill: "white",
              stroke: "white",
              strokeWidth: 10,
              strokeOpacity: 0.5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
