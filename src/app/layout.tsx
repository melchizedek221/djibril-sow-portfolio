import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Djibril SOW | Développeur Full Stack",
  description:
    "Développeur Full Stack avec expertise en Java, Spring Boot, React et Angular. Création d'applications web performantes et scalables.",
  keywords: [
    "Développeur Full Stack",
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Web Development",
    "Backend",
    "Frontend",
  ],
  authors: [{ name: "Djibril SOW" }],
  openGraph: {
    title: "Djibril SOW | Développeur Full Stack",
    description:
      "Développeur Full Stack avec expertise en Java, Spring Boot, React et Angular.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
