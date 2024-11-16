import banner from "../../common/assets/banner.webp";
import bell from "../../common/assets/icons/bell.svg";
import CarouselComponent from "../Carousel";

const Banner = () => {
  return (
    <div className="px-4 mt-[5px]">
      <div className="relative">
        <CarouselComponent>
          <img alt="Banner" src={banner} loading="lazy" />
          <img alt="Banner" src={banner} loading="lazy" />
          <img alt="Banner" src={banner} loading="lazy" />
        </CarouselComponent>
      </div>

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
