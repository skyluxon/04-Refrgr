import Script from "next/script";

export function GaScript() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (process.env.NODE_ENV !== "production" || !id) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive"/><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}');`}</Script></>;
}
