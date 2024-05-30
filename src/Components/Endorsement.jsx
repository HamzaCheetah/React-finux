// import { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import button1 from "/Left.png";
// import button2 from "/Right.png";
// import person3 from "/person3.png";

// const Thirdsection = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   return (
//     <div className="container mx-auto ">
//       <div className="flex ">
//         <h1 className="text-4xl font-bold leading-relaxed dark:text-white mt-56">
//           Endorsement
//         </h1>
//         <div className="ml-auto relative top-40">
//           <img src={person3} alt="person3" className="w-80 h-72" />
//         </div>
//       </div>
//       <div>
//         <Slider ref={sliderRef} {...settings}>
//           {data.map((d, index) => (
//             <div key={index}>
//               {/* <p className="text-gray-500 leading-7 ">{d.review}</p> */}
//               <p className="text-gray-500 leading-7 ">
//                 This app is my daily digital haven , combining social media ,
//                 crypto , and stocks effortlessly .<br /> Its the ultimate
//                 all-in-one , and I cant go a day without checking in . Social
//                 connections , <br />
//                 crypto updates , and stock insights—all seamlessly woven
//                 together .
//               </p>
//               <p className="text-yellow-500 mt-5">{d.subtitle}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <div className="mt-3">
//         <button className="w-20" onClick={handlePrev}>
//           <img src={button1} alt="leftbutton" />
//         </button>
//         <button className="w-20" onClick={handleNext}>
//           <img src={button2} alt="rightbutton" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const data = [
//   {
//     // review: ``,
//     subtitle: `Financial analyst`,
//   },
//   {
//     // review: `This app is my daily digital haven, combining social media,
//     //    crypto, and stocks effortlessly.
//     //    Its the ultimate all-in-one, and I cant go a day without
//     //    checking in. Social connections, crypto updates, and stock insights—all seamlessly woven together.`,
//     subtitle: `Financial analyst`,
//   },
//   {
//     // review: `This app is my daily digital haven, combining social media,
//     //    crypto, and stocks effortlessly.
//     //    Its the ultimate all-in-one, and I cant go a day without
//     //    checking in. Social connections, crypto updates, and stock insights—all seamlessly woven together.`,
//     subtitle: `Financial analyst`,
//   },
// ];

// export default Thirdsection;

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import button1 from "/Left.png";
import button2 from "/Right.png";
import person3 from "/person3.png";

const Endorsement = () => {
  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="container mx-auto  ">
      <div className="md:flex ">
        <h1 className="text-4xl font-bold leading-relaxed dark:text-white mt-52">
          Endorsement
        </h1>
        <div className="ml-auto flex flex-col items-center md:relative md:top-40">
          <img src={person3} alt="person3" className="w-80 h-80" />
        </div>
      </div>
      <div>
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div key={index}>
              <p className="text-gray-500 leading-7 ">
                This app is my daily digital haven , combining social media ,
                crypto , and stocks effortlessly .
                <br className="hidden md:inline lg:inline" /> Its the ultimate
                all-in-one , and I cant go a day without checking in . Social
                connections , <br className="hidden md:inline lg:inline" />
                crypto updates , and stock insights—all seamlessly woven
                together .
              </p>
              <p className="text-yellow-500 mt-5">{d.subtitle}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-3">
        <button className="w-20 pe-2" onClick={handlePrev}>
          <img src={button1} alt="leftbutton" />
        </button>
        <button className="w-20 ps-2" onClick={handleNext}>
          <img src={button2} alt="rightbutton" />
        </button>
      </div>
    </div>
  );
};

const data = [
  {
    subtitle: `Financial analyst`,
  },
  {
    subtitle: `Financial analyst`,
  },
  {
    subtitle: `Financial analyst`,
  },
];

export default Endorsement;




