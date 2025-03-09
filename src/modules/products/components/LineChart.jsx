import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { useState } from 'react';
import PropTypes from 'prop-types';
import garriCoin from "../../../assets/products/garri-coin.svg";

const PriceLineChart = ({ data, currentPrice }) => {
  const [months, setMonths] = useState(6);

  if (!data || data.length === 0) {
    return <p className="text-gray-500">No price history data</p>;
  }

  const filteredData = data.slice(-months);

  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleString('default', { month: 'short' });
  };

  return (
    <div className="w-full p-4 h-[379px] rounded-[20px] shadow bg-[#FCFCFC]">
      <div className="flex justify-between mb-2">
        <div className="text-xs text-[#1B2028] font-roboto flex items-center gap-1">
          <p>Current Price:</p> 
          <div className='flex items-center'>
            <img src={garriCoin} alt="garri currency symbol" className='w-[12.367px] h-[12px]'/>
            <p className='text-xs font-roboto text-[#1B2028]'>{currentPrice}</p>
          </div>
        </div>
        <select
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="text-[#1B2028] font-roboto font-light text-xs cursor-pointer"
        >
          <option value={6}>6 months</option>
          <option value={12}>12 months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={filteredData}
          margin={{ top: 10, right: 0, left: -30, bottom: 30 }}
        >
          <XAxis
            dataKey="date"
            tickFormatter={formatXAxis}
            tick={{ fill: '#151B3B', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            tick={{ fill: '#151B3B', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={['auto', 'auto']}
            padding={{ top: 20, bottom: 20 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#151B3B', border: '1px solid #151B3B' }}
            labelStyle={{ color: '#fff', fontWeight: '500' }}
            cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#707070"
            fill="#70707033"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

PriceLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default PriceLineChart;