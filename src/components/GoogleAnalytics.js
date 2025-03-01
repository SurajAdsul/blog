'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Helper function to track pageviews
const pageview = (GA_MEASUREMENT_ID, url) => {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url
  });
};

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', GA_MEASUREMENT_ID, {
            page_location: window.location.href,
            page_path: pathname + searchParams.toString(),
            send_page_view: true
          });
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: '${pathname}${searchParams.toString()}',
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
} 