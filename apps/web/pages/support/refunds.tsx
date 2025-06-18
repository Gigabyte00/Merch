//pages/support/refunds.tsx – Refund & Void Management

import { useEffect, useState } from 'react';

type RefundRequest = {
  id: string;
  transactionId: string;
  amount: number;
  status: string;
  createdAt: string;
};

export default function RefundsPage() {
  const [refunds, setRefunds] = useState<RefundRequest[]>([]);

  useEffect(() => {
    fetch('/api/support/refund')
      .then(res => res.json())
      .then(setRefunds);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Refunds & Voids</h1>
      <table className="min-w-full bg-white dark:bg-zinc-900 text-sm shadow rounded">
        <thead>
          <tr>
            <th className="p-2">Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Requested</th>
          </tr>
        </thead>
        <tbody>
          {refunds.map(r => (
            <tr key={r.id}>
              <td className="p-2">{r.transactionId}</td>
              <td>${r.amount.toFixed(2)}</td>
              <td>{r.status}</td>
              <td>{new Date(r.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
