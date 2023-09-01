"use client"
import Provider from "./_trpc/provider";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
        <Provider>
        {children}
        </Provider>
        </RecoilRoot>
      </body>
    </html>
  );
}
