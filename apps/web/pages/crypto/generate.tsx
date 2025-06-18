import { useState } from 'react';
import { generateQR } from '@/lib/crypto/generateQR';
import { QRCodeBox } from '@/components/QRCodeBox';

export default function GenerateQRPage() {
  const [value, setValue] = useState('');
  const [qr, setQr] = useState('');

  const create = async () => {
    const data = await generateQR(value);
    setQr(data);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Generate Payment QR</h1>
      <input className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Payment data" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={create}>Create</button>
      {qr && <QRCodeBox value={qr} />}
    </div>
  );
}
