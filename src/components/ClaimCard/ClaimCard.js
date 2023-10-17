const ClaimCard = ({ role, amount }) => {
  return (
    <div className="flex flex-col px-4 py-2 bg-white items-center justify-center rounded-[4px] shadow-light-black shadow-md lg:px-3">
        <span className="text-light-gray text-[14px] font-light lg:text-[12px]">
            {role}
        </span>

        <span className="font-semibold font-unbounded text text-xl text-gray lg:text-base">
            ₹ {amount}
        </span>

        <span className="text-green text-[14px] lg:text-[12px]">
            Claimed
        </span>
    </div>
  )
}

export default ClaimCard