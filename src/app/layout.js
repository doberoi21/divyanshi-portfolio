import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Divyanshi Oberoi",
  description: "Portfolio",
  icons: {
    icon: "/DO.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}