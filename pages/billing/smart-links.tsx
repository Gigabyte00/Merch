//pages/billing/smart-links.tsx – Smart Payment Links & QR

import { useState } from 'react';
import { QRCodeBox } from '@/components/QRCodeBox';

export default function SmartLinksPage() {
  const [amount, setAmount] = useState('');
  const [link, setLink] = useState('');
  const [showQR, setShowQR] = useState(false);

  const generateLink = async () => {
    const res = await fetch('/api/billing/invoices', {
      method: 'POST',
      body: JSON.stringify({ amount: parseFloat(amount) }),
    });
    const { url } = await res.json();
    setLink(url);
    setShowQR(true);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Smart Payment Links</h1>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border rounded p-2"
        placeholder="Amount in USD"
      />
      <button onClick={generateLink} className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">
        Generate Link
      </button>
      {showQR && <QRCodeBox value={link} />}
    </div>
  );
}
