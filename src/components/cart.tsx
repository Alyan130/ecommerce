

import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
  return (
    <section className="w-full py-12 mt-10 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-12">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
         
          <div className="w-full lg:w-[70%] flex flex-col space-y-16">
          
            <div className="w-full flex flex-row justify-between">
              <div className="w-[100%] flex  flex-col md:flex-row gap-8">
                <div
                  className="w-[150px] h-[150px] border-black bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/Image2.png')` }}
                ></div>
                <div className="w-[205px] h-[150px] flex flex-col space-y-8">
                  <p>Library Stool Chair</p>
                  <div>
                    <p>Ashen Slate/Cobalt Bliss</p>
                    <div className="w-full flex flex-row justify-between items-center">
                      <p>Size L</p>
                      <p>Quantity 1</p>
                    </div>
                  </div>
                  <div className="text-[24px] flex w-[40%]">
                    <CiHeart className="mr-2" />
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <p>MRP: $99</p>
              </div>
            </div>
    

            <hr className="my-4" />

            <div className="w-full flex flex-row justify-between">
              <div className="w-[100%] flex  flex-col md:flex-row gap-8">
                <div
                  className="w-[150px] h-[150px] border-black bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/pro1.png')` }}
                ></div>
                <div className="w-[205px] h-[150px] flex flex-col space-y-8">
                  <p>Library Stool Chair</p>
                  <div>
                    <p>Ashen Slate/Cobalt Bliss</p>
                    <div className="w-full flex flex-row justify-between items-center">
                      <p>Size L</p>
                      <p>Quantity 1</p>
                    </div>
                  </div>
                  <div className="text-[24px] flex w-[40%]">
                    <CiHeart className="mr-2" />
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <p>MRP: $99</p>
              </div>
            </div>
          </div>

    
          <div className="w-full lg:w-[30%] rounded-lg mt-10 lg:mt-0">
            <h2 className="text-[21px] font-medium text-color1 mb-4">Summary</h2>
            <div className="flex text-black text-[15px] justify-between mb-2">
              <span>Subtotal</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between text-black text-[15px] mb-2">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$198.00</span>
            </div>

            <hr className="my-4" />

            <button className="w-full hover:bg-teal-600 bg-[#029FAE] text-white py-4 px-4 rounded-[25px] mt-4">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}
