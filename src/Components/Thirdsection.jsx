import image1 from "/LeftSlide.png";
import image2 from "/CenterSlide.png";
import image3 from "/RightSlide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Thirdsection() {
  return (
    <>
      <div className=" md:mx-10 mx-0 mt-72">
        <h1 className="text-lg  ms-10 md:text-4xl font-bold mt-2 leading-relaxed dark:!text-white relative top-10 md:top-48 md:ms-10">
          Explore Finulab: The Forefront of
          <br /> Financial Empowerment
        </h1>
        <Swiper
          navigation={true}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper md:py-48 py-44 md:mt-20 rounded-3xl"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="rounded-3xl dark:!bg-gray-900 p-2 bg-white">
            <div className="flex flex-col p-3">
              <div className="md:h-[250px] h-[150px]">
                <img
                  src={image1}
                  alt="leftslider"
                  className="rounded-t-3xl h-full w-full"
                />
              </div>
              <div className="pt-3">
                <h1 className="font-semibold dark:text-white">
                  Free premium data on 12K+ stocks and cryptos
                </h1>
                <p className="text-gray-500 pt-2 text-sm">
                  Its not just data; its your gateway to smarter decisions.
                  Sculpt your financial destiny by accessing unparalleled
                  insights into each opportunity.
                </p>
                <button className="bg-green-500 rounded-[100px] text-white p-3 mt-2 text-sm">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl dark:!bg-gray-900 p-2 bg-white">
            <div className="flex flex-col p-3">
              <div className="md:h-[250px] h-[150px]">
                <img
                  src={image2}
                  alt="centerslider"
                  className="rounded-t-3xl w-full h-full"
                />
              </div>
              <div className="py-4">
                <h1 className="font-semibold dark:text-white">
                  Free premium data on 12K+ stocks and cryptos
                </h1>
                <p className="text-gray-500 pt-2 text-sm">
                  Its not just data; its your gateway to smarter decisions.
                  Sculpt your financial destiny by accessing unparalleled
                  insights into each opportunity.
                </p>
                <button className="bg-green-500 rounded-[100px] text-white p-3 mt-2 text-sm">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl dark:!bg-gray-900 p-2 bg-white">
            <div className="flex flex-col p-3">
              <div className="md:h-[250px] h-[150px]">
                <img
                  src={image3}
                  alt="rightslider"
                  className="rounded-t-3xl h-full w-full "
                />
              </div>
              <div className="pt-3">
                <h1 className="font-semibold dark:text-white">
                  Free premium data on 12K+ stocks and cryptos
                </h1>
                <p className="text-gray-500 pt-2 text-sm">
                  Its not just data; its your gateway to smarter decisions.
                  Sculpt your financial destiny by accessing unparalleled
                  insights into each opportunity.
                </p>
                <button className="bg-green-500 rounded-[100px] text-white p-3 mt-2 text-sm">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl dark:!bg-gray-900 p-2 bg-white">
            <div className="flex flex-col p-3">
              <div className="md:h-[250px] h-[150px]">
                <img
                  src={image3}
                  alt="rightslider"
                  className="rounded-t-3xl h-full w-full"
                />
              </div>
              <div className="pt-3">
                <h1 className="font-semibold dark:text-white">
                  Free premium data on 12K+ stocks and cryptos
                </h1>
                <p className="text-gray-500 pt-2 text-sm">
                  Its not just data; its your gateway to smarter decisions.
                  Sculpt your financial destiny by accessing unparalleled
                  insights into each opportunity.
                </p>
                <button className="bg-green-500 rounded-[100px] text-white p-3 mt-2 text-sm">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </>
  );
}

export default Thirdsection;
