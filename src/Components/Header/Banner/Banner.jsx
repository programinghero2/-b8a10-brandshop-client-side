import bannerimg from "../../../assets/bannerimg.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div className='mb-10  md:flex bg-[cadetblue] text-white rounded  md:h-[60vh] lg:h-[80vh] pb-10 md:pb-0'>
            <div className='md:flex-1 p-5 md:ml-10  md:mt-5 lg:mt-20 text-center mb-5 md:mb-0 '>
                <p>----SALE FEVER----</p>
                <p className='text-2xl md:text-2xl lg:text-3xl font-bold font-Oswald'>Purchase TK 200 or <br /> above & get 20% off</p>
                <div className='flex justify-center items-center gap-3 mt-5'>
                    <p className='text-gray-800 text-base'>Use Promo Code</p>
                    <button className='btn btn-sm bg-[#E527B2] text-white hover:bg-[#E527B2] border-none'>SELL200</button>
                </div>
                <div>
                    <button className='btn btn-outline  mt-5 text-start'>Explore More</button>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='flex-1 flex items-center justify-center'>
                <img className=' w-3/4 md:w-full lg:w-3/4' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;