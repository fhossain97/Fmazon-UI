import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Items from '../components/items/Items'
import Layout from '../components/Layout'

export default function App({ Component, pageProps: { session, ...pageProps } }) {

const [items, setItems] = useState([])

useEffect(() => {
  fetch(process.env.REACT_API)
  .then(res => res.json())
  .then(x=>setItems(x))
})


  return (
<SessionProvider session={session}>

  <Navbar />
<Items items={items} />
<Component { ...pageProps} />

</SessionProvider>

  )
  

}
