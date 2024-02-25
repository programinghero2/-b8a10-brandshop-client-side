import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Footer from "../../Components/Footer/Footer";
import Delivery from "../../Components/delivery/Delivery";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";
import { useContext, useState } from "react";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Banner></Banner>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    {
                        brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
                <div className="my-10">
                    <FeatureProducts></FeatureProducts>
                </div>
                <div className="my-10">
                    <h1 className="text-2xl text-center mb-5 font-bold">Delivery Services</h1>
                    <Delivery></Delivery>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;