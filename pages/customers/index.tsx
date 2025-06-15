//pages/customers/index.tsx – CRM-lite Customer Manager

import { useEffect, useState } from 'react';

type Customer = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function CustomerListPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch('/api/customers/manage')
      .then(res => res.json())
      .then(setCustomers);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Directory</h1>
      <table className="w-full text-sm bg-white dark:bg-zinc-900 shadow rounded">
        <thead>
          <tr>
            <th className="text-left p-2">Name</th>
            <th>Email</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td className="p-2">{c.name}</td>
              <td>{c.email}</td>
              <td>{new Date(c.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
