"use client";
import NavBar from "@/components/NavBar";
import Providers from "./Providers";
import "./globals.css";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {" "}
          {/* Header */}
          <Header />
          {/* NavBar */}
          <NavBar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
export default RootLayout;
