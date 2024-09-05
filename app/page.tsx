import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1> Hello </h1>
      <Link href="/users"> Click to go to Users </Link>
      <ProductCard />
    </main>
  );
}
