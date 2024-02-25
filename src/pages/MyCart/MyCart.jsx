import { useLoaderData } from "react-router-dom";
import { MdDelete } from 'react-icons/md';
import { useState } from "react";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCart = () => {
    const cartProducts = useLoaderData()
    const [newProducts, setNewProducts] = useState(cartProducts)
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://assignment10-server-lime.vercel.app/cartProduct/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        const remmening = newProducts?.filter(product => product._id !== _id);
                        setNewProducts(remmening)
                        toast("Deleted Successfully")
                    })
            }
        })

    }
    return (
        <div>
            {/* my cart Page */}
            <div className="mt-10 mb-10">
                {
                    newProducts?.map(cartProduct => <div key={cartProduct._id} className="card border-2 mb-5 card-side bg-base-100 items-center flex-col md:flex-row w-4/5 mx-auto">
                        <figure className="w-full md:w-2/5 h-[200px] rounded-l-lg"><img className="h-full object-contain" src={cartProduct.photo} alt="Movie" /></figure>
                        <div className="card-body w-4/5">
                            <div className="flex items-center gap-3 justify-between">
                                <h2 className="card-title mb-1">{cartProduct.productName}</h2>
                                <div onClick={() => handleDelete(cartProduct?._id)} className="p-1 bg-[#331A15] cursor-pointer text-white flex justify-center items-center rounded-sm">
                                    <MdDelete></MdDelete>
                                </div>
                            </div>
                            <p className="text-gray-600"><span className="text-black text-base font-medium">BrandName</span>: {cartProduct.brandName}</p>
                            <p className="text-gray-600"><span className="text-black text-base font-medium">Price</span>: {cartProduct.price}</p>
                            <div className="card-actions mt-3">
                                <button className="btn btn-outline text-red-500 border-red-500">Please Order
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;