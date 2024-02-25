import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./FeaturesProducts.css"
import { useEffect, useState } from 'react';

// Import Swiper styles
const FeatureProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("features.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center font-bold mb-10'>Feature Product</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="feature-swiper"
            ><div>

                    {
                        products?.map(product => <div className='border-2 border-red-500' key={product.id}>
                            <SwiperSlide style={{width:'150px !important'}} className='border-2 feature-slide rounded w-[131px]  md:h-[300px]'>
                                <div>
                                    <div className='h-[115px] md:h-[150px] lg:h-[200px]'>
                                        <img className='object-contain' src={product?.img} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold md:font-bold'>{product?.name}</p>
                                        <p className='text-gray-600'>{product?.brand}</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default FeatureProducts;