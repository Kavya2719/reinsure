
const ClaimCard = ({ role, amount }) => {
  return (
    <div className="flex flex-col px-4 py-4 bg-white items-center justify-center">
        <span className="text-light-gray text-[14px] font-light">
            {role}
        </span>

        <span className="font-semibold font-unbounded text text-xl text-gray">
            ₹ {amount}
        </span>

        <span className="text-green text-[14px]">
            Claimed
        </span>
    </div>
  )
}

export default ClaimCard