import StarImg from '../../assests/images/Star.png'

const TestimonialsCard = ({ name, role, description, image, rating }) => {
  const stars = [];
  for(let i = 0; i < 5; i++) {
    if(i < rating) stars.push(StarImg)
    // else stars.push("");
  }

  return (
    <div className='p-16 bg-white flex flex-col gap-[15px] lg:p-7 sm:p-4 sm:pt-[11px]'>
        <div className='flex-col gap-1 items-center text-base hidden sm:flex'>
            <div>
                <p className='font-medium'>{name}</p>
                <p className='font-light'>{role}</p>
            </div>

            <div className='flex flex-row gap-1'>
                {
                    stars.map((star, index) => {
                        return <img key={index} src={star} alt={"Star"} className='w-[14px]'/>
                    })
                }
            </div>
        </div>

        <div className='flex flex-row justify-between gap-[40px] lg:gap-[30px] sm:gap-[20px]'>
            <img src={image} alt={"TestimonialsImage"} className='w-[195px] lg:w-[134px] lg:h-[137px]'/>

            <div className='flex flex-col gap-4 text-xl text-left lg:text-base'>
                <div className='flex flex-col gap-[6px] sm:hidden lg:gap-1'>
                    <div>
                        <span className='font-medium'>{name},</span>
                        <span className='font-light'>&nbsp;&nbsp;{role}</span>
                    </div>

                    <div className='flex flex-row gap-1'>
                        {
                            stars.map((star, index) => {
                                return <img key={index} src={star} alt={"Star"} className='lg:w-[14px]' />
                            })
                        }
                    </div>
                </div>
                
                <span className='text-light-gray leading-[130%] w-[450px] lg:w-[300px] sm:w-[170px] lg:text-[12px]'>
                    {description}
                </span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard