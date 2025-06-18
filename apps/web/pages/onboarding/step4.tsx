import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Step4() {
  const router = useRouter();

  const submit = async () => {
    await fetch('/api/onboarding/submit', { method: 'POST' });
    router.push('/dashboard');
  };

  return (
    <motion.div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-4">Review & Submit</h1>
      <p className="mb-4">All steps complete. Submit to finish onboarding.</p>
      <button onClick={submit} className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Submit</button>
    </motion.div>
  );
}
