import bottle from "../assets/bottle.png";

function List({ price }: { price: number }) {
  return (
    <div className="flex">
      <div className="pb-8 lg:pb-0 md:w-[60%] w-full border-l border-t flex flex-col pt-20  px-4 h-full">
        <div className="">
          <span className="flex justify-center w-full ">
            <img src={bottle} alt="wine" className=" h-80" />
          </span>
          <div className=" px-6 flex flex-col gap-4 mt-10 ">
            <h3 className="border-b-2 pb-2 border-gray-300">
              Wine Relax: white semi-sweet{" "}
            </h3>

            <div className="flex justify-between ">
              <p>💲{price}</p>
              <p className=" rounded-full p-1 border-2 border-gray-300 cursor-pointer">
                ➕
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] border h-full sm:flex pt-20 px-4 hidden ">
        <span className="flex justify-end w-full ">
          <img src={bottle} alt="wine" className="h-80" />
        </span>
      </div>
    </div>
  );
}

export default List;
