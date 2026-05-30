import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tayyab Ahamed — DevOps & Cloud Engineer",
  description: "Final-year BCA student specializing in Cloud Computing. Building production-grade DevOps projects with AWS, Docker, Jenkins, Terraform, and CI/CD pipelines.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Docker", "Jenkins", "Terraform", "Python"],
  authors: [{ name: "Tayyab Ahamed" }],
  openGraph: {
    title: "Tayyab Ahamed — DevOps & Cloud Engineer",
    description: "Portfolio of DevOps and Cloud projects built before graduation.",
    url: "https://portfolio-v2-eight-olive.vercel.app",
    type: "website",
  },
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
