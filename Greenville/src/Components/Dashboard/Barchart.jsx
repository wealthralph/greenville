// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Rectangle,
//     ResponsiveContainer,
//   } from "recharts";
  
//   const data = [
//     {
//       name: "Mon",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//       points: 10,
//     },
//     {
//       name: "Tue",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//       points: 50,
//     },
//     {
//       name: "Wed",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//       points: 70,
//     },
//     {
//       name: "Thu",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//       points: 30,
//     },
//     {
//       name: "Fri",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//       points: 50,
//     },
//     {
//       name: "Sat",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//       points: 15,
//     },
//     {
//       name: "Sun",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//       points: 20,
//     },
//   ];
  
//   export default function App() {
//     return (
//       <div className="chart_con">
//       <ResponsiveContainer width={"100%"} height={200}>
//         <BarChart
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 0,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis dataKey='points' />
//           <Tooltip />
//           <Bar
//             barSize={20}
//             dataKey="points"
//             fill="#B6F5AC"
//             activeBar={<Rectangle fill="#f4a261"  />}
//           />
//           {/* <Bar
//             dataKey="pv"
//             fill="#FF5F5E"
//             activeBar={<Rectangle fill="gold" stroke="purple" />}
//           /> */}
//         </BarChart>
//       </ResponsiveContainer>
//       </div>
//     );
//   }
  
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

const data = [
  { date: "2000-01", uv: 4000, pv: 2400, amt: 2400, points: 400 },
  { date: "2000-02", uv: 3000, pv: 1398, amt: 2210, points: 1000 },
  { date: "2000-03", uv: 2000, pv: 9800, amt: 2290, points: 500 },
  { date: "2000-04", uv: 2780, pv: 3908, amt: 2000, points: 100 },
  { date: "2000-05", uv: 1890, pv: 4800, amt: 2181, points: 200 },
  { date: "2000-06", uv: 2390, pv: 3800, amt: 2500, points: 700 },
  { date: "2000-07", uv: 3490, pv: 4300, amt: 2100, points: 300 },
  { date: "2000-08", uv: 4000, pv: 2400, amt: 2400, points: 200 },
  { date: "2000-09", uv: 3000, pv: 1398, amt: 2210, points: 800 },
  { date: "2000-10", uv: 2000, pv: 9800, amt: 2290, points: 100 },
  { date: "2000-11", uv: 2780, pv: 3908, amt: 2000, points: 300 },
  { date: "2000-12", uv: 1890, pv: 4800, amt: 2181, points: 500 },
];

/*const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return (
      <text x={x} y={y - 4} textAnchor="middle">
        {`Q${quarterNo}`}
      </text>
    );
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};*/

const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[date.getMonth()];
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return (
      <text x={x} y={y + 20} textAnchor="middle" fill="#666">
        {`Q${quarterNo}`}
      </text>
    );
  }

  return null;
};

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          marginBottom: "5px",
          marginLeft: "10%",
          textAlign: "left",
          spacing: 10,
          fontWeight: "bold",
        }}
      >
        Monthly Engagement Stats
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          className="barz"
          width={500}
          height={400}
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="15%" // Increased space between bars
        >
          <CartesianGrid strokeDasharray="1 3" stroke="transparent" />
          <XAxis
            dataKey="date"
            tickFormatter={monthTickFormatter}
            tick={{
              fontSize: 10, // Smaller font size
              fontWeight: "normal",
              fill: "#555", // Darker color for better visibility
            }}
            interval={0}
            axisLine={false}
            tickLine={false}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={20} // Adjusted height for visibility
            scale="band"
            // xAxisId="quarter"
          />
          <YAxis dataKey="points" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="points"
            fill="#B6F5AC"
            name="Engagement Points"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

 