import image8 from "/vuori.png";
import image9 from "/manscaped.png";
import image10 from "/matrixian.png";
import image11 from "/versed.png";
import image12 from "/klippa.png";
import image13 from "/Dvuori.png";
import image14 from "/Dmanscaped.png";
import image15 from "/Dmatrixian.png";
import image16 from "/Dversed.png";
import image17 from "/Dklippa.png";
const Secondsection = () => {
  return (
    <>
      <div className="container mx-auto mt-5 ">
        <div className="md:flex ">
          {/* light mode */}
          <div className="relative pt-16 dark:hidden">
            <div className="absolute w-14 left-7 md:w-20 md:left-20 ">
              <img src={image8} alt="vuori" />
            </div>
            <div className="absolute w-20 left-24 top-2 md:w-28 md:left-52">
              <img src={image9} alt="manscaped" />
            </div>
            <div className="absolute w-28 left-20 top-24 md:w-44 md:top-36 ">
              <img src={image10} alt="matrixian" />
            </div>
            <div className="absolute w-24 left-48 top-14 md:w-36 md:left-72 md:top-28">
              <img src={image11} alt="versed" />
            </div>
            <div className="absolute w-16 left-52 top-40 md:w-24 md:top-64 md:left-64">
              <img src={image12} alt="klippa" />
            </div>
          </div>
          {/* dark mode */}
          <div className="relative pt-16 hidden dark:block">
            <div className="absolute w-14 left-7 md:w-20 md:left-20 ">
              <img src={image13} alt="vuori" />
            </div>
            <div className="absolute w-20 left-24 top-2 md:w-28 md:left-52">
              <img src={image14} alt="manscaped" />
            </div>
            <div className="absolute w-28 left-20 top-24 md:w-44 md:top-36 ">
              <img src={image15} alt="matrixian" />
            </div>
            <div className="absolute w-24 left-48 top-14 md:w-36 md:left-72 md:top-28">
              <img src={image16} alt="versed" />
            </div>
            <div className="absolute w-16 left-52 top-40 md:w-24 md:top-64 md:left-64">
              <img src={image17} alt="klippa" />
            </div>
          </div>
          <div className=" text-right mt-40 md:mt-20 ml-auto">
            <h1 className="text-4xl font-bold mb-4 leading-relaxed dark:text-white">
              Trusted
              <br /> Collaborators
            </h1>
            <p className=" text-gray-500  leading-relaxed">
              In our journey towards excellence, we are proud to be supported by
              <br className="hidden md:inline lg:inline" />a network of esteemed
              partners who share our vision and values.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondsection;
