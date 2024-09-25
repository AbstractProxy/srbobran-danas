import "./globals.css";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar.jsx";
import Footer from "@/Components/Footer/Footer.jsx";
import Script from "next/script";
import { Providers } from "./providers";
import LayoutBodyContent from "@/Components/LayoutBodyContent/LayoutBodyContent";
import SidebarWrapper from "@/Components/SidebarWrapper/SidebarWrapper";
import LayoutInnerWrapper from "@/Components/LayoutInnerWrapper/LayoutInnerWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-gray-900">
        <Providers>
          <Navbar />
          <LayoutBodyContent>
            <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
          </LayoutBodyContent>
          <Footer />
          <Script src="https://apis.google.com/js/platform.js"></Script>
        </Providers>
      </body>
    </html>
  );
}
