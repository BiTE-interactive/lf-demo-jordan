"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import GlobalStyles from "@styles/globalStyles";
import { ThemeProvider, StyledProviders } from "@/providers";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body className={inter.className}>
        <ThemeProvider>
          <StyledProviders>
            <GlobalStyles />
            {props.children}
          </StyledProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
