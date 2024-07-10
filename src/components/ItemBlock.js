import { FaCircleCheck} from "react-icons/fa6";
import Image from 'next/image'
import {FaEdit} from "react-icons/fa"
const ItemBlock = ({ item, cart}) => {
  return (
    <div className="flex justify-around">
      <FaCircleCheck className="text-emerald-500 text-xl" />
      <Image src={item.picture} alt={item.name} width={250} height 
        ={250} className="w-2/5" />
      <div className="flex flex-col gap-2">
      <h3 className="text-lg">{item.title}</h3>
        <p className="text-2xl">{item.price}</p>
        <p className="bg-gray-100 px-4 py-2 rounded">{item.discount} off</p>
        {
          !cart && <div className="flex gap-2 items-center self-end">
          <button className="bg-gray-100 w-[24px] h-[24px] rounded-full flex items-center justify-center">+</button>
            <p className="text-lg">1</p>
                      <button className="bg-gray-100 w-[24px] h-[24px] rounded-full flex items-center justify-center">-</button>
                      
          </div>
        }
      </div>

              {
          cart && <div className="flex gap-2 items-center">
          <button className="bg-gray-100 w-[24px] h-[24px] rounded-full flex items-center justify-center">+</button>
            <p className="text-lg">1</p>
                      <button className="bg-gray-100 w-[24px] h-[24px] rounded-full flex items-center justify-center">-</button>
                      
          </div>
        }

      {
        !cart && <div className="flex gap-2 items-center">
          <FaEdit />
          <p>Edit item</p>
</div>

      } 
    </div>
  )
}

export default ItemBlock;