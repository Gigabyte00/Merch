import { ReactNode } from 'react';

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
