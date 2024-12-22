
import ProductCard from "./productcard";


interface pdata{
    id:number,
    image:string,
    tag?:string,
   cutprice?:string,
  }
  

export default async function FeaturedProdoucts(){

    const res =await fetch("http://localhost:3000/api/products")
    const data:pdata[] = await res.json();

    const newData=data.slice(0,4);
    


    return(
        <>
        <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-2 md:mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Featured Products</span>
            </div>
            <div className="w-full py-6 px-4 sm:px-2  md:px-2 flex flex-row space-y-2 md:space-y-0 md:justify-between lg:justify-between gap-4 flex-wrap lg:flex-nowrap">
                {newData.map((e)=>
               <ProductCard
               key={e.id}
                id={e.id}
                image={e.image}
                tag={e.tag}
                cutprice={e.cutprice}
               />
)}
            </div>



        </div>
        </section>
        </>
    );
}


