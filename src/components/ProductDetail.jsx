import { useLocation, useParams } from "react-router-dom"

export default function ProductDetail(){
  const { id } = useParams()
  const {name, price} = useLocation().state
  return (
    <div className="">
      <h1>ProductDetail Component</h1>
      <h3>Product #{id} / {name} / ${price} </h3>
    </div>
  )
}