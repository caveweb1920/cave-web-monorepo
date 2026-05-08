import { TRPCProvider } from "./providers";
import "../styles/globals.css";
import { caveFont } from "@/lib/fonts";

export const metadata = {
  title: "Cave Web – Build the Deep, Ship Fast",
  description: "Premier web development by Cave Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={caveFont.variable}>
      <body className="min-h-screen bg-cave-50 font-sans text-cave-950 antialiased">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
