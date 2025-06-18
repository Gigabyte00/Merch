import { useEffect, useState } from 'react';

export default function DisputesPage() {
  const [disputes, setDisputes] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/support/dispute').then(res => res.json()).then(setDisputes);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Disputes</h1>
      <ul>
        {disputes.map(d => (
          <li key={d.id}>Dispute {d.id}</li>
        ))}
      </ul>
    </div>
  );
}
