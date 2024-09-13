import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/younitelogo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-gradient-1 isolate flex flex-col min-h-svh">
        {/* @ts-ignore */}
        <Header />
        <main className="grow overflow-y-auto overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
