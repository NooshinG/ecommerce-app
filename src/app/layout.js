import "./globals.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { getCategories } from "@/lib/getCategories";
import Providers from "./redux/Providers";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { data: categories } = await getCategories();

  return (
    <Providers>
      <html lang="en">
        <body>
          <div id="overlays"></div>
          <Header categories={categories} />
          <div
            style={{ minHeight: "calc(100vh - 25rem)", paddingBottom: "2.5rem" }}
          >
            {children}
          </div>
          <Footer categories={categories} />
        </body>
      </html>
    </Providers>
  );
}
