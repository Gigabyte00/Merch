import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const data = [
    { id: '1', amount: 20.5, type: 'sale', status: 'approved', createdAt: new Date().toISOString() }
  ];
  res.status(200).json(data);
}
