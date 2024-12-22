import { NextRequest, NextResponse } from "next/server"

const carddata = [
    { id: 1, image: "/images/Image.png" },
    { id: 2, image: "/images/Image1.png" },
    { id: 3, image: "/images/Image2.png", },
    { id: 4, image: "/images/card.png", },
    { id: 5, image: "/images/Parent2.png", },
    { id: 6, image: "/images/02.png", },
    { id: 7, image: "/images/pro2.png", },
    { id: 8, image: "/images/Image.png", },
    { id: 9, image: "/images/pro1.png", },
    { id: 10, image: "/images/Image1.png", },
    { id: 11, image: "/images/Image2.png", },
    { id: 12, image: "/images/pro3.png" },
]

export const  GET = async (req: NextRequest, { params}:{params:Promise<{id:string}>}) => {
 
    const data =await params;
    const {id} =data
    
    const newData=carddata.find((products)=>products.id === parseInt(id) )

    if(newData){
        return NextResponse.json(newData);
    }else{
        return NextResponse.json({error:"product not found", success:false})
    }
}