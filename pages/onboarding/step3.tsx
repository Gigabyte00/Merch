import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Step3() {
  const router = useRouter();
  const [provider, setProvider] = useState('stripe');

  const submit = () => {
    localStorage.setItem('onboarding-step3', JSON.stringify({ provider }));
    router.push('/onboarding/step4');
  };

  return (
    <motion.div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-4">Choose Provider</h1>
      <select value={provider} onChange={e => setProvider(e.target.value)} className="input w-full mb-4">
        <option value="stripe">Stripe</option>
        <option value="fortis">Fortis</option>
        <option value="paysafe">Paysafe</option>
        <option value="firstdata">First Data</option>
      </select>
      <button onClick={submit} className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Continue</button>
    </motion.div>
  );
}
