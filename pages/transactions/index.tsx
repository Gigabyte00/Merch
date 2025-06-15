import { useEffect, useState } from 'react';
import { Table } from '@/components/Table';
import { formatCurrency } from '@/utils/format';

export default function TransactionsPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/transactions/record').then(res => res.json()).then(setData);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <Table
        columns={['Type', 'Amount', 'Status', 'Date']}
        data={data.map(tx => [tx.type, formatCurrency(tx.amount), tx.status, new Date(tx.createdAt).toLocaleDateString()])}
      />
    </div>
  );
}
