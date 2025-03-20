import React, { useEffect, useRef } from "react";
import iphone_14_Pro from "../../assets/Slider_Img_01.png";
import Omega_Watch from "../../assets/Slider_Img_03.png";
import Cosmetics from "../../assets/Slider_Img_04.png";
import Groceries from "../../assets/Slider_Img_05.png";

const Slider = () => {
  //* States & Ref
  const Img_Ref = useRef([]);
  const li_Ref = useRef([]);

  //*Variables & Constants
  let Img_Num = 0;
  const Images = [
    {
      id: 1,
      content: (
        <>
          <div className="w-[50%] relative h-full py-20 px-10 flex flex-col items-start">
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
              loading="lazy"
              className="w-full h-full  "
              src={iphone_14_Pro}
              alt="iPhone 14 Pro"
            />
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
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
              loading="lazy"
              className="w-full h-full"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/SS_25_March_Madness_Adaptation_bnr_d_f4e7023d6e.jpg"
              alt="iPhone 14 Pro"
            />
          </div>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <div className=" absolute z-50 h-full py-20 px-5 flex flex-col items-start ">
            <div className="flex flex-col text-white">
              <span className="absolute left-30 bottom-15 w-25 pl-1 text-lg font-bold  underline underline-offset-8 cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              loading="lazy"
              className="w-full h-full"
              src={Omega_Watch}
              alt="Omega Watches"
            />
          </div>
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <div className=" absolute z-50 h-full py-20 px-5 flex flex-col items-start ">
            <div className="flex flex-col text-white">
              <span className="absolute left-28 bottom-15 w-30 text-lg font-bold border-2 rounded-lg p-1.5 text-center underline-offset-8 cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>
          <div className="w-full h-full">
            <img
              loading="lazy"
              className="w-full h-full"
              src={Cosmetics}
              alt="Cosmetics Products"
            />
          </div>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <div className=" absolute z-50 h-full py-20 px-5 flex flex-col items-start ">
            <div className="flex flex-col text-white">
              <span className="absolute left-17 bottom-24 w-30 text-lg font-bold rounded-lg p-1.5 text-center underline-offset-8 cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              loading="lazy"
              className="w-full h-full"
              src={Groceries}
              alt="Griceries Items"
            />
          </div>
        </>
      ),
    },
  ];

  //*Effects
  useEffect(() => {
    const interval = setInterval(() => {
      if (Img_Num === Images.length - 1) {
        Img_Ref[0].scrollIntoView({ behavior: "instant", block: "start" });
        li_Ref[0].style.backgroundColor = "red";
        li_Ref[0].style.border = "1px solid white";
        li_Ref[0].style.transform = "scale(1.5)";
        li_Ref[Images.length - 1].style.backgroundColor = "";
        li_Ref[Images.length - 1].style.border = "";
        li_Ref[Images.length - 1].style.transform = "";

        Img_Num = 0;
      } else {
        Img_Num++;
        li_Ref[Img_Num].style.backgroundColor = "red";
        li_Ref[Img_Num].style.border = "1px solid white";
        li_Ref[Img_Num].style.transform = "scale(1.5)";
        li_Ref[Img_Num - 1].style.backgroundColor = "";
        li_Ref[Img_Num - 1].style.border = "";
        li_Ref[Img_Num - 1].style.transform = "";
        Img_Ref[Img_Num].scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center relative justify-center p-8  ">
      <div className="dots z-10">
        <ul className="flex transition-all absolute bottom-8 left-[45%] gap-x-3">
          {Images.map((_, index) => (
            <li
              key={index}
              ref={(el) => (li_Ref[index] = el)}
              className="w-2 h-2 rounded-full bg-gray-200"
            ></li>
          ))}
        </ul>
      </div>
      <div
        className="slider rounded-sm w-auto h-90 overflow-hidden flex 
        [&>*]:shrink-0 relative"
      >
        {Images.map((img, index) => {
          return (
            <div
              key={img.id}
              ref={(el) => (Img_Ref[index] = el)}
              className=" slider_Images bg-black w-2/2 relative flex "
            >
              {img.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
