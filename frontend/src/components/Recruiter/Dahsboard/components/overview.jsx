import { Bar, LineChart , BarChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 1000) + 1, // Modifié pour générer des nombres de 1 à 1000
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 1000) + 1,
  },
];

export function Overview() {

  return (
    <div className={'w-full flex flex-wrap lg:flex-nowrap'}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
         <YAxis
  stroke="#888888"
  fontSize={12}
  tickLine={false}
  axisLine={false}
  label={{
    value: 'Offers',
    position: 'insideBottom',
    dx: -15, // Ajuster la valeur de dx pour déplacer le titre vers la gauche
    dy: -280
  }}
/>

          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

