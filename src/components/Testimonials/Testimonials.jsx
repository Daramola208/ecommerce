import React from 'react';
import Slider  from 'react-slick';
import Img1 from "../../assets/photo/Mens0.jpg";
import Img2 from "../../assets/photo/men3.jpg";
import Img3 from "../../assets/photo/SecondProducts1.jpg";
import Img4 from "../../assets/photo/SecondProducts3.jpg";
import Img5 from "../../assets/photo/SecondProducts2.jpg";

const TestimonialData = [
    {
      id: 1,
      name: "DaraMola",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img:Img1,
    },
    {
      id: 2,
      name: "Segun joshua",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: Img2,
    },
    {
      id: 3,
      name: "Anthony Nelson",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: Img3,
    },
    {
      id: 4,
      name: "Abimbola Olashubomi",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: Img4,
    },
    {
      id: 5,
      name: "Abimbola Oladunni",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: Img5,
    },
    {
      id: 6,
      name: "Olamide",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: Img4,
    },
  ];
  
  const Testimonials = () => {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
        <div className="py-10 mb-10">
          <div className="container">
            {/* header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
              <p data-aos="fade-up" className="text-sm text-green-400">
                What our customers are saying
              </p>
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                Testimonials
              </h1>
              <p data-aos="fade-up" className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                asperiores modi Sit asperiores modi
              </p>
            </div>
    
            {/* Testimonial cards */}
            <div data-aos="zoom-in">
              <Slider {...settings}>
                {TestimonialData.map((data) => (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-700 bg-primary/10 relative"
                    >
                      <div className="mb-4">
                        <img
                          src={data.img}
                          alt=""
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                          <p className="text-xs text-gray-400">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-white">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
    };
    
export default Testimonials