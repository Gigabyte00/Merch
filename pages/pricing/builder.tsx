import { useState } from 'react';

export default function PricingBuilder() {
  const [name, setName] = useState('');
  const [rate, setRate] = useState('');

  const save = () => {
    console.log('save', { name, rate });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Pricing Sheet Builder</h1>
      <input className="input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="input" placeholder="Rate" value={rate} onChange={e => setRate(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={save}>Save</button>
    </div>
  );
}
