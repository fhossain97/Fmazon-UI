import {useRouter} from 'next/router'


const itemDetails = () => {

const router = useRouter()
const itemId = router.query.itemId

  return (
    <div>Item ID: {itemId}</div>
  )
}

export default itemDetails