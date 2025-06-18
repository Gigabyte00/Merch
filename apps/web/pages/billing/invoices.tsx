import { useEffect, useState } from 'react';
import { Table } from '@/components/Table';
import { formatCurrency } from '@/utils/format';

export default function InvoicesPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/billing/invoices').then(res => res.json()).then(setData);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Invoices</h1>
      <Table
        columns={['Amount', 'Status', 'Due']}
        data={data.map(inv => [formatCurrency(inv.amount), inv.status, new Date(inv.dueDate).toLocaleDateString()])}
      />
    </div>
  );
}
