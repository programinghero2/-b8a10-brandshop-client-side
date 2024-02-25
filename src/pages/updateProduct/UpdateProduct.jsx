import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id,productName} = product
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const productType = form.type.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = {productType, productName, brandName, photo, price, description, rating }
        fetch(` https://assignment10-server-lime.vercel.app/product/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(() => toast("Product Updated successfully"))
    }
    return (
        <div className="lg:w-3/4 mx-auto mb-10">
            <h1 className="text-2xl font-bold text-center">Update product of <br /> {productName}</h1>
            <form onSubmit={handleUpdateProduct} className="w-3/4 lg:w-1/2 mx-auto mt-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <input type="text" placeholder="Product type" name="type" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Product name" name="productName" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" placeholder="Brand name" name="brandName" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" name="price" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" name="description" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered"  />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;