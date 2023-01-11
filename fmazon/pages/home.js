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
        setSession(false)
    }
}
page()
    }, [])

    if (session){
        return <h1>Loading ...</h1>
    } else {
        <div>Please Sign In or Sign Up to view Fmazon.</div>
    }

  return (
    <div>home page</div>
  )
}

export default home