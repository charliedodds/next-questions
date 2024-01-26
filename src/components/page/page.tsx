import { FC, ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

interface Props {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Page
