import { FindVirtual } from "../assets/UsedArr";

export default function FindYourVirtual() {
  return (
    <div className="container py-14">
      <h2 className="mainTitle text-center text-3xl font-bold mb-6">
        Find Your Virtual Assistant Today
      </h2>
      <hr className="w-40 h-1 mx-auto bg-primary rounded-xl mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 ">
        {FindVirtual.map((virtual, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="h-[140px] w-[140px] rounded-full  mb-4 shadow-sm">
              <img
                src={virtual.image}
                alt={virtual.Title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] font-semibold text-center my-2">
              {virtual.Title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {virtual.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
