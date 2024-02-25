import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { brand_img, brand_name } = brand
    return (
        <Link to={`/products/${brand_name}`}>
            <div data-aos="zoom-in-down" data-aos-duration="1000" className="card card-compact bg-base-100 border-2">
                <figure><img className="md:h-[260px] w-full" src={brand_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <button className="btn btn-outline normal-case w-2/5 rounded-full border border-red-500 text-red-500 mx-auto">{brand_name}</button>
                </div>
            </div>
        </Link>
    );
};

export default Brand;