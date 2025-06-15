import { useEffect, useState } from 'react';

export default function AgencyDashboard() {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    setCommissions([{ id: '1', amount: 50 }]);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Agency Commissions</h1>
      <ul>
        {commissions.map((c: any) => (
          <li key={c.id}>Commission ${c.amount}</li>
        ))}
      </ul>
    </div>
  );
}
