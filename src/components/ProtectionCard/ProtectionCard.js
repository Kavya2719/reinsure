import Voucher from '../../assets/images/Voucher.png'

const ProtectionCard = () => {
  return (
    <div className="flex items-center justify-center pb-5">
        <div className="w-[90%] max-w-[1296px] flex flex-col gap-10 p-[50px] text-left rounded-[40px] bg-white shadow-[8px_7px_30px_0_rgba(0,0,0,0.20)] md:w-auto md:shadow-none" >
            <span className="text-medium-blue leading-[116%] text-[45px] font-semibold">
                Plus protection plan
            </span>

            <div className="flex flex-row gap-10">
                <div className="p-[45px] rounded-[25px] border-solid border-[3px] border-[#DBE7FF]">
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='flex flex-row gap-[56px]'>
                                <span>
                                    Employment details
                                </span>

                                <div className='flex felx-row items-center'>
                                    <img />
                                    <span>
                                        Edit
                                    </span>
                                </div>
                            </div>

                            <img />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='flex flex-col gap-4'>
                                <span>
                                    Employment type
                                </span>

                                <span>
                                    Full time
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-[30px] flex flex-col gap-16 rounded-[25px] border-solid border-[3px] border-[#DBE7FF]">
                    <span className="text-[28px] font-medium leading-[116%] text-blue">
                        Cost Breakdown
                    </span>
                    
                    <div className="flex flex-col gap-5">
                        <div className="flex-row flex gap-[40px]">
                            <span className="w-[240px] text-2xl font-medium leading-[116%] italic text-[#838383]">
                                Plan cost
                            </span>

                            <span className="text-2xl font-semibold leading-[116%] text-[#88A5CF]">
                                ₹ 5,508/-
                            </span>
                        </div>

                        <div className="flex-row flex gap-[40px]">
                            <span className="w-[240px] text-2xl font-medium leading-[116%] italic text-[#838383]">
                            Taxes
                            </span>

                            <span className="text-2xl font-semibold leading-[116%] text-[#88A5CF]">
                                ₹ 991/-
                            </span>
                        </div>

                        <div className="flex-row flex gap-[40px]">
                            <span className="w-[240px] text-2xl font-medium leading-[116%] italic text-[#838383]">
                                Total
                            </span>

                            <span className="text-2xl font-semibold leading-[116%] text-[#88A5CF]">
                                ₹ 6,499/-
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center flex-row py-[30px] px-5 bg-[#F0F2FF] rounded-[10px]">
                            <input
                                className='w-[310px] pr-3 text-xl italic font-medium leading-[116%] placeholder:text-xl placeholder:font-medium placeholder:leading-[116%] placeholder:italic placeholder:text-[rgba(154, 154, 154, 0.70)] bg-[#F0F2FF]'
                                type="text"
                                placeholder='Enter referral code'
                            />

                            <button className='text-2xl font-medium leading-[116%] text-[#686BFF]'>
                                Apply
                            </button>
                        </div>

                        <div className="flex items-center flex-row gap-2">
                            <img src={Voucher} alt="voucher" className='w-[25px] h-[25px]' />
                            <span className='w-[350px] text-[14px] font-medium leading-[116%] text-[#9A9A9A]'>
                                Enter a referral code and receive a ₹500 Amazon Voucher.
                            </span>
                        </div>
                    </div>

                    <button className="py-4 px-10 flex flex-row gap-[70px] items-center rounded-[10px] bg-[#686BFF] text-left">
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-medium leading-[116%] text-white">
                                ₹ 6,499/-
                            </span>

                            <span className="text-base font-medium leading-[116%] text-white">
                                For annual subcription
                            </span>
                        </div>

                        <span className="text-xl font-semibold leading-[116%] text-white">
                            Continue
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProtectionCard