import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import FloatingBtn from "@/components/layout/FloatingBtn";
import Script from "next/script";
export const metadata = {
  title: `Print O Thread | Custom Patches, T-Shirts , Hoodies & Other Apparels`,

  description:
    "Personalize custom apparel including t-shirts, hats, and hoodies. Create logo clothing with our experts. Free and fast shipping. Embroidery Services On Hoodies, T-Shirts & Other Apparel. Variety of Colors & Sizes.",

  keywords:
    // "Custom T-Shirts,Polos,Hoodies,Head Wear,Caps,Long Sleeves,Patches,Embroidery,Sticker,Tote Bags,Approns,Promotional Products,Screen Printing, Online Store, Custom Printing, Custom Patches, Custom Embroidery,Add-on Services",
    [
      "t shirts",
      "custom t shirts",
      "customized tee shirts",
      "shirt printing near me",
      "print t shirts near me",
      "tee shirts printing",
      "tshirt maker near me",
      "shirts with prints",
      "tshirt printing",
      "tshirt design",
      "screen printing tee shirts",
      "printothread",
      "print o thread",
      "printothread t",
      "print o thread t",
      "tee shirt printing",
      "custom shirts near me",
      "tee printing",
      " printable tee shirts",
      "custom printed shirts",
      "t shirt maker",
      "custom t shirts near me",
      "custom printing shirts",
      "custom made shirts near me",
      "persinalised t shirt printing",
      "custom print tees",
      "custom t shirts and hats",
      "custom t shirts and hoodies",
      "best custom t shirts",
      "custom t shirts embroidered logo",
      "easy custom t shirts",
      "custom hoodies",
      "custom hoodies near me",
      "custom hoodies bulk",
      "custom hats",
      "custom hats near me",
      "new era custom hats",
      "custom hats with logo",
      "custom hats and shirts",
      "custom hats and patches",
      "custom hats and hoodies",
      "custom patches",
      "custom patches near me",
      "custom patches and embroidery",
      "embroidery",
      "embroidery near me",
      "custom embroidery",
      "custom hat embroidery",
      "hat embroidery",
      "t shirt design",
      "custom t shirt canada",
      "custom t shirts canada",
      "custom t shirts in canada",
      "custom t-shirt us",
      "custom t-shirts us",
      "customizable shirts us",
      "customize t shirts us",
      "customized t shirts us",
      "custom t shirt us",
      "custom t shirts us",
      "custom t shirts in us",
      "custom t-shirt us",
      "custom t-shirts us",
      "customizable shirts us",
      "customize t shirts us",
      "customized t shirts us",
      "print shops",
      "print shops",
      "custom t shirts t shirts",
      "t shirts custom t",
      "custom tour shirts",
      "custom hooded sweatshirt",
      "design it t shirts",
      "print for t shirt",
      "print on shirt",
      "print on shirts",
      "printing on shirts",
      "prints for t shirts",
      "prints for t-shirt",
      "prints on shirts",
      "shirt and print",
      "shirt with print",
      "shirts and printing",
      "shirts with print",
      "t shirt and print",
      "t shirt and printing",
      "t shirt print",
      "t shirt printed",
      "t shirt printers",
      "t shirt prints",
      "t shirts print",
      "t shirts printers",
      "t shirts printers",
      "t shirts prints",
      "t shirts to be printed",
      "t-shirt print",
      "t-shirt print",
      "t-shirt printed",
      "t-shirt printed",
      "t-shirt prints",
      "t-shirts printing",
      "tee shirts printing",
      "tees shirt printing",
      "tshirt #print",
      "custom sticker",
      "customizing shirts",
      "custom apparel t shirts",
      "printing",
      "promo product",
      "promotional accessories",
      "promotional items",
      "promotional merchandise products",
      "printing services",
    ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="VERIFICATION_ID" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7NFNE7EHQS"
        id="ga_analytics"
      ></Script>
      <Script id="google-analytics">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7NFNE7EHQS');`}
      </Script>
      <body className="bg-white">
        <Header />

        {children}

        <FloatingBtn />
        <Footer />
      </body>
    </html>
  );
}
