import Container from "@/app/components/container";
import ProductDetails from "./productdetails";
import { products } from "@/utils/products";

interface Params {
  productid?: string;
  productname?: string;
}

const Product = ({ params }: { params: Params }) => {
  console.log(params.productid);
  const product = products.find((item) => item.id === params.productid);
  return (
    <div className="bg-white">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
