import BackgroundImage1 from "/BG.png";
import BackgroundImage2 from "/DBG.png";
const Reachout = () => {
  return (
    <div className="container mx-auto mt-40 pb-[200px]">
      <div
        className=" bg-cover bg-no-repeat bg-center dark:hidden md:bg-no-repeat md:bg-cover md:bg-top text-center pb-28"
        style={{
          backgroundImage: `url(${BackgroundImage1})`,
        }}
      >
        <div className="pt-20 text-center justify-center ">
          <h1 className="text-3xl font-bold">Feel free to reach out at</h1>
          <h3 className="text-green-500 py-3">obsaol.tesemma@fin-us.com</h3>
          <p className="text-gray-500">
            crafting the new era of finance is not about me. it is about: us.
            your inputs mean a lot - as the sole purpose of finulab is to
            develop premium financial
            <br className="hidden md:inline lg:inline" /> products that best
            empower you in your financial success journey. therefore, if you
            have any inputs, dont hesitate to reach out; it is our pleasure to
            help.
          </p>
        </div>
      </div>
      <div
        className="hidden dark:block bg-cover bg-no-repeat bg-center md:bg-no-repeat md:bg-cover md:bg-top text-center pb-28"
        style={{
          backgroundImage: `url(${BackgroundImage2})`,
        }}
      >
        <div className="pt-20 text-center justify-center ">
          <h1 className="text-3xl font-bold text-white py-3">
            Feel free to reach out at
          </h1>
          <h3 className="text-green-500 py-3">obsaol.tesemma@fin-us.com</h3>
          <p className="text-gray-500">
            crafting the new era of finance is not about me. it is about: us.
            your inputs mean a lot - as the sole purpose of finulab is to
            develop premium financial
            <br className="hidden md:inline lg:inline" /> products that best
            empower you in your financial success journey. therefore, if you
            have any inputs, dont hesitate to reach out; it is our pleasure to
            help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reachout;


