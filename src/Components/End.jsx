import icon from "/Icon.png";
const End = () => {
  return (
    <>
      <div className="bg-white dark:!bg-black  flex justify-center items-center py-2">
        <img src={icon} alt="icon" className="h-10 w-10 " />
        <p className="dark:text-white">
          ©2024finulab llc. all rights reserved.
        </p>
      </div>
    </>
  );
};

export default End;
