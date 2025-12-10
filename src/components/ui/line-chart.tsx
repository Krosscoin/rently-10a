import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  dataKey: string;
  lineColor: string;
  xAxisDataKey?: string;
}

const CustomLineChart: React.FC<LineChartProps> = ({ data, dataKey, lineColor, xAxisDataKey = "name" }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis dataKey={xAxisDataKey} stroke="hsl(var(--muted-foreground))" />
      <YAxis stroke="hsl(var(--muted-foreground))" />
      <Tooltip
        cursor={{ stroke: 'hsl(var(--muted-foreground))', strokeDasharray: '3 3' }}
        wrapperStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: '4px', padding: '10px' }}
        labelStyle={{ color: 'hsl(var(--foreground))' }}
        itemStyle={{ color: 'hsl(var(--primary))' }}
      />
      <Legend />
      <Line type="monotone" dataKey={dataKey} stroke={lineColor} activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default CustomLineChart;
