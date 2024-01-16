import HerreriaProvider from './context/provider';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css'
import './normalize.css'

export const metadata = {
    title: 'Herría Torres',
    description: 'Herrería Torres App',
    metadataBase: 'https://herreriatorres.xyz', //TODO
    openGraph: {
      siteName: 'Herrería Torres',
      title: 'Bienvenidos a la aplicación web de Herrería Torres',
      description: 'Conoce nuestra empresa, dinámica de trabajo y diseños de productos de herrería para proteger tus bienes.',
      url: 'https://herreriatorres.xyz', //TODO
      type: 'website',
      images: [
        {
          url: '/img/readme/preview.png',
          width: 1280,
          height: 640,
        }
      ],
      icons: {
        icon: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        icon: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
        manifest: '/site.webmanifest',
        apple: [
          {sizes: '180x180'},
        ],
        other: [
          {
            rel: 'apple-touch-icon',
            url: '/apple-touch-icon.png',
          }
        ],
      }
    }
  }
  export const viewport = {
    themeColor: '#ffffff',
  }

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <HerreriaProvider>{children}</HerreriaProvider>
          </body>
      </html>
    )
  }