import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function App() {

  return (
    <div>
      <div className='container main'>
        <Header/>
        <Body/>
      </div>
      <Footer />
    </div>
  )
}
