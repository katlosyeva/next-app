import '@styles/globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Sellout',
  description: 'A platform for selling unneeded staff',
}

function RootLayout({ children }) {
  return (
    <html lang="en" className='h-screen bg-backgr'>
      <body>
        <Nav/>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout;
