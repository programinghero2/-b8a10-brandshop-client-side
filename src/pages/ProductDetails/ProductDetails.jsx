import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
    const productDetails = useLoaderData()
    const { _id, productType, productName, brandName, photo, price, description, rating } = productDetails
    const cartProductDetails = { productType, productName, brandName, photo, price, description, rating }
    const handleCartProduct = () => {
        fetch(" https://assignment10-server-lime.vercel.app/cartProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartProductDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("product cart successfully!")
                }
            })
    }

    return (
        <div className="card card-side flex-col md:flex-row bg-base-100 items-center w-4/5 mx-auto">
            <figure className="w-3/4 lg:w-2/5 h-[200px] rounded-l-lg"><img className="h-full object-contain" src={photo} alt="Movie" /></figure>
            <div className="card-body md:w-4/5">
                <h2 className="card-title mb-3">{productName}</h2>
                <p className="text-gray-600"><span className="text-black text-base font-medium">BrandName</span>: {brandName}</p>
                <p className="text-gray-600"><span className="text-black text-base font-medium">ProductType</span>: {productType}</p>
                <p className="text-gray-600"><span className="text-black text-base font-medium">Price</span>: {price}</p>
                <p className="text-gray-600"><span className="text-black text-base font-medium">Rating</span>: {rating}</p>
                <p className="text-gray-600"><span className="text-black text-base font-medium">Decription</span>: {description}</p>
                <div className="card-actions mt-3">
                    <button onClick={handleCartProduct} className="btn btn-outline rounded-full border border-red-500 text-red-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;