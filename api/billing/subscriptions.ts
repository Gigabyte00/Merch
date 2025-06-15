import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const data = [
    { id: '1', customer: { name: 'Acme' }, amount: 9.99, interval: 'monthly', status: 'active', startDate: new Date().toISOString() }
  ];
  res.status(200).json(data);
}
