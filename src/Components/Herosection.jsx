import image7 from "/X.png";
import image2 from "/Card Assets.png";
import image3 from "/Card Assets (1).png";
import image4 from "/Card.png";
import image5 from "/Frame 75.png";
import image6 from "/Icon.png";
import image11 from "/Dcrypto.png";
import image8 from "/Detherium.png";
import image9 from "/Dclarity.png";
import image10 from "/Dbalance.png";
const HeroSection = () => {
  return (
    <div>
      <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 relative ">
        <div>
          <div className="flex">
            <h1 className="font-bold text-6xl mt-20 ps-10 dark:text-white ">
              What does
              <br />
              the stand for?
            </h1>{" "}
            <img
              className="w-16 h-16 right-5 top-20 md:right-20 relative"
              src={image7}
              alt="X-img"
            />
          </div>
          {/* <h1 className="font-bold text-6xl flex ps-10 tracking-wider  dark:text-white ">
            
          </h1> */}
          <p className="ps-10 text-gray-500 text-sm tracking-wider leading-relaxed">
            Discover the Future of Finance with Finux - Tailored Specifically to
            <br />
            Your Needs. Experience a Revolution in Banking and Investing,
            <br />
            Crafted to Empower You in the Digital Economy.
          </p>
          <div className="flex  mt-10 ps-10 gap-5 ">
            <img className="h-14 w-14" src={image6} alt="logo-img" />
            <h4 className="text-xl mt-2 dark:text-white">Built by finulab</h4>
          </div>
        </div>
        <div className="dark:hidden">
          <div className="z-30 md:w-80 mt-20 relative">
            <img src={image2} alt="bitcard" />
          </div>
          <div className="z-40 md:w-80  relative md:left-48 md:bottom-32">
            <img src={image3} alt="ethereiumcard" />
          </div>
          <div className="z-20 md:w-72 md:bottom-56 relative">
            <img src={image4} alt="claritycard" />
          </div>
          <div className="z-40 md:w-72 relative md:bottom-1/2 md:left-56">
            <img src={image5} alt="balancecard" />
          </div>
        </div>
        {/* darkmode images */}
        <div className="hidden dark:block">
          <div className="z-30 md:w-80 mt-20 relative">
            <img src={image11} alt="bitcard" />
          </div>
          <div className="z-40 md:w-80  relative md:left-48 md:bottom-32">
            <img src={image8} alt="ethereiumcard" />
          </div>
          <div className="z-20 md:w-72 md:bottom-56 relative">
            <img src={image9} alt="claritycard" />
          </div>
          <div className="z-40 md:w-72 relative md:bottom-1/2 md:left-56">
            <img src={image10} alt="balancecard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
