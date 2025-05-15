import { useLocation, useParams } from "react-router-dom"

export default function ProductDetail(){
  const { id } = useParams()
  const { product } = useLocation().state
  const { title, price, image } = product
  return (
    <div className="product">
      <h1>{ title }</h1>
      <h3>${ price }</h3>
      <img src={image} alt={title} width='150px' />
    </div>
  )
}