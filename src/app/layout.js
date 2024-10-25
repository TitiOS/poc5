import './globals.css'
import Header from './components/Header/Header'

export const metadata = {
  title: 'Primeiro App',
  description: 'Aprendendo Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}