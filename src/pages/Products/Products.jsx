import { useLoaderData, useParams } from "react-router-dom";
import Product from "../../Components/Product/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./Products.css"
import disconut1 from "../../assets/banner7.png"
import discount2 from "../../assets/adds3.png"
import discount3 from "../../assets/banner8.png"
const Products = () => {
    const { brand } = useParams()
    const products = useLoaderData()
    const filterProduct = products?.filter(product => product.brandName == brand)
    return (
        <div className="w-11/12 mx-auto mt-10 mb-10">
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="border-2 adds-swiper   rounded shadow">
                    <SwiperSlide className="adds-slider" >
                        <div className="flex items-center justify-between  ">
                            <div className="flex-1">
                                <p className="text-[20px] md:text-[30px] font-bold">Discount <span className="text-green-600">Up to 35%</span> <br /> only this month</p>
                                <button className="btn btn-secondary mt-3">Shop Now</button>
                            </div>
                            <div className="flex-1">
                                <img className="lg:w-4/4  " src={disconut1} alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="adds-slider">
                        <div className="flex items-center  ">
                            <div className="flex-1">
                                <p className="text-[20px] md:text-[30px] font-bold">SPECIAL OFFER <br /> SALE <br /><span className="text-green-600">UP TO 70% OFF</span></p>
                                <button className="btn btn-secondary mt-3">Shop Now</button>
                            </div>
                            <div className="flex-1">
                                <img className="w-[400px]" src={discount2} alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="adds-slider">
                        <div className="flex items-center  ">
                            <div className="flex-1">
                                <p className="text-[20px] md:text-[30px] font-bold">SPECIAL OFFER <br /> SALE <br /> <span className="text-green-600">UP TO 70% OFF</span></p>
                                <button className="btn btn-secondary mt-3">Shop Now</button>
                            </div>
                            <div className="flex-1">
                                <img src={discount3} alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                {
                    filterProduct.length > 0 && <h1 className=" text-2xl text-center font-bold mb-10">{brand} Products</h1>
                }
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    {
                        filterProduct?.length > 0 ? filterProduct?.map(product => <Product key={product._id} product={product}></Product>) :
                            <div className=" col-span-2 md:h-36 lg:h-96 flex justify-center items-center rounded">
                                <p className="text-3xl text-gray-700">Product not Found</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;