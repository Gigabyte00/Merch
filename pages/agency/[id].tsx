import { useRouter } from 'next/router';

export default function AgencyLanding() {
  const { query } = useRouter();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Agency {query.id}</h1>
      <p>Sign up under this agency to earn perks.</p>
    </div>
  );
}
