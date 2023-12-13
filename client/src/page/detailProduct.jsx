import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import dummyData from "./dummydata"; 
import img from "../../assets/product.png";
import tiki from "../../assets/tikitrading.png";
import auth from "../../assets/chinhhang.png";
import DataComment from "./dummycomment";
import Carousel from "../components/Image";

import axios from "axios";
export default function Detail() {
    const { id } = useParams(); 

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
    function renderStars(rating) {
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
      
    const [productDetail,setProductDetail] = useState(null);
    const [comment,setComment] = useState([]);
    
    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:3000/product/findbyid/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status >= 200 && response.status < 400) {
                // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                // console.log(response.data.result);
                setProductDetail(response.data.result);
            }
        } catch (error) {
            console.log('API Error:', error);
        }
    }
    
    //fetchData()

    async function fetchComment(sortType){
        try {
            const url = `localhost:3000/product/rating/${sortType}/${id}`;
            console.log(url)
            await axios.get(`http://localhost:3000/product/rating/${sortType}/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(response => {
                if (response.status >=200 && response.status<400){
                    setComment(response.data.result);
                }
            })
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(()=>{
        fetchData();
        fetchComment('date/descending')
    },[id])
    
    async function handleAddToCart(){
        try {
            axios.post()
            await axios.post(`http://localhost:3000/cart/add`,{product_id: id, quantity: quantity, user_id: 111111}, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(response => {
                if (response.status >=200 && response.status<400){
                    console.log(response.data.result)
                }
            })
        } catch (error) {
            console.log(error);

        }
    }
    
    return (
        <div>
            {!productDetail ? <h1>Loading</h1> :
                <div>
                    <div className="grid grid-cols-7 gap-x-4">
                        <div className="col-span-5  grid grid-cols-5">
                            <div className="col-span-2 rounded overflow-hidden shadow-lg" >
                                <Carousel></Carousel>
                            </div>
                            <div className=" col-span-3 rounded overflow-x-auto shadow-lg p-4 overflow-y-auto">
                                <img src={auth} alt="hmmm" className="rounded-lg"  />

                                <h2 className="text-2xl font-normal">{productDetail.TenSP}</h2>
                                <div className="flex flex-row mt-4 mb-4">
                                {renderStars(productDetail.SoSaoTrungBinh)}
                                <p className="text-gray-500 ml-4 ">    Đã bán 4.4k</p>
                                </div>
                                
                                <p  className="font-medium text-black text-2xl">Giá: {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productDetail.GiaTien)}</p>
                                <div className="mt-4">
                                    <p className="font-medium">Mô tả sản phẩm</p> <br />
                                    <p>{productDetail.MoTa}</p>
                                    
                                </div>
                            </div>
                            <div className="col-span-5 rounded overflow-hidden shadow-lg p-6 " >
                                <p className="font-medium text-xl text-black">Khách hàng đánh giá</p>
                                <p className="font-medium text-xl text-black">Lọc theo</p>
                                <div className="flex flex-row pb-4 border-b border-gray-300">
                                    <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2" onClick={()=>fetchComment('date/descending')}>Mới nhất</button>
                                    <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2" onClick={()=>fetchComment('date/ascending')}>Cũ nhất</button>
                                    <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2" onClick={()=>fetchComment('rates/descending')}>Đánh giá cao</button>
                                    <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2" onClick={()=>fetchComment('rates/ascending')}>Đánh giá thấp</button>
                                </div>
                                {(comment && comment.length > 0) ?  
                                <div> 
                                    {
                                        comment.map((comment,id)=>
                                        (
                                            <div key={id} className="grid grid-cols-10 border-b border-gray-300 pb-4 gap-x-4">
                                                <div className="col-span-3 pt-2">
                                                <div className="flex flex-row flex justify-center items-center border-b border-gray-300 pb-2 ">
                                                    <div className="rounded-full h-16 w-16 bg-blue-500 mr-4 flex justify-center items-center text-white">TG</div>
                                                    <div>Tên tác giả <br /> <span className="text-gray-500">Đã tham gia 1 năm</span></div>
                                                </div>
                                                </div>
                                                
                                                <div className="col-span-7 ">
                                                    <div className="flex flex-row pt-2"> {renderStars(comment.SoSao)}</div>
                                                    <p className="flex flex-row text-green-500 pt-4 pb-4"><FaCheck className="text-green-500"></FaCheck>Đã mua hàng</p>
                                                    <p>{comment.NoiDung}</p>
                                                    <img src={img} alt={productDetail.TenSP} className="rounded-lg"  />
                                                    <p className="text-gray-400 text-sm">Đã đánh giá lúc: {comment.NgayDanhGia}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                                :   <div>
                                        There is no comment
                                    </div>
                                } 
                            </div>
                        </div>
                        <div className="col-span-2 rounded overflow-hidden shadow-lg p-4 sticky top-0 z-10" >
                            <img src={tiki} alt="tiki" className="w-full" style={{borderBottom:"1px solid lightgray"}} />
                            
                            <div className="font-medium">Số lượng</div>
                            <div className="flex items-center mt-4 mb-4">
                            <button
                            onClick={decreaseQuantity}
                            className="w-8 h-8 rounded-l border p-1  mr-2 border-gray-500 text-gray-500"
                            >
                            -
                            </button>
                            <div>{quantity}</div>
                            <button
                            onClick={increaseQuantity}
                            className="w-8 h-8 rounded-r border p-1 ml-2 border-gray-500 text-gray-500"
                            >
                            +
                            </button>
                            </div>
                            <div className="font-medium text-black">
                                Tạm tính <br />
                                <p className="text-2xl mt-4 mb-4 text-black"> {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(productDetail.GiaTien*quantity)}</p>
                            </div>
                            <button className="rounded bg-red-500 p-2 text-white w-full hover:shadow-xl">Mua ngay</button>
                            <button className="rounded border p-2 mt-4 border-blue-500 text-blue-500 w-full hover:shadow-xl" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                            
                            <Link to={`/update/${id}`} ><button className="rounded border p-2 mt-4 border-blue-500 bg-blue-500 text-white w-full hover:shadow-xl">Cập nhật sản phẩm</button></Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    );
}
