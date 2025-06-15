import { useState } from 'react';

export default function VirtualTerminal() {
  const [amount, setAmount] = useState('');

  const submit = () => {
    console.log('charge', amount);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Virtual Terminal</h1>
      <input className="input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={submit}>Charge</button>
    </div>
  );
}
