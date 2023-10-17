import TopBrandsData from "../../assets/data/TopBrandsData.json";

const TopBrands = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="absolute mt-[-8px] px-3 bg-light-white text-light-gray text-base leading-[120%] lg:text-[14px] z-[1] lg:bg-white">
        Our clients work with top brands including
      </span>

      <div className="flex flex-row gap-16 border-light-gray border-t-[1.5px] py-4 px-[18px] items-center lg:gap-[30px] sm:px-[16px] sm:gap-[15px] sm:py-[7px]">
        {TopBrandsData.map((brand, index) => {
          return (
            <div
              key={index}
              className="object-cover h-[50px] flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-[110px] max-h-[50px] md:max-w-[80px] md:max-h-[35px] sm:max-w-[45px] sm:max-h-[30px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBrands;
