import Related_Service_Block from "../Components/Related_Service_Block";

export default function Related_Service({Related_Service_arr}) {
  return (
    <>
      <div className="container py-6">
        <h2 className="mainTitle">Related Services</h2>

        <div className=" grid grid-cols-1 md:grid-cols-3 py-8 gap-8">
          {Related_Service_arr?.map((block,index) => (
            <Related_Service_Block 
              key={index}
              image={block.img}
              Title={block.title}
              description={block.description}
              Route={block.route}
            />
          ))}
        </div>
      </div>
    </>
  );
}
