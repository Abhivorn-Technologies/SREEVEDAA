import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
