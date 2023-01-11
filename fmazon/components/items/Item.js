import Link from "next/link"

const Item = ({item}) => {
  return (
<>
<h1>{item.name}</h1>
<h1>{item.quantity}</h1>
<h1>{item.price}</h1>
<h1>{item.description}</h1>
<h1>{item.url}</h1>



<Link href='/home'></Link>
</>





  )
}

export default Item