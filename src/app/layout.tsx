import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instituto Crescer Brasil | Saúde, Educação e Agricultura Familiar",
  description:
    "O Instituto Crescer Brasil promove saúde, educação e desenvolvimento sustentável para comunidades vulneráveis em todo o Brasil, com foco em agricultura familiar e atenção integral à saúde.",
  keywords: "instituto, saúde, educação, agricultura familiar, terceiro setor, ONG, Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-off-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
