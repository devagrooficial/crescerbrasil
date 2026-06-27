import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcerias | Instituto Crescer Brasil",
  description: "Seja voluntário, profissional de saúde ou empresa parceira do Instituto Crescer Brasil.",
};

export default function ParceriasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
