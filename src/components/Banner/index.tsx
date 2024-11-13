import banner from "../../common/assets/banner.webp";
import bell from "../../common/assets/icons/bell.svg";

const Banner = () => {
  return (
    <div className="px-4 mt-[5px]">
      <img alt="Banner" src={banner} />
      <div className="flex items-center gap-2 mt-1">
        <img alt="Bell Icon" src={bell} />
        <p className="text-sm text-primary-color font-medium">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </p>
      </div>
    </div>
  );
};

export default Banner;
