import Container from "@/app/components/container"
import  ProductDetails  from "./productdetails"
import { products } from "@/utils/products"

interface iPrams{
    productid?:string
    productname?:string
}
const Product=({params} : {params: iPrams})=> (
    // const arr=products.id[params.productid];
    <div>
        <Container>
            <ProductDetails product={products} />
            <p>{params.productid}</p>
            {/* {console.log()} */}
        </Container>
    </div>
)

export default Product