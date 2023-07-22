import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SliderImage: React.FC = () => (
  <Carousel autoplay className="z-[-99]">
    <div>
      <img
        src="https://shopdunk.com/images/uploaded/PC_s.png"
        style={contentStyle}
        alt=""
        className="w-full"
      />
    </div>
    <div>
      <img
        src="https://shopdunk.com/images/uploaded/Home%20banner%20T7%202023/banner%20iphone%2014%20Pro%20Max%20PC7.jpg"
        style={contentStyle}
        alt=""
        className="w-full"
      />
    </div>
    <div>
      <img
        src="https://shopdunk.com/images/uploaded/PC_s.png"
        style={contentStyle}
        alt=""
        className="w-full"
      />
    </div>
    <div>
      <img
        src="https://shopdunk.com/images/uploaded/Home%20banner%20T7%202023/banner%20iphone%2014%20Pro%20Max%20PC7.jpg"
        style={contentStyle}
        alt=""
        className="w-full"
      />
    </div>
  </Carousel>
);

export default SliderImage;
