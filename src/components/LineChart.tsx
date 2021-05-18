import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  AreaChart,
  Area,
} from "recharts";

interface Props {
  data: { [key: string]: any }[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  xDataKey: string;
  yDataKeys: { key: string; name: string }[];
}

const colors = [
  "#1900ff",
  "#DC2A2A",
  "#D47500",
  "#00AA55",
  "#009FD4",
  "#B381B3",
  "#939393",
  "#E3BC00",
  "#000000",
];

const Chart: React.FC<Props> = ({
  data,
  xAxisLabel,
  yAxisLabel,
  xDataKey,
  yDataKeys,
}) => {
  const lines = yDataKeys.map(({ key, name }, i) => (
    <Line
      key={key}
      name={name}
      dataKey={key}
      stroke={colors[i]}
      dot={false}
      strokeWidth={2}
      type="monotone"
    />
  ));
  const areas = yDataKeys.map(({ key }, i) => (
    <Area key={key} dataKey={key} stroke={colors[i]} fill="#2178db" />
  ));

  const tickConfig = { stroke: "#db744c", strokeWidth: 0.4 };

  const chart = (
    <LineChart
      height={600}
      width={600}
      data={data}
      margin={{ top: 20, right: 30, bottom: 0, left: 0 }}
    >
      <Legend />
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey={xDataKey}
        height={50}
        minTickGap={20}
        tick={tickConfig}
        label={{ value: xAxisLabel, dy: 7 }}
      ></XAxis>
      <YAxis domain={["auto", "auto"]} label={yAxisLabel} tick={tickConfig} />
      <Tooltip
        wrapperStyle={{
          borderColor: "white",
          boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
        }}
        contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        labelStyle={{ fontWeight: "bold", color: "#666666" }}
      />
      {lines}
      <Brush dataKey="date" height={60}>
        <AreaChart>
          <YAxis hide domain={["auto", "auto"]} />
          {areas}
        </AreaChart>
      </Brush>
    </LineChart>
  );

  // This conditioning is for the sake of testing.
  //Because ResponsiveContainer does not get rendered in node environment.
  if (process.env.NODE_ENV === "test") return chart;

  return (
    <ResponsiveContainer minHeight={"80vh"} minWidth="100%">
      {chart}
    </ResponsiveContainer>
  );
};

export default React.memo(Chart);
