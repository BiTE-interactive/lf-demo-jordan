"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import GlobalStyles from "@styles/globalStyles";
import Providers from "@providers/Providers";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
