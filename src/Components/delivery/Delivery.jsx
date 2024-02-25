import cash from "../../assets/cash.png"
import delivery from "../../assets/delivery.png"
import returs from "../../assets/returns.jpg"
const Delivery = () => {
    return (
        <div  className="md:flex gap-5 justify-evenly border-2 p-2 rounded">
            <div  className="flex md:flex-col  lg:flex-row gap-3 lg:gap-2 items-center">
                <div className="hover:border-2 ml-3 hover:border-gray-500 border-dotted w-28 h-28 md:p-3 rounded-full">
                    <img src={cash} alt="" />
                </div>
                <div className="mt-2 md:text-center">
                    <p className="text-base font-bold">CASH ON DELIVERY</p>
                    <p className="text-gray-600">Pay cash at your doorstep</p>
                </div>
            </div>
            <div className="flex md:flex-col  lg:flex-row gap-3 lg:gap-2 items-center">
                <div className="hover:border-2 ml-3 hover:border-gray-500 border-dotted md:p-3 w-28 h-28 rounded-full">
                    <img src={delivery} alt="" />
                </div>
                <div className="mt-2 md:text-center">
                    <p className="text-base font-bold">DELIVERY</p>
                    <p className="text-gray-600">All over Bangladesh</p>
                </div>
            </div>
            <div className="flex md:flex-col  lg:flex-row gap-3 lg:gap-2 items-center">
                <div className="hover:border-2 ml-3 hover:border-gray-500 border-dotted md:p-3 w-28 h-28 rounded-full">
                    <img src={returs} alt="" />
                </div>
                <div className="mt-2 md:text-center">
                    <p className="text-base font-bold">HAPPY RETURN</p>
                    <p className="text-gray-600">7 days return facility</p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;