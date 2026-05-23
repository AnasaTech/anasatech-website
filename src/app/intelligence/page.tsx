import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Intelligence | Luxe AI',
  description: 'AI-powered business intelligence that surfaces insights before you ask for them.',
};

const insights = [
  {
    title: 'Sales Forecasting',
    description: 'Predict future sales based on historical patterns, seasonality, and trends. Know what to expect before it happens.',
  },
  {
    title: 'Demand Planning',
    description: 'AI analyzes purchase patterns to tell you exactly what to stock, when to reorder, and how much — eliminating guesswork.',
  },
  {
    title: 'Branch Performance',
    description: 'Automatically compare branches, identify underperformers, and surface the specific actions needed to improve.',
  },
  {
    title: 'Customer Insights',
    description: 'Understand buying behavior, identify at-risk customers, and get recommendations for retention campaigns.',
  },
  {
    title: 'Anomaly Detection',
    description: 'AI monitors your operations 24/7 and alerts you to unusual patterns — theft, sudden drops, or unexpected spikes.',
  },
  {
    title: 'Automated Reports',
    description: 'Daily, weekly, and monthly reports generated and delivered automatically — no manual work required.',
  },
];

export default function IntelligencePage() {
  return (
    <main>
      <Navbar />

      {/* Hero - dark */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-blue-400 mb-4">Intelligence</span>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] text-white leading-[1.1] font-normal">
            AI that thinks ahead<br className="hidden sm:block" />
            so you don&apos;t have to.
          </h1>
          <p className="mt-5 text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
            Luxe AI Intelligence continuously analyzes your business data and surfaces actionable insights — before problems become costly.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIGN_IN_URL || 'https://app.luxeai.com'}
            className="inline-flex items-center gap-3 bg-white text-black text-sm font-medium pl-6 pr-2 py-2.5 rounded-full hover:bg-neutral-100 transition-colors mt-8"
          >
            Get Started
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </span>
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal">
              Intelligence that works while you sleep
            </h2>
            <p className="mt-4 text-sm text-neutral-500 max-w-lg mx-auto">
              Our AI continuously monitors your data and proactively delivers insights — no queries needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <div key={insight.title} className="bg-[#f3f3f3] rounded-2xl p-6 md:p-8">
                <h3 className="text-base font-semibold text-black mb-2">{insight.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-16 md:py-24 px-6 md:px-8" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-black leading-[1.2] font-normal mb-4">
                Not just dashboards.<br /><span className="text-blue-600">Decisions.</span>
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Traditional analytics tools show you data. Luxe AI Intelligence tells you what to do about it.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Instead of spending hours reading charts, get a clear recommendation: &ldquo;Restock Samsung A54 screens at Kumasi branch — you&apos;ll run out by Thursday at current pace.&rdquo;
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">Proactive alerts</p>
                  <p className="text-xs text-neutral-500">AI notifies you before problems happen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">Actionable recommendations</p>
                  <p className="text-xs text-neutral-500">Not just data — specific next steps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">Continuous learning</p>
                  <p className="text-xs text-neutral-500">Gets smarter the more you use it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal">
              Your data stays yours. Always.
            </h2>
            <p className="mt-4 text-sm text-neutral-500 max-w-lg mx-auto">
              We take privacy seriously. Our AI is designed to be powerful without compromising your business data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f3f3f3] rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-black mb-2">Anonymized Processing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">All data is anonymized before it reaches our AI models. Your customer names, contact details, and sensitive information are never exposed to the intelligence layer.</p>
            </div>
            <div className="bg-[#f3f3f3] rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-black mb-2">No Training on Your Data</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">Our AI models are never trained on your private business data. Your information is used only to generate insights for you — it never improves models for others.</p>
            </div>
            <div className="bg-[#f3f3f3] rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-black mb-2">Sandboxed Architecture</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">Our intelligence layer is completely sandboxed from user data storage. The AI operates in an isolated environment with no direct access to your database.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl text-black font-normal mb-4">Let AI run your analytics.</h2>
          <p className="text-sm text-neutral-500 mb-6">Focus on growing your business. We&apos;ll handle the insights.</p>
          <a
            href={process.env.NEXT_PUBLIC_SIGN_IN_URL || 'https://app.luxeai.com'}
            className="inline-flex items-center gap-3 bg-black text-white text-sm font-medium pl-6 pr-2 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Get Started
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
