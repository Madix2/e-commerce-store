import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./components/products/productcard";
import { products } from "@/utils/products";
import { Truncer } from "@/utils/truncer";
import Container from "./components/container";
import HomeBanner from "./components/homebanner";
export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {
            products.map((product: any) =>{
              return <ProductCard data={product} />
            })
          }
        </div>
      </Container>
    </div>
  );
}
{/* <Link href="/users"  >Users</Link> */}