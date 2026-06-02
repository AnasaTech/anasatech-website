'use client';

import LoadingImage from '@/components/ui/LoadingImage';

function CashIcon() {
  return (
    <svg width="36" height="32" viewBox="0 0 36 31" fill="none">
      <path d="M6.33 11.08C6.75 11.08 7.16 11.25 7.45 11.55 7.75 11.84 7.92 12.25 7.92 12.67 10.41 12.66 12.82 13.5 14.77 15.04H18.21C20.32 15.04 22.22 15.96 23.52 17.42H28.5C30 17.42 31.46 17.84 32.73 18.64 34 19.44 35.01 20.58 35.65 21.93 31.91 26.87 25.84 30.08 19 30.08 14.58 30.08 10.85 29.13 7.82 27.46 7.71 27.76 7.51 28.03 7.24 28.21 6.98 28.4 6.66 28.5 6.33 28.5H1.58C1.16 28.5.76 28.33.46 28.04.17 27.74 0 27.34 0 26.92V12.67C0 12.25.17 11.84.46 11.55.76 11.25 1.16 11.08 1.58 11.08H6.33ZM7.92 15.83V23.78L7.99 23.84C10.83 25.83 14.53 26.92 19 26.92 23.76 26.92 28.18 25.09 31.41 21.96L31.62 21.75 31.43 21.59C30.68 21.01 29.77 20.66 28.83 20.59L28.5 20.58H25.16C25.27 21.09 25.33 21.62 25.33 22.17V23.75H11.08V20.58L21.84 20.58 21.78 20.46C21.48 19.82 21.01 19.28 20.43 18.89 19.85 18.49 19.17 18.26 18.47 18.22L18.21 18.21H13.57C12.83 17.46 11.95 16.86 10.98 16.45 10.01 16.04 8.97 15.83 7.92 15.83ZM4.75 14.25H3.17V25.33H4.75V14.25ZM26.92 4.75C28.18 4.75 29.39 5.25 30.28 6.14 31.17 7.03 31.67 8.24 31.67 9.5 31.67 10.76 31.17 11.97 30.28 12.86 29.39 13.75 28.18 14.25 26.92 14.25 25.66 14.25 24.45 13.75 23.56 12.86 22.67 11.97 22.17 10.76 22.17 9.5 22.17 8.24 22.67 7.03 23.56 6.14 24.45 5.25 25.66 4.75 26.92 4.75ZM26.92 7.92C26.5 7.92 26.1 8.08 25.8 8.38 25.5 8.68 25.33 9.08 25.33 9.5 25.33 9.92 25.5 10.32 25.8 10.62 26.1 10.92 26.5 11.08 26.92 11.08 27.34 11.08 27.74 10.92 28.04 10.62 28.33 10.32 28.5 9.92 28.5 9.5 28.5 9.08 28.33 8.68 28.04 8.38 27.74 8.08 27.34 7.92 26.92 7.92ZM15.83 0C17.09 0 18.3.5 19.19 1.39 20.08 2.28 20.58 3.49 20.58 4.75 20.58 6.01 20.08 7.22 19.19 8.11 18.3 9 17.09 9.5 15.83 9.5 14.58 9.5 13.37 9 12.48 8.11 11.59 7.22 11.08 6.01 11.08 4.75 11.08 3.49 11.59 2.28 12.48 1.39 13.37.5 14.58 0 15.83 0ZM15.83 3.17C15.42 3.17 15.01 3.33 14.72 3.63 14.42 3.93 14.25 4.33 14.25 4.75 14.25 5.17 14.42 5.57 14.72 5.87 15.01 6.17 15.42 6.33 15.83 6.33 16.25 6.33 16.66 6.17 16.95 5.87 17.25 5.57 17.42 5.17 17.42 4.75 17.42 4.33 17.25 3.93 16.95 3.63 16.66 3.33 16.25 3.17 15.83 3.17Z" fill="#0EA44A"/>
    </svg>
  );
}

const paymentOptions = [
  { type: 'cash' as const, label: 'Cash' },
  { type: 'image' as const, image: '/mtn-logo.jpg', label: 'MTN MoMo' },
  { type: 'image' as const, image: '/telecel-logo.webp', label: 'Telecel Cash' },
  { type: 'image' as const, image: '/airteltigo-logo.png', label: 'AirtelTigo' },
  { type: 'image' as const, image: '/visa-logo.png', label: 'Visa' },
  { type: 'image' as const, image: '/mastercard-logo.png', label: 'Mastercard', smaller: true },
];

export default function PaymentBanner() {
  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 md:px-8 bg-[#f8f8f8] border-y border-neutral-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-6">
          {/* Headline */}
          <div className="text-center md:text-left shrink-0">
            <p className="text-sm font-medium text-neutral-900">
              Accept payments your way
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Cash, Mobile Money, and cards — all tracked automatically.
            </p>
          </div>

          {/* Payment option logos - responsive grid on mobile, flex on desktop */}
          <div className="grid grid-cols-6 gap-2 w-full max-w-[360px] md:flex md:items-center md:gap-5 md:max-w-none md:w-auto">
            {paymentOptions.map((option) => (
              <div
                key={option.label}
                className={`aspect-square rounded-xl bg-white flex items-center justify-center overflow-hidden ${
                  option.type === 'cash' ? 'p-2.5' : 'smaller' in option && option.smaller ? 'p-3 md:p-4' : 'p-1.5 md:p-2.5'
                } md:w-16 md:h-16`}
              >
                {option.type === 'cash' ? (
                  <CashIcon />
                ) : (
                  <LoadingImage
                    src={option.image}
                    alt={option.label}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
