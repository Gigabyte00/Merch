import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: '1', transactionId: 'tx1', amount: 10, status: 'pending', createdAt: new Date().toISOString() }
  ]);
}
