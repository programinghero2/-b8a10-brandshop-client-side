import { Link } from "react-router-dom";

const Product = ({ product, children }) => {
    const { _id, productType, productName, brandName, photo, price, description, rating } = product
    return (
        <div>
            {
                <div className="card flex-col lg:flex-row card-side items-center bg-base-100">
                    <figure className="mt-10 mb-5 lg:mt-0 lg:mb-0 lg:w-2/5 h-[200px] rounded-l-lg"><img className="h-full object-contain" src={photo} alt="Movie" /></figure>
                    <div className="card-body p-0 lg:p-8 lg:w-3/5">
                        <h2 className="card-title mb-3">{productName}</h2>
                        <div className="flex gap-2 mb-2">
                            <button className="btn ml-0 btn-outline normal-case w-[130px]  rounded-full border border-red-500 text-red-500 mx-auto">{brandName}</button>
                            <button className="btn ml-0  btn-outline normal-case w-[130px] rounded-full border border-red-500 text-red-500 mx-auto">{productType}</button>
                        </div>
                        <p><span className="text-base font-medium">Price</span>: {price}</p>
                        <p><span className="text-base font-medium">Rating</span>: {rating}</p>
                        <div className="card-actions mt-3">
                            <Link to={`/productDetails/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                            <Link to={`/update/${_id}`}>
                                <button className="btn btn-primary">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Product;