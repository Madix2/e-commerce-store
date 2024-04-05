'use client';

interface ProductDetailsProps{
    product:any
}
const ProductDetails:React.FC<ProductDetailsProps>=({product}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>images</div>
        <div>
            <h2 className=" text-slate-900">{product.name}</h2>
        </div>
    </div>
  )
}

export default ProductDetails;