import ProductDetail from "@/components/single-product/deatail";
import DetailCards from "@/components/single-product/detailcards";

interface pdata{
    id:string,
    image:string,
}

export default async function SingleProduct({params}:{params:Promise<{id:string}>}){
 
    const param =await params;
    const {id}= param;

   const res= await fetch(`https://ecommerce-59xz-6c8fafdqe-alyan130s-projects.vercel.app/products/${id}`)
const data:pdata  = await res.json();

    return(
       <>
       <ProductDetail
        image={data.image || "/images/Image2.png" }
       />
   
       <DetailCards/>
       </>
    );
}