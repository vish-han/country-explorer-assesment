import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const sampleData = [
  { name: '00:00', value: 45 },
  { name: '04:00', value: 30 },
  { name: '08:00', value: 60 },
  { name: '12:00', value: 35 },
  { name: '16:00', value: 50 },
  { name: '20:00', value: 40 }
];

const Chart = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <LineChart width={500} height={300} data={sampleData}>
        <XAxis dataKey="name" stroke="#4B5563" />
        <YAxis stroke="#4B5563" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
          labelStyle={{ color: '#9CA3AF' }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#3B82F6" 
          strokeWidth={2} 
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default Chart;