import React from "react";
import iphone_14_Pro from "../../assets/Slider_Img_01.png";
import Omega_Watch from "../../assets/Slider_Img_03.png";

const Slider = () => {
  return (
    <div className="w-full h-full flex items-center relative justify-center p-8  ">
      <div className="slider w-auto h-90 overflow-hidden flex [&>*]:shrink-0">
        <div className=" slider_Images bg-black w-full h-full hidden relative flex ">
          <div
            className="w-[50%] relative h-full py-20 px-10 flex flex-col items-start 
         "
          >
            <div className="w-50   flex items-center">
              <img className="invert w-[35%]" src="/apple_Logo.png" alt="" />
              <span className="text-white text-[16px]">iPhone 14 Series</span>
            </div>
            <div className="pl-4 mt-3">
              <h1 className="text-4xl mb-4 text-white font-bold">
                Up to 10% off Voucher
              </h1>
              <span className=" pl-1 text-white underline underline-offset-8 cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>
          <div className="w-[60%] h-full py-2  ">
            <img
              className="w-full h-full  "
              src={iphone_14_Pro}
              alt="iPhone 14 Pro"
            />
          </div>
        </div>
        <div className="hidden slider_Images w-2/2  relative flex ">
          <div className=" absolute z-50 h-full py-20 px-5 flex flex-col items-start ">
            <div className="flex flex-col text-white">
              <h1 className="text-[27px] mb-1 font-bold">METAMORPHOSIS PACK</h1>
              <span className="w-80 mb-3">
                Built to dominate the biggest and brightest moments of the game.
              </span>
              <span className=" pl-1 text-lg font-bold  underline underline-offset-8 cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/SS_25_March_Madness_Adaptation_bnr_d_f4e7023d6e.jpg"
              alt="iPhone 14 Pro"
            />
          </div>
        </div>
        <div className="slider_Images w-2/2  relative flex ">
          <div className=" absolute z-50 h-full py-20 px-5 flex flex-col items-start ">
            <div className="flex flex-col text-white">
              <span className="absolute left-30 bottom-15 w-25 pl-1 text-lg font-bold  underline underline-offset-8 cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full"
              src={Omega_Watch}
              alt="Omega_Watches"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
