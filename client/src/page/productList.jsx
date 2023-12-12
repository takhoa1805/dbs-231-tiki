import React from "react";
import { Link } from "react-router-dom";
import sale1 from "../../assets/Sale1.png";
import sale2 from "../../assets/sale2.png";
import sale3 from "../../assets/sale3.png";
import sale4 from "../../assets/sale4.png";
import sale5 from "../../assets/sale5.png";
import sale6 from "../../assets/sale6.png";
import sale7 from "../../assets/sale7.png";
import sale8 from "../../assets/sale8.png";
import sale9 from "../../assets/sale9.png";
import img from "../../assets/product.png";
import { FaStar } from 'react-icons/fa';
import dummyData from "./dummydata";
export default function ProductList()
{    function renderStars(rating) {
    const stars = [];
    const totalStars = 5; 
    const roundedRating = Math.round(rating); 
    
    for (let i = 1; i <= totalStars; i++) {
        if (i <= roundedRating) {
          stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else {
          stars.push(<FaStar key={i} className="text-gray-500" />);
        }
      }
    
    return stars;
    }      
    return(
        <div className="p-20">
            <div className="flex justify-end pb-10">
                <Link to={'/create'} className="rounded bg-blue-500 p-2 text-white hover:shadow-xl">Đăng sản phẩm</Link>
            </div>
            <div className="grid grid-cols-6 gap-x-4">
                <div className="col-span-2">
                    <img src={sale1} alt="Image 1" className="w-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src={sale2} alt="Image 1" className="w-full rounded-lg" />
                    <img src={sale3} alt="Image 1" className="w-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src={sale4} alt="Image 1" className="w-full rounded-lg" />
                    <img src={sale5} alt="Image 1" className="w-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src={sale6} alt="Image 1" className="w-full rounded-lg" />
                    <img src={sale7} alt="Image 1" className="w-full rounded-lg" />
                </div> 
                <div className="flex flex-col gap-y-4">
                    <img src={sale8} alt="Image 1" className="w-full rounded-lg" />
                    <img src={sale9} alt="Image 1" className="w-full rounded-lg" />
                </div>           
            </div>
            <div><p className="font-bold text-lg text-black mr-10 ml-10 mt-10">Gợi ý hôm nay</p>
                <div className="grid grid-cols-4 gap-8 p-10 mr-10 ml-10">
                    {dummyData.map((product, index) => (
                    <Link key={index} to={`/products/${index}`} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img
                            className="w-full"
                            src={img}
                            alt={product.name}
                        />
                        <div className="px-6 py-4">
                            <div className="mb-2">{product.name}</div>
                            <div className="flex flex-row mt-4 mb-4">
                            {renderStars(3)}
                            <p className="text-gray-500 ml-4 ">   | Đã bán 4.4k</p>
                            </div>
                            <p className="font-bold text-gray-700 text-base">
                            {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(product.price)}
                            </p>
                            <p style={{borderTop:"1px solid gray",marginTop:"20px",paddingTop:"5px"}}>Giao thứ 7, 09/12</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
}