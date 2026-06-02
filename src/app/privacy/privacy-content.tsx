'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'who-we-are', title: 'Who We Are' },
  { id: 'scope', title: 'Scope' },
  { id: 'data-we-collect', title: 'Data We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Data' },
  { id: 'legal-basis', title: 'Legal Basis' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'international-transfers', title: 'International Transfers' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'age-requirements', title: 'Age Requirements' },
  { id: 'business-customer-data', title: 'Business Customer Data' },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact Us' },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState('who-we-are');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-3">Legal</p>
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-3">Privacy Policy</h1>
          <p className="text-base text-neutral-500">Last updated: June 2, 2026</p>
        </div>

        {/* Layout: sidebar + content */}
        <div className="flex gap-16">
          {/* Sticky sidebar - desktop only */}
          <nav className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24 space-y-1">
              {sections.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-[13px] py-1.5 pl-3 border-l-2 transition-colors ${
                    activeSection === id
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  {title}
                </a>
              ))}
            </div>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl">

            {/* Section 1 */}
            <section id="who-we-are" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">1. Who We Are</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                Luxe AI is a product of <strong>Kintari Technologies Limited</strong> (trading as &ldquo;Anasatech&rdquo;), a company registered in the Republic of Ghana. We provide cloud-based point-of-sale, inventory management, and AI-powered business intelligence software for businesses across Africa.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4 text-sm text-neutral-600 border border-neutral-100">
                <p><strong>Registered Name:</strong> Kintari Technologies Limited</p>
                <p><strong>Trading As:</strong> Anasatech</p>
                <p><strong>Location:</strong> Accra, Ghana</p>
                <p><strong>Contact:</strong> info@anasatech.com</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="scope" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">2. Scope</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                This Privacy Policy applies to all users of:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-[15px] text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong>Luxe AI Web Application</strong> — luxeai.anasatech.com</span>
                </li>
                <li className="flex items-start gap-2 text-[15px] text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong>Customer Ordering App</strong> — customer.anasatech.com</span>
                </li>
                <li className="flex items-start gap-2 text-[15px] text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong>Luxe AI Website</strong> — www.anasatech.com</span>
                </li>
                <li className="flex items-start gap-2 text-[15px] text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong>Mobile applications</strong> (current and future)</span>
                </li>
              </ul>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                It covers data collected from <strong>business account owners</strong>, their <strong>employees</strong> (authorized users), and <strong>end customers</strong> who interact with businesses through our platform.
              </p>
            </section>

            {/* Section 3 */}
            <section id="data-we-collect" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">3. Data We Collect</h2>

              <h3 className="text-base font-semibold text-black mt-6 mb-2">Account Information</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-2">When you create a Luxe AI account:</p>
              <ul className="space-y-1.5 mb-6 ml-4">
                <li className="text-[15px] text-neutral-600">• Full name, email address, phone number</li>
                <li className="text-[15px] text-neutral-600">• Business name, address, and branch information</li>
                <li className="text-[15px] text-neutral-600">• Profile photo (optional)</li>
                <li className="text-[15px] text-neutral-600">• Password (stored in encrypted form)</li>
              </ul>

              <h3 className="text-base font-semibold text-black mt-6 mb-2">Business & Operational Data</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-2">In the course of using our platform:</p>
              <ul className="space-y-1.5 mb-6 ml-4">
                <li className="text-[15px] text-neutral-600">• Product catalogs, pricing, and inventory levels</li>
                <li className="text-[15px] text-neutral-600">• Sales transactions and order history</li>
                <li className="text-[15px] text-neutral-600">• Purchase orders and supplier information</li>
                <li className="text-[15px] text-neutral-600">• Stock transfer records between branches</li>
                <li className="text-[15px] text-neutral-600">• Financial data (expenses, revenue, payment records)</li>
                <li className="text-[15px] text-neutral-600">• Customer and employee records created by businesses</li>
              </ul>

              <h3 className="text-base font-semibold text-black mt-6 mb-2">Payment Information</h3>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <p className="text-[15px] text-neutral-700">
                  We facilitate payments through <strong>Paystack</strong>. We do <strong>not</strong> store full credit card numbers or mobile money PINs. Payment processors handle card data in compliance with PCI-DSS standards.
                </p>
              </div>

              <h3 className="text-base font-semibold text-black mt-6 mb-2">AI Interaction Data</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-6">
                When you use our AI Chat feature, we collect your queries and the responses generated. AI queries are processed by third-party language model providers (Google, OpenRouter) — only business-context data relevant to your query is shared, <strong>never raw credentials or payment data</strong>.
              </p>

              <h3 className="text-base font-semibold text-black mt-6 mb-2">Technical & Usage Data</h3>
              <ul className="space-y-1.5 mb-6 ml-4">
                <li className="text-[15px] text-neutral-600">• IP address, browser type, device information</li>
                <li className="text-[15px] text-neutral-600">• Pages visited, features used, session duration</li>
                <li className="text-[15px] text-neutral-600">• Error logs and performance data</li>
              </ul>

              <h3 className="text-base font-semibold text-black mt-6 mb-2">Cookies & Analytics</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Our application uses a <strong>session cookie solely to maintain your authenticated session</strong>. We do not use tracking cookies. We use Google Analytics on our marketing website to understand traffic patterns — this collects anonymized usage data subject to Google&apos;s privacy policy.
              </p>
            </section>

            {/* Section 4 */}
            <section id="how-we-use" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">4. How We Use Your Data</h2>
              <div className="space-y-3">
                {[
                  'Provide, maintain, and improve our services',
                  'Process transactions and send transaction notifications',
                  'Generate business reports and AI-powered insights',
                  'Provide customer support',
                  'Send service-related communications (not marketing)',
                  'Detect and prevent fraud or unauthorized access',
                  'Comply with legal obligations',
                  'Aggregate anonymized data for product improvement',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-medium text-neutral-500">{i + 1}</span>
                    </span>
                    <span className="text-[15px] text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-green-50 border border-green-100 rounded-lg p-4">
                <p className="text-[15px] text-neutral-700 font-medium">
                  We do not sell your personal data to third parties. We do not use your business data for advertising purposes.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="legal-basis" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">5. Legal Basis for Processing</h2>
              <div className="grid gap-3">
                {[
                  { basis: 'Contract performance', desc: 'Necessary to deliver the service you signed up for' },
                  { basis: 'Legitimate interest', desc: 'To improve our products, prevent fraud, and ensure security' },
                  { basis: 'Consent', desc: 'Where required (e.g., marketing communications, analytics)' },
                  { basis: 'Legal obligation', desc: 'Where we are required by law to retain or disclose data' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                    <span className="text-[15px]"><strong>{item.basis}:</strong> {item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="data-sharing" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">6. Data Sharing & Third Parties</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                We share data only with the following service providers:
              </p>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold text-black">Provider</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Paystack', 'Payment processing (cards, Mobile Money)'],
                      ['Google Cloud / OpenRouter', 'AI language model inference'],
                      ['Railway', 'Cloud infrastructure hosting'],
                      ['Google Analytics', 'Website traffic analytics (anonymized)'],
                    ].map(([provider, purpose], i) => (
                      <tr key={i} className="border-b border-neutral-100 last:border-0">
                        <td className="py-3 px-4 font-medium text-neutral-800">{provider}</td>
                        <td className="py-3 px-4 text-neutral-600">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[15px] text-neutral-700 leading-relaxed mt-4">
                All third-party providers are bound by data processing agreements. <strong>We do not share data with third parties for their own marketing purposes.</strong>
              </p>
            </section>

            {/* Section 7 */}
            <section id="international-transfers" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">7. International Data Transfers</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Our services are hosted on cloud infrastructure that may process data outside your country of residence. Where data is transferred internationally, we ensure appropriate safeguards:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-[15px] text-neutral-600">• Standard contractual clauses with service providers</li>
                <li className="text-[15px] text-neutral-600">• Compliance with applicable data transfer frameworks</li>
                <li className="text-[15px] text-neutral-600">• <strong>Encryption of data in transit and at rest</strong></li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="data-retention" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">8. Data Retention</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                We retain your data for as long as your account is active. When you request account deletion:
              </p>
              <div className="space-y-3">
                {[
                  'Your account is deactivated immediately',
                  'All personal and business data is permanently deleted within 90 days',
                  'This grace period allows for backup cleanup and fraud prevention review',
                  'Anonymized, aggregated data (which cannot identify you) may be retained for analytics',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[11px] font-medium text-white">{i + 1}</span>
                    </div>
                    <span className="text-[15px] text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-lg p-4">
                <p className="text-[15px] text-neutral-700">
                  <strong>Exception:</strong> Financial records may be retained longer where required by law (e.g., tax compliance — typically 5-7 years depending on jurisdiction).
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="data-security" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">9. Data Security</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                We implement industry-standard security measures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Encryption in transit (TLS 1.2+) and at rest',
                  'Secure password hashing (bcrypt)',
                  'Role-based access controls',
                  'Regular security audits',
                  'Encrypted database backups',
                  'Secure HTTP-only session cookies',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[14px] text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[15px] text-neutral-700 leading-relaxed mt-4">
                We will notify affected users promptly in the event of a data breach.
              </p>
            </section>

            {/* Section 10 */}
            <section id="your-rights" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">10. Your Rights</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Under applicable law — including Ghana&apos;s Data Protection Act 2012, Kenya&apos;s Data Protection Act 2019, Uganda&apos;s Data Protection and Privacy Act 2019, Botswana&apos;s Data Protection Act 2018, Zambia&apos;s Data Protection Act 2021, and Mauritius&apos; Data Protection Act 2017 — you have the right to:
              </p>
              <div className="space-y-2">
                {[
                  { right: 'Access', desc: 'Request a copy of your personal data' },
                  { right: 'Rectification', desc: 'Correct inaccurate or incomplete data' },
                  { right: 'Deletion', desc: 'Request deletion of your data ("right to be forgotten")' },
                  { right: 'Data portability', desc: 'Receive your data in a machine-readable format' },
                  { right: 'Restriction', desc: 'Limit how we process your data' },
                  { right: 'Objection', desc: 'Object to processing based on legitimate interest' },
                  { right: 'Withdraw consent', desc: 'Where processing is based on consent' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-[15px] font-semibold text-black w-32 shrink-0">{item.right}</span>
                    <span className="text-[15px] text-neutral-600">{item.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-[15px] text-neutral-700 leading-relaxed mt-4">
                To exercise any of these rights, contact us at <strong>info@anasatech.com</strong>. We will respond within 30 days.
              </p>
            </section>

            {/* Section 11 */}
            <section id="age-requirements" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">11. Age Requirements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
                  <p className="text-2xl font-semibold text-black">18+</p>
                  <p className="text-sm text-neutral-600 mt-1">Account owners (business owners who register and accept terms)</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
                  <p className="text-2xl font-semibold text-black">16+</p>
                  <p className="text-sm text-neutral-600 mt-1">Authorized users (employees added by the account owner)</p>
                </div>
              </div>
              <p className="text-[15px] text-neutral-700 leading-relaxed mt-4">
                We do not knowingly collect personal data from individuals under 16. If we become aware that a user is under 16, we will delete their data promptly.
              </p>
            </section>

            {/* Section 12 */}
            <section id="business-customer-data" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">12. Business Customer Data</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Businesses using Luxe AI may collect data about their own customers through our platform. In this case:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-[15px] text-neutral-700">The business is the <strong>data controller</strong> for their customer data</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-[15px] text-neutral-700">Kintari Technologies Limited acts as a <strong>data processor</strong></span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-[15px] text-neutral-700">Businesses are responsible for obtaining appropriate consent from their customers</span>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section id="changes" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">13. Changes to This Policy</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                We may update this Privacy Policy from time to time. When we make material changes, we will notify you via email or an in-app notification <strong>at least 14 days before</strong> the changes take effect. Continued use of the service after changes constitutes acceptance.
              </p>
            </section>

            {/* Section 14 */}
            <section id="governing-law" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">14. Governing Law</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                This Privacy Policy is governed by the laws of the Republic of Ghana, including the <strong>Data Protection Act 2012 (Act 843)</strong>. For users in other jurisdictions, additional local data protection rights may apply as referenced in Section 10.
              </p>
            </section>

            {/* Section 15 */}
            <section id="contact" className="mb-14 scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-4">15. Contact Us</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your data rights:
              </p>
              <div className="bg-neutral-50 rounded-lg p-5 border border-neutral-100">
                <p className="text-base font-medium text-black">Kintari Technologies Limited</p>
                <p className="text-sm text-neutral-500 mt-0.5">Trading as Anasatech</p>
                <div className="mt-3 space-y-1">
                  <p className="text-[15px] text-neutral-700">📧 info@anasatech.com</p>
                  <p className="text-[15px] text-neutral-700">📍 Accra, Ghana</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
