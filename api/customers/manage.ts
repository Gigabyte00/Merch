import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: '1', name: 'Jane Doe', email: 'jane@example.com', createdAt: new Date().toISOString() }
  ]);
}
