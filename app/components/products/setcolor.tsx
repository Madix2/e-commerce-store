'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productid]/productdetails";

interface SetColorPropps{
    images: SelectedImgType[];
    cartProduct: CartProductType;
    handleColorSelect: (value:SelectedImgType) => null;
}
const SetColor: React.FC<SetColorPropps>= ({
    images, cartProduct, handleColorSelect
}) => {
  return (
    <div>SetColor</div>
  )
}
export default SetColor;