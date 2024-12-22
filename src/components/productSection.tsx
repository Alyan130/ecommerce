import ProductCard from "./productcard";

interface pdata{
  id:number,
  image:string,
  tag?:string,
 cutprice?:string,
}


export default async function Products() {
  
const res = await fetch("http://localhost:3000/api/products");
const data:pdata[]=await res.json();

const newData= data.slice(0,8);

  return (
    <>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full py-1 flex items-center justify-center mb-2 md-mb-5">
            <span className="text-[24px] md:text-[32px] font-semibold text-color1">
              Products
            </span>
          </div>

          <div className="py-6 px-4 sm:px-2 md:px-0 lg:px-0 w-full flex flex-wrap gap-x-10 gap-y-10 justify-center md:justify-center">
            {newData.map((e) => (
              
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