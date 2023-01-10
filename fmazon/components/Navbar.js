import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react'


const Navbar = () => {

const { data: session } = useSession()


return (
    <nav>

<li><Link href='/items'>Homepage</Link></li>

{!session && (
    <li><Link href='/api/auth/signin'onClick={e => { e.preventDefault()
    signIn()}
   }
    >Login</Link></li>
)
}

{session &&(<li><Link href='/api/auth/signout' onClick={e => { e.preventDefault()
    signOut()}}>Log Out</Link></li>)}



    </nav>
  )
}

export default Navbar