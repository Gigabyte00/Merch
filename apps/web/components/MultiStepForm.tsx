import { ReactNode } from 'react';

export function MultiStepForm({ step, steps, children }: { step: number; steps: number; children: ReactNode }) {
  return (
    <div>
      <div className="mb-4">Step {step} of {steps}</div>
      {children}
    </div>
  );
}
