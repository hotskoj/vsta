import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Line from './Line'

export default function App() {

  return (
    <div>
      <div className='container main'>
        <Header/>
        <Line/>
        <Body/>
      </div>
      <Footer />
    </div>
  )
}
