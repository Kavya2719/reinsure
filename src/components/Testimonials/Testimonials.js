import { useState } from "react";
import ClientTrustUsImg from "../../assests/images/ClientTrustUs.png";
import RightBlueImg from "../../assests/images/rightBlue.png";
import GetQuote from "../GetQuote/GetQuote";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import TestimonialsData from "../../assests/data/TestimonialsData.json";

const Testimonials = ({ screenSize }) => {
  const [testimonialData, setTestimonialData] = useState(TestimonialsData[0]);
  const [isActive, setIsActive] = useState([true, false, false, false]);

  const active = "bg-white w-[40px]";
  const inactive = "bg-light-white-2 w-5";

  const handleChange = (e) => {
    console.log(isActive)
    const index = parseInt(e.target.value)
    setTestimonialData(TestimonialsData[index]);
    setIsActive([ ...isActive.map((item, i) => i === index? true: false) ])
  }

  return (
    <div className="py-20 flex flex-col gap-[40px] bg-blue items-center lg:py-[40px]">
      <img
        src={ClientTrustUsImg}
        alt="Client Trust Us"
        className="h-[68px] lg:h-[36px]"
      />

      <div className="flex flex-col gap-4 items-center">
        <TestimonialsCard
          name={testimonialData.name}
          role={testimonialData.role}
          description={testimonialData.description}
          image={testimonialData.image}
          rating={testimonialData.rating}
        />

        <div className="flex flex-row gap-2">
          <button
            value="0"
            className={`h-1 ${isActive[0] ? active : inactive}`}
            onClick={handleChange}
          />
          <button
            value="1"
            className={`h-1 ${isActive[1] ? active : inactive}`}
            onClick={handleChange}
          />
          <button
            value="2"
            className={`h-1 ${isActive[2] ? active : inactive}`}
            onClick={handleChange}
          />
          <button
            value="3"
            className={`h-1 ${isActive[3] ? active : inactive}`}
            onClick={handleChange}
          />
        </div>
      </div>

      <GetQuote
        buttonSize={screenSize > 1022 ? "large" : "small"}
        color={"blue"}
        backgroundColor={"white"}
        image={RightBlueImg}
      />
    </div>
  );
};

export default Testimonials;
