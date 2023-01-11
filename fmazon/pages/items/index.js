import Link from 'next/link'
import { useRouter } from 'next/router'
import Items from '../../components/items/Items'


const index = ({itemId}) => {
const router = useRouter()
  const handleClick = () => {
console.log('meeee')
router.push('/login')
  }

  return (
    <div>
      <Items />

      <Link href={`/items/${itemId}`}>
    Item Id
      </Link>
      
      Items home page
      <button onClick={handleClick}>MEeeeeee</button>
      </div>
  )
}

export default index