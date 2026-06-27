import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doações | Instituto Crescer Brasil",
  description: "Faça uma doação financeira, de equipamentos ou de hora técnica para o Instituto Crescer Brasil.",
};

export default function DoacoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
