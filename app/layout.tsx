export const metadata = {
  title: "NY Times Books",
// global css
import "./styles/global.css";

  description: "NY Times Best Sellers App Generated by Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
