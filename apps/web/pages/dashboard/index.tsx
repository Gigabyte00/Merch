import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    fetch('/api/admin/mark-status')
      .then(res => res.json())
      .then(() => setMerchants([{ id: '1', status: 'active' }]));
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Merchants Overview</h1>
      <ul>
        {merchants.map((m: any) => (
          <li key={m.id}>Merchant {m.id} - {m.status}</li>
        ))}
      </ul>
    </div>
  );
}
