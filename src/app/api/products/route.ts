import { NextResponse } from "next/server"

export const GET= () => {

    return NextResponse.json(
        [
            {
                id:1,
                image:"/images/Image.png",
                tag:"New",
                 
            },
            {
                id:2,
                image:"/images/Image1.png",
                tag:"Sale",
                cutprice:"$30",
            },
            {
                id:3,
                image:"/images/Image2.png",
                
            },
            {
                id:4,
                image:"/images/card.png",
            },
            {
                id:5,
                image:"/images/Parent2.png",
                tag:"New",
            },
            
            {
                id:6,
                image:"/images/02.png",
                tag:"Sale",
                cutprice:"$30",
            },
            {
                id:7,
                image:"/images/pro2.png",
              
            },
            {
                id:8,
                image:"/images/Image.png",
               
            },
            {
                id:9,
                image:"/images/pro1.png",
                tag:"New",
            },
            {
                id:10,
                image:"/images/Image1.png",
                tag:"Sale",
                cutprice:"$30",
               
            },
            {
                id:11,
                image:"/images/Image2.png",
               
            },
            {
                id:12,
                image:"/images/pro3.png",
               
            },
        
        ]
    );
}