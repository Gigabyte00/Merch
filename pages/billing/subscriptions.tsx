#  pages/billing/subscriptions.tsx – Recurring Billing Interface

import { useEffect, useState } from 'react';
import { Table } from '@/components/Table';
import { formatCurrency } from '@/utils/format';

type Subscription = {
  id: string;
  customer: { name: string };
  amount: number;
  interval: string;
  status: string;
  startDate: string;
};

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    fetch('/api/billing/subscriptions')
      .then(res => res.json())
      .then(setSubscriptions);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Recurring Billing Manager</h1>
      <Table
        columns={['Customer', 'Amount', 'Interval', 'Status', 'Start']}
        data={subscriptions.map(sub => [
          sub.customer.name,
          formatCurrency(sub.amount),
          sub.interval,
          sub.status,
          new Date(sub.startDate).toLocaleDateString()
        ])}
      />
    </div>
  );
}
