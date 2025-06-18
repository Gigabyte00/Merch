import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const schema = z.object({
  routing: z.string().min(9),
  account: z.string().min(5),
  ssn: z.string().min(4),
});

export default function Step2() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => {
    localStorage.setItem('onboarding-step2', JSON.stringify(data));
    router.push('/onboarding/step3');
  };

  return (
    <motion.div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-4">Bank & KYC Info</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Routing Number</label>
          <input {...register('routing')} className="input" />
        </div>
        <div>
          <label className="block font-medium">Account Number</label>
          <input {...register('account')} className="input" />
        </div>
        <div>
          <label className="block font-medium">Last 4 SSN</label>
          <input {...register('ssn')} className="input" />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Continue</button>
      </form>
    </motion.div>
  );
}
