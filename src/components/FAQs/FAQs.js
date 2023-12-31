import { GetQuote, FAQ } from ".."
import FAQsTitleImg from "../../assets/images/FAQsTitle.png"
import FAQsData from "../../assets/data/FAQsData.json"

const FAQs = ({ screenSize, FAQsRef }) => {
  return (
    <div ref={FAQsRef} className="flex flex-col py-20 gap-[40px] items-center justify-center lg:py-[40px]">
        <img src={FAQsTitleImg} alt="Answer to your questions" className="h-[68px] w-[667px] lg:w-[350px] lg:h-[35px]"/>

        <div className="flex flex-col gap-2 w-full items-center">
            {
                FAQsData.map((data, index) => {
                    return(
                        <FAQ key={index} {...data} />
                    )
                })
            }
        </div>

        <GetQuote LinkTo="/get-quote" buttonSize={screenSize > 1022? "large": "small"}/>
    </div>
  )
}

export default FAQs