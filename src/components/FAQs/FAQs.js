import GetQuote from "../GetQuote/GetQuote"
import FAQsTitleImg from "../../assests/images/FAQsTitle.png"
import FAQsData from "../../assests/data/FAQsData.json"
import FAQ from "../FAQ/FAQ"

const FAQs = ({ screenSize }) => {
  return (
    <div className="flex flex-col py-20 gap-[40px] items-center justify-center lg:py-[40px]">
        <img src={FAQsTitleImg} alt="Answer to your questions" className="h-[68px] w-[667px] lg:w-[350px] lg:h-[35px]"/>

        <div className="flex flex-col gap-2 w-full items-center">
            {
                FAQsData.map(({question, answer}, index) => {
                    return(
                        <FAQ key={index} question={question} answer={answer}/>
                    )
                })
            }
        </div>

        <GetQuote buttonSize={screenSize > 1022? "large": "small"}/>
    </div>
  )
}

export default FAQs