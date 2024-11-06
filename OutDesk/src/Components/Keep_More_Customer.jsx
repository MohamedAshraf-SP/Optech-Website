 
export default function Keep_More_Customer({ keep_cutomer_arr }) {
  return (
    <div className="container py-10 flex flex-col items-center">
      <div className="pb-10">
        <h2 className="mainTitle">
          Keep More Customers With a Skilled Virtual Receptionist
        </h2>
        <p className="text-textcolor text-center mx-auto ">
          A MyBudgetStaff Virtual Receptionist is more than just an answering
          service – they’re a trained professional that not only answers calls &
          responds to customer inquiries, but they do it the way you would, with
          all the professionalism & courtesy you’d expect from anyone on your
          staff.
        </p>
      </div>
      {/* <div className="lg:w-[1024px] w-full lg:h-[768px] overflow-hidden">
        <img
          src={costOfPoor_img}
          alt="costOfPoor_img"
          className="w-full g-full"
        />
      </div> */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6  pb-10">
        {keep_cutomer_arr?.map((block, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-14 h-14 overflow-hidden">
              <img src={block?.img} alt={block?.img} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h4 className="text-[30px] font-semibold">{block?.title}</h4>
              <p className="text-textcolor text-[14px] text-center">
                {block?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
