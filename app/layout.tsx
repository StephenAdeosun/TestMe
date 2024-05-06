// app/layout.tsx
import { fonts } from './font'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.raleway.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}