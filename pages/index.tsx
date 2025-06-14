import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-black text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Power Your Business with Merchant Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Accept payments, earn rewards, and manage transactions all from one branded dashboard.
        </p>
        <Link href="/onboarding/step1" className="inline-block mt-8">
          <span className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">Start Onboarding</span>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-16">
        {[
          { title: 'Lowest Cost Merchant Accounts', desc: 'Compare top providers like First Data, FortisPay, and PaySafe.' },
          { title: 'Crypto & Credit Card Support', desc: 'Accept USDC, ETH, and all major card brands with 1% transaction fees.' },
          { title: 'Trusted by Agencies & Consultants', desc: 'Referral commissions built-in with white-label control.' }
        ].map((card, i) => (
          <div key={i} className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8 space-y-2">
        <nav className="space-x-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div>© {new Date().getFullYear()} Your Company Name. All rights reserved.</div>
      </footer>
    </div>
  )
}
