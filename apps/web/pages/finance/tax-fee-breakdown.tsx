//pages/finance/tax-fee-breakdown.tsx – Fee Transparency UI

import { useEffect, useState } from 'react';

type FeeSummary = {
  period: string;
  volume: number;
  gatewayFees: number;
  processorFees: number;
  netReceived: number;
};

export default function FeeBreakdownPage() {
  const [summary, setSummary] = useState<FeeSummary[]>([]);

  useEffect(() => {
    fetch('/api/finance/fees')
      .then(res => res.json())
      .then(setSummary);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tax & Fee Breakdown</h1>
      <table className="w-full bg-white dark:bg-zinc-900 text-sm rounded shadow">
        <thead>
          <tr>
            <th className="p-2 text-left">Period</th>
            <th>Volume</th>
            <th>Gateway Fees</th>
            <th>Processor Fees</th>
            <th>Net Received</th>
          </tr>
        </thead>
        <tbody>
          {summary.map(s => (
            <tr key={s.period}>
              <td className="p-2">{s.period}</td>
              <td>${s.volume.toFixed(2)}</td>
              <td>${s.gatewayFees.toFixed(2)}</td>
              <td>${s.processorFees.toFixed(2)}</td>
              <td>${s.netReceived.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
