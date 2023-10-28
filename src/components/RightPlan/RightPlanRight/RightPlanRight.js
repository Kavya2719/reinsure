import InfoImg from '../../../assets/images/info-light-blue.png'
import RupeePlaceholder from '../../../assets/images/rupee-placeholder.png'

const RightPlanRight = () => {
  return (
    <div className="pl-[50px] pr-[40px] pt-[40px] pb-[30px] text-left xl:flex xl:flex-col xl:text-center xl:items-center xl:justify-center xl:p-0">
        <div className="flex-col flex gap-3 xl:hidden">
            <span className="text-medium-blue text-[35px] font-medium leading-[116%]">
                Employee Details
            </span>

            <span className="text-[#9B9B9B] text-[26px] font-medium leading-[116%]">
                Kindly fill the below information
            </span>
        </div>

        <div className="mt-[80px] flex flex-col gap-4">
            <div className="flex flex-col gap-[32px]">
                <input
                    className='w-[470px] rounded-lg border-solid border-2 border-[#C0C7FF] px-6 py-4 text-xl font-medium leading-[116%] placeholder:text-[#9B9B9B] placeholder:text-xl placeholder:font-medium placeholder:leading-[116%] lg:w-[350px]'
                    type='text'
                    placeholder='Name of the company'
                />

                <input
                    className='w-[470px] rounded-lg border-solid border-2 border-[#C0C7FF] px-6 py-4 text-xl font-medium leading-[116%] placeholder:text-[#9B9B9B] placeholder:text-xl placeholder:font-medium placeholder:leading-[116%] lg:w-[350px]'
                    type='number'
                    placeholder='Years of experience'
                    min="0"
                />

                <input
                    className='w-[470px] rounded-lg border-solid border-2 border-[#C0C7FF] px-6 py-4 text-xl font-medium leading-[116%] placeholder:text-[#9B9B9B] placeholder:text-xl placeholder:font-medium placeholder:leading-[116%] indent-5 lg:w-[350px]'
                    style={{ background: `url(${RupeePlaceholder}) no-repeat`, backgroundSize: `20px 20px`, backgroundPosition: `left 20px center` }}
                    type='number'
                    placeholder='50,000'
                    min="0"
                />
            </div>

            <div className='flex flex-row'>
                <img src={InfoImg} alt="info-btn" className='w-[38px] h-[38px]'/>
                <span className='italic text-[18px] leading-[116%] text-[#9B9B9B] w-[350px] text-left lg:w-[320px]'>
                    Gross salary is the total earning before deductions and taxes.
                </span>
            </div>
        </div>

       <button className="mt-[120px] bg-[#686BFF] rounded-[50px] py-6 px-[150px] text-white text-2xl font-medium leading-[116%] lg:px-[120px] xl:mt-20">
            Continue
       </button>
    </div>
  )
}

export default RightPlanRight