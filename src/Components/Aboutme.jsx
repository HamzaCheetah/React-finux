import image1 from "/person1.png";
import image2 from "/person2.png";

const Aboutme = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse p-[5%]">
        <div className="flex gap-5">
          {/* card 1 */}
          <div className=" max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-200 flex flex-col items-center ms-5">
            <img
              className="rounded-t-lg h-32 w-36 justify-center items-center p-2 md:h-48 md:w-48"
              src={image1}
              alt="person1"
            />
            <div className="">
              <h5 className=" md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                Obsaol Tesemma
              </h5>
              <p className="mb-2 font-normal text-center text-yellow-500">
                CEO & CTO
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className=" max-w-sm border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 flex flex-col items-center">
            <img
              className="rounded-t-lg h-32 w-36 justify-center items-center p-2 md:h-48 md:w-48"
              src={image2}
              alt="person2"
            />
            <div className="">
              <h5 className="md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center  ">
                Yonathan Afework
              </h5>
              <p className="mb-2 font-normal text-center text-yellow-500">
                CMO
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto text-right justify-end">
          <h1 className="text-4xl font-bold dark:text-white ">About us</h1>
          <p className=" text-gray-500 leading-8 mt-5">
            at finulab, our mission is your financial empowerment. we are more
            than
            <br className="hidden md:inline lg:inline" />
            developers; we are dream-weavers crafting premium financial products
            with a
            <br className="hidden md:inline lg:inline" />
            singular goal - supporting your journey to financial freedom. dive
            into a <br className="hidden md:inline lg:inline" />
            realm where every glance provides financial insights, and top-tier
            services
            <br className="hidden md:inline lg:inline" />
            are not just a privilege, but a right.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
