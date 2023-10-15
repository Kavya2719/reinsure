import StarImg from '../../assests/images/Star.png'

const TestimonialsCard = ({ name, role, description, image, rating }) => {
  const stars = [];
  for(let i = 0; i < 5; i++) {
    if(i < rating) stars.push(StarImg)
    // else stars.push("");
  }

  return (
    <div className='p-16 bg-white flex flex-col gap-[10px]'>
        <div className='flex flex-row justify-between gap-[40px]'>
            <img src={image} alt={"TestimonialsImage"} className='w-[195px]'/>

            <div className='flex flex-col gap-4 text-xl text-left'>
                <div className='flex flex-col gap-[6px]'>
                    <div>
                        <span className='font-medium'>{name},</span>
                        <span className='font-light'>&nbsp;&nbsp;{role}</span>
                    </div>

                    <div className='flex flex-row gap-1'>
                        {
                            stars.map((star, index) => {
                                return <img key={index} src={star} alt={"Star"} className=''/>
                            })
                        }
                    </div>
                </div>
                
                <span className='leading-[130%] w-[450px]'>
                    {description}
                </span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard