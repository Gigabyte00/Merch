import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('stripe webhook', req.body);
  res.status(200).json({ received: true });
}
