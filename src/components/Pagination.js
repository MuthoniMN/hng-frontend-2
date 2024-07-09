import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="flex justify-center lg:justify-end py-4">
    <div className="flex gap-2">
    <button className="border-2 p-2 border-[#5E503F]">
    <FaChevronLeft />
    </button>
      
     <button className="text-gray-500 px-2">Prev</button>
      <button className="bg-gray-100 px-4 py-2 rounded">1</button>
      <button>Next</button>
      <button className="border-2 p-2 border-[#5E503F]">
      <FaChevronRight />
      </button>
    </div>
    </div>
  )
}

export default Pagination;