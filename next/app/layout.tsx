import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Modal from "@/components/modal/Modal";
import ModalContextProvider from "@/components/modal/ModalContextProvider";
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
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full">
        <ModalContextProvider>
          <div className="bg-gradient-1 isolate flex flex-col min-h-svh overflow-y-auto">
            {/* @ts-ignore */}
            <Header />
            <main className="grow overflow-x-hidden">{children}</main>
            <Footer />
          </div>
          <Modal />
        </ModalContextProvider>
      </body>
    </html>
  );
}
