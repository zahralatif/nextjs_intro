import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout