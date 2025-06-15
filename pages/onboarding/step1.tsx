//  step1.tsx - # Business Info Form

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const schema = z.object({
  businessName: z.string().min(2),
  businessType: z.string(),
  address: z.string().min(5),
  contactEmail: z.string().email(),
  contactPhone: z.string().min(10),
  licenseDoc: z.any().optional()
});

export default function Step1() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    localStorage.setItem('onboarding-step1', JSON.stringify(data));
    router.push('/onboarding/step2');
  };

  return (
    <motion.div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-4">Business Information</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Business Name</label>
          <input {...register('businessName')} className="input" />
          {errors.businessName && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Business Type</label>
          <input {...register('businessType')} className="input" />
        </div>
        <div>
          <label className="block font-medium">Business Address</label>
          <input {...register('address')} className="input" />
        </div>
        <div>
          <label className="block font-medium">Contact Email</label>
          <input {...register('contactEmail')} className="input" />
        </div>
        <div>
          <label className="block font-medium">Contact Phone</label>
          <input {...register('contactPhone')} className="input" />
        </div>
        <div>
          <label className="block font-medium">Upload Business License (optional)</label>
          <input type="file" {...register('licenseDoc')} className="input" />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          Continue
        </button>
      </form>
    </motion.div>
  );
}
