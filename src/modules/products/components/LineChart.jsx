import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  
  const PriceLineChart = ({ data }) => {
    if (!data || data.length === 0) {
      return <p className="text-gray-500">No price history data</p>;
    }
  
    return (
      <div className="w-full h-64">
        {/* Responsive container ensures the chart scales */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            {/* Gradient fill for the area under the line */}
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8884d8" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
  
            {/* X-axis at bottom with no axis line */}
            <XAxis
              dataKey="date"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            {/* Remove Y-axis to mimic the design (optional) */}
            <YAxis hide />
  
            {/* Tooltip on hover */}
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0' }}
              labelStyle={{ color: '#4b5563', fontWeight: '500' }}
              cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
            />
  
            {/* Smooth line + area fill */}
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              strokeWidth={2}
              fill="url(#priceGradient)"
              dot={false}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default PriceLineChart;
  