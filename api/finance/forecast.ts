import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { month: new Date().getMonth() + 1, year: new Date().getFullYear(), predictedRevenue: 1000 }
  ]);
}
