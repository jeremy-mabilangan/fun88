import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = (props: {
  children: JSX.Element | JSX.Element[];
  config?: CarouselProps;
}) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
      {...props.config}
      responsive={
        props?.config?.responsive || {
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }
      }
    >
      {props.children}
    </Carousel>
  );
};

export default CarouselComponent;
