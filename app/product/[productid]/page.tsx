import Container from "@/app/components/container"
import  ProductDetails  from "./productdetails"
import { products } from "@/utils/products"

interface iPrams{
    productid?:string
}
const Product=({params} : {params: iPrams})=> {
  return (
    <div>
        <Container>
            <ProductDetails product={products}/>
        </Container>
    </div>
  )
}

export default Product