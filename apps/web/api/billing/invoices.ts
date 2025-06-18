import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount } = JSON.parse(req.body || '{}');
    res.status(200).json({ url: `/pay/${amount}` });
  } else {
    res.status(200).json([]);
  }
}
