import {Button} from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react'

export default function ProductDetail({image}:{image:string}) {
    return (
      <>
        <section className="w-full mt-16 md:mt-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="w-full flex flex-col md:flex-row items-center gap-4">
          

            <div
                className="w-full md:w-[50%] h-[250px] md:h-[478px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
 
 <div className="pl-4 md:pl-16 w-full md:w-[50%] h-[400px] sm:h-[430px] md:h-[400px] lg:h-[478px] flex flex-col items-start justify-between md:-mt-20 lg:-mt-0">
                <div className="w-[90%]">
                  <h2 className="text-4xl leading-[48px] md:eading-[72px] font-inter text-color1 md:text-6xl font-bold mb-4 md:mb-6 lg-mb-8">
                  Library Stool <br /> Chair
                  </h2>
                  <div className="w-36 h-11 px-4 py-2 rounded-[25px] text-white bg-btncolor">
                    <button className="w-full text-xl font-semibold">{`$20.00 USD`}</button>
                  </div>


                  <hr className="my-8" />

                  <p className="text-[16px] text-xl text-color1 opacity-60 -mt-4  mb-4 md:mb-6 lg-mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>

                  <Button 
              className="bg-btncolor hover:bg-teal-600 text-white h-12 w-44 px-6 py-4 rounded-[10px] text-lg group"
            >
              <ShoppingCart className="h-5 w-5 transition-transform group-hover:translate-x-1 mr-2" />
              Shop Now
            </Button>

                </div>
            
            </div>
          </div>
          </div>
        </section>
      </>
    );
  }
  