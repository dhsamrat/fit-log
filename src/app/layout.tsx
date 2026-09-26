import type { Metadata } from "next";
import { WorkoutProvider } from "@/context/WorkoutContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fit Log",
  description: "Workout Library and Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>
          {children}
        </WorkoutProvider>
      </body>
    </html>
  );
}