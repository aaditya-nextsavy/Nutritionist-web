import "./globals.css";

export const metadata = {
  title: "Nutritionist",
  description: "Nutritionist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
