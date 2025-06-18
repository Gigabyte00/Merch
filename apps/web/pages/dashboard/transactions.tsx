import { useEffect, useState } from 'react';
import { Table } from '@/components/Table';
import { formatCurrency } from '@/utils/format';

type Transaction = {
  id: string;
  customerId?: string;
  amount: number;
  type: string;
  status: string;
  createdAt: string;
};

export default function TransactionsDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('/api/transactions/record')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Unified Transactions & Reporting</h1>
      <Table
        columns={['Type', 'Amount', 'Status', 'Date']}
        data={transactions.map(tx => [
          tx.type,
          formatCurrency(tx.amount),
          tx.status,
          new Date(tx.createdAt).toLocaleDateString()
        ])}
      />
    </div>
  );
}
