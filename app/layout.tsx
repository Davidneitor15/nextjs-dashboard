import { montserrat, lusitana } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lusitana.className} >
        {children}
        <footer className="py-10 flex justify-center items-center">
        <p>Hecho con ❤️ por David</p>
        </footer>
      </body>
      
    </html>
  );
}
