//pages/finance/forecasting.tsx – Revenue Forecast & Insights

import { useEffect, useState } from 'react';

type Forecast = {
  month: number;
  year: number;
  predictedRevenue: number;
};

export default function ForecastPage() {
  const [data, setData] = useState<Forecast[]>([]);

  useEffect(() => {
    fetch('/api/finance/forecast')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Revenue Forecast</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map(f => (
          <div key={`${f.month}-${f.year}`} className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow">
            <h2 className="font-semibold text-lg">
              {new Date(f.year, f.month - 1).toLocaleString('default', { month: 'long' })} {f.year}
            </h2>
            <p className="text-xl mt-2">${f.predictedRevenue.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
