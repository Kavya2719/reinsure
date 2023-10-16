import { useState, useRef } from "react"

const FAQ = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const answerRef = useRef();

  const handleClick = () => {
    answerRef.current.style.maxHeight = showAnswer ? "0" : `${answerRef.current.scrollHeight}px`
    setShowAnswer(!showAnswer)
  }

  return (
    <div className={`w-[75%] p-[21px] flex flex-col gap-3 lg:p-[10px] sm:w-[95%] ${showAnswer? "bg-light-purple": "bg-white"}`}>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl font-semibold tracking-[0.2px] text-left lg:text-base">
          {question}
        </span>

        <button 
          className="text-white bg-blue rounded-full py-1 px-[10px] text-base font-semibold tracking-[0.2px]"
          onClick={handleClick}
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