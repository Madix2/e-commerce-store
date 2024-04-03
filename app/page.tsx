import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./components/productcard";
export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <Link href="/users"  >Users</Link>
      <ProductCard />
    </main>
  );
}
