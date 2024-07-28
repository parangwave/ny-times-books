export const metadata = {
  title: "NY Times Books",
// global css
import "./styles/global.css";

// components
import Header from "./components/header";

  description: "NY Times Best Sellers App Generated by Next.js 14",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
