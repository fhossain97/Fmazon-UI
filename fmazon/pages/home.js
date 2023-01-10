import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";


const home = () => {

    const [session, setSession] = useState(true)

    useEffect(() => {
const page = async() => {
    const loggedin = await getSession()

    if (!loggedin) {
        signIn()
    }else {
        <div>Please Sign In or Sign Up to view Fmazon.</div>
        setSession(false)
        console.log(sessionSession)
    }
}
    }, [])

    if (session){
        return <h1>Loading ...</h1>
    }

  return (
    <div>home</div>
  )
}

export default home