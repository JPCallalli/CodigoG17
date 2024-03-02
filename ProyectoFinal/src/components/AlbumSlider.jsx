import Slider from "react-slick";

const AlbumSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <div className="relative h-56 overflow-hidden rounded-lg md:h-96 outline">
      <Slider {...settings}>
          <div>
            <img
              src='src\assets\ImagenR&B.jpg'
              className="w-full"
              alt="..."
            />
          </div>
          <div>
            <img
              src='src\assets\ImagenR&B.jpg'
              className="w-full"
              alt="..."
            />
          </div>
      </Slider>
    // </div>
  );
};

export default AlbumSlider;
