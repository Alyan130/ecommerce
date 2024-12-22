
 import Link from "next/link";
 import { ShoppingCart } from "lucide-react";
 

 export interface productdata{
     id:number,
     image:string,
     tag?:string,
     cutprice?:string,
 }

 export default function ProductCard({id,image,tag,cutprice}:productdata){
  

  return(
    <>
 <div className=" hover:scale-105 transition-all duration-200 ease w-[320px]  md:w-[240px] h-96 flex flex-col">
  
 <Link href={`/product/${id}`}><div  className="relative w-full h-80 rounded-[10px] bg-cover bg-center"
        style={{backgroundImage:`url("${image}")`}}>

        {id === 1 || id === 2 || id===5 || id===6 || id===9 || id===10   ? (
           tag && (
            <div
               className={`absolute w-14 h-7 text-center py-1 px-1 mt-6 ml-6 rounded-md ${
                 id === 1 || id === 5 || id===9 ? "bg-[#01AD5A]" : id === 2 || id === 6 || id===10 ? "bg-[#F5813F]": "bg-transparent"
               }`}
             >
               <p className="text-[13px] text-white">{tag}</p>
             </div>
           )
         ) : null}
       </div>
       </Link>
       <div className="w-full flex flex-row justify-between py-3 px-1">
         <div className="flex flex-col space-y-1">
           <p className="text-[16px]">Library stool chair</p>
           <p className="text-[18px]">
             $20 <s className="text-[14px] text-color1">{cutprice}</s>
           </p>
         </div>
        <Link href={"/cart"}><div className="h-11 w-11 hover:bg-btncolor hover:text-white flex items-center self-center justify-center rounded-md text-[22px] text-color1 bg-[#F0F2F3]">
           <ShoppingCart />
         </div>
         </Link>
       </div>
     </div>
    </>
  );
}