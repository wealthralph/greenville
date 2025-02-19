import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    {
      name: "Mon",
      uv: 4000,
      pv: 2400,
      amt: 2400,
      points: 10,
    },
    {
      name: "Tue",
      uv: 3000,
      pv: 1398,
      amt: 2210,
      points: 50,
    },
    {
      name: "Wed",
      uv: 2000,
      pv: 9800,
      amt: 2290,
      points: 70,
    },
    {
      name: "Thu",
      uv: 2780,
      pv: 3908,
      amt: 2000,
      points: 30,
    },
    {
      name: "Fri",
      uv: 1890,
      pv: 4800,
      amt: 2181,
      points: 50,
    },
    {
      name: "Sat",
      uv: 2390,
      pv: 3800,
      amt: 2500,
      points: 15,
    },
    {
      name: "Sun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
      points: 20,
    },
  ];
  
  export default function App() {
    return (
      <div className="chart_con">
      <ResponsiveContainer width={"100%"} height={200}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey='points' />
          <Tooltip />
          <Bar
            barSize={20}
            dataKey="points"
            fill="#B6F5AC"
            activeBar={<Rectangle fill="#f4a261"  />}
          />
          {/* <Bar
            dataKey="pv"
            fill="#FF5F5E"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          /> */}
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
  