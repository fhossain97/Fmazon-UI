import { useRouter } from "next/router"

const review = () => {

    const router = useRouter()

    const {itemId, reviewId} = router.query
   
  return (
    <h1>Item {itemId} and Review {reviewId} </h1>
  )
}

export default review