import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PricingPublic() {
  const { query } = useRouter();
  const [sheet, setSheet] = useState<any>(null);

  useEffect(() => {
    if (query.id) {
      setSheet({ id: query.id, rate: '2.9%' });
    }
  }, [query.id]);

  if (!sheet) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Pricing Sheet {sheet.id}</h1>
      <p>Rate: {sheet.rate}</p>
    </div>
  );
}
