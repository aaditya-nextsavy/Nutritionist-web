import "@/public/assets/styles/reset.css";
import "@/public/assets/styles/global.css";
import "@/public/assets/styles/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
  display: 'swap',
})

export const metadata = {
  title: "Nutritionist",
  description: "Nutritionist.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
