import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/ui/LenisProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Liberado | Verificação de Pessoas e Empresas",
    template: "%s | Liberado",
  },
  description:
    "Verifique pessoas, empresas e documentos em até 15 segundos para tomar decisões mais seguras.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <MotionConfig reducedMotion="user">
          <LenisProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LenisProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
