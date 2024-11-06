import HowMuch_virtual from "/images/HowMuchDoes/smiling.webp";
export default function Virtual_Receptionist_Cost() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-7 col-span-12">
            <h2 className="text-2xl text-left font-semibold md:pb-6 pb-2 text-secondary">
              How Much Does A Virtual
              <br /> Receptionist Cost?
            </h2>
            <p>
              The average cost of a receptionist is around £12 per hour—equating
              to a monthly salary of £2,720—outsourcing this role with us can
              cut your costs by up to 70% compared to hiring a local
              professional. At MyBudgetStaff, we handle the entire vetting and
              hiring process, including rigorous interviews and comprehensive
              background checks, ensuring you get top-quality support.
              <br />
              <br />
              Your success is our success, so let us take care of the details
              while you focus on driving growth and maximising
              your productivity!
            </p>
          </div>
          <div className="lg:col-span-5 col-span-12 overflow-hidden rounded-lg">
            <img
              src={HowMuch_virtual}
              alt="HowMuch_virtual"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
