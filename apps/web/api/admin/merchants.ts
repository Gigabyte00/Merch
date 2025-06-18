import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const merchants = [
    { id: '1', businessName: 'Demo Co', status: 'active' },
    { id: '2', businessName: 'Acme Corp', status: 'pending' }
  ];

  const { status } = req.query;
  const filtered = status
    ? merchants.filter(m => m.status === status)
    : merchants;

  res.status(200).json(filtered);
}
