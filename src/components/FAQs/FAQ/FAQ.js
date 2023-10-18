import { useState, useRef } from "react"

const FAQ = ({ question, answer, index }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const answerRef = useRef();
  const faqRef = useRef();

  const handleClick = () => {
    answerRef.current.style.maxHeight = showAnswer ? "0" : `${answerRef.current.scrollHeight}px`
    if(showAnswer) setTimeout(() => faqRef.current.style.gap = "0", 300)
    else faqRef.current.style.gap = "12px"
    setShowAnswer(!showAnswer)
  }

  return (
    <div ref={faqRef} className={`w-[75%] p-[21px] flex flex-col lg:p-[10px] sm:w-[95%] ${showAnswer? "bg-light-purple": "bg-white"}`}>
      <div className="flex flex-row justify-between items-center">
        <label className="text-xl font-semibold tracking-[0.2px] text-gray text-left lg:text-base cursor-pointer" htmlFor={"faq-button" + index}>
          {question}
        </label>

        <button 
          className="text-white bg-blue rounded-full py-1 px-[10px] text-base font-semibold tracking-[0.2px]"
          onClick={handleClick}
          id={"faq-button" + index}
        >
          {showAnswer ? "-" : "+"}
        </button>
      </div>

      <span ref={answerRef} className={`text-left transition-all duration-500 overflow-hidden max-h-0 text-light-gray text-xl tracking-[0.2px] lg:text-base`}>
        {answer}
      </span>
    </div>
  )
}

export default FAQ