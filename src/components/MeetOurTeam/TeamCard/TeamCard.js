

const TeamCard = ({ image, name, role, description }) => {
  return (
    <div className="flex flex-col w-[270px]">
        <div className="flex items-center justify-center h-[300px] bg-light-white">
            <img src={image} alt={name} className="w-[184px] h-[184px]" />
        </div>

        <div
            className="flex items-center justify-center h-[300px]" 
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.24)" }}
        >
            <div className="flex flex-col gap-[20px] justify-center items-center">
                <span className="text-dark-blue text-2xl font-bold leading-[20px] tracking-[0.2px]">
                    {role}
                </span>

                <span className="text-light-gray text-base w-[184px] leading-[115%]">
                    {description}
                </span>
            </div>
        </div>
    </div>
  )
}

export default TeamCard