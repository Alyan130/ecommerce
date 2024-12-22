
import ProductCard from "./productcard";

interface pdata{
  id:number,
  image:string,
  tag?:string,
 cutprice?:string,
}



export default async function AllProducts() {

  const res = await fetch("http://localhost:3000/api/products")
  const data:pdata[] = await res.json();
  return (
    <>
      <section className="py-16 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-2 lg:px-1">
          <div className="w-full py-1 flex items-center md:justify-between justify-center mb-5 px-6">
            <span className="text-3xl md:text-[32px] font-semibold text-color1">
              All Products
            </span>
          </div>
<div className="py-4 px-4 sm:px-2  md:px-0 w-full flex flex-wrap gap-x-10  gap-y-10 md:gap-y-12 justify-center md:justify-center">
  {data.map((e) => (
    <ProductCard
      key={e.id}
      id={e.id}
      image={e.image}
      tag={e.tag}
      cutprice={e.cutprice}
    />
  ))}
</div>

        </div>
      </section>


    </>
  );
}