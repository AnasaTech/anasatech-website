import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoadingImage from '@/components/ui/LoadingImage';

export const metadata = {
  title: 'AI Chat | Luxe AI',
  description: 'Talk to your business data in natural language. Ask about inventory, sales, customers, and more.',
};

const capabilities = [
  {
    title: 'Inventory',
    description: 'Ask about stock levels, get low-stock alerts, and find out what needs restocking across all branches.',
    examples: ['"How many iPhone 15 screens do we have?"', '"Which items are running low?"'],
  },
  {
    title: 'Sales',
    description: 'Get instant answers about revenue, best sellers, trends, and branch performance.',
    examples: ['"What were our top sellers last week?"', '"Compare Osu and Kumasi branch sales"'],
  },
  {
    title: 'Customers',
    description: 'Understand your customers — who buys what, who hasn\'t returned, and how to bring them back.',
    examples: ['"Who are my top 10 customers?"', '"Which customers haven\'t visited in 2 weeks?"'],
  },
  {
    title: 'Business',
    description: 'High-level insights about your business health, growth, and opportunities.',
    examples: ['"How are we doing this month vs last?"', '"What day of the week has the most sales?"'],
  },
];

export default function AIChatPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-8" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-blue-600 mb-4">AI Chat</span>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] text-black leading-[1.1] font-normal">
            Talk to your business data.<br className="hidden sm:block" />
            Get answers instantly.
          </h1>
          <p className="mt-5 text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
            No dashboards to learn. No reports to generate. Just ask a question in plain language and get the answer — with charts, numbers, and actionable insights.
          </p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
            <LoadingImage
              src="/ai-chat-screenshot.png"
              alt="Luxe AI Chat interface showing natural language queries with chart responses"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal text-center mb-12">
            What you can ask about
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-[#f3f3f3] rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-black mb-2">{cap.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{cap.description}</p>
                <div className="space-y-2">
                  {cap.examples.map((ex) => (
                    <p key={ex} className="text-xs text-neutral-400 italic">{ex}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-8" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl text-black font-normal mb-4">Ready to talk to your data?</h2>
          <p className="text-sm text-neutral-500 mb-6">Start a conversation with your business today.</p>
          <a
            href={process.env.NEXT_PUBLIC_SIGN_IN_URL || 'https://app.luxeai.com'}
            className="inline-flex items-center gap-3 bg-black text-white text-sm font-medium pl-6 pr-2 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Try AI Chat
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
