import { FC, ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

interface Props {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Header />
      <main className="p-4 grow max-w-[600px] mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Page
