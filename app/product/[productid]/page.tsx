
import Container from "@/app/components/container"
import  ProductDetails  from "./productdetails"
import { product } from "@/utils/product"

interface iPrams{
    productid?:string
    productname?:string
}
const Product=({params} : {params: iPrams})=> (
    // const arr=products.id[params.productid];
    <div>
        <Container>
            <ProductDetails product={product} />
        </Container>
    </div>
)

export default Product