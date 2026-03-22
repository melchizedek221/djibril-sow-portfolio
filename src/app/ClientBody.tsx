"use client";

import { LanguageProvider } from "@/lib/LanguageContext";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <LanguageProvider>{children}</LanguageProvider>
    </body>
  );
}
