import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('kyc webhook', req.body);
  res.status(200).json({ received: true });
}
