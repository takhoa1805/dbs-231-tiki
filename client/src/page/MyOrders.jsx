import React,{useState,useEffect} from 'react'
import NavigationOrderTab from '../components/NavigationOrderTab';
import DetailedOrder from './DetailedOrder';
import { Link } from "react-router-dom";
import axios from "axios";
const MyOrders = () => {
    const [selectedTitle, setSelectedTitle] = useState('Tất cả đơn'); // Initial selected title
    const maNguoiMua='123456';
    const titles = [
        'Tất cả đơn',
        'Chờ thanh toán',
        'Đang xử lý',
        'Đang vận chuyển',
        'Đã giao',
        'Đã hủy',];

    const handleTitleClick = (title) => {
        setSelectedTitle(title);
    };
    const [myOrders,setMyOrders]=useState(null);
    async function fetchOrders() {
        try {
            const response = await axios.get(`http://localhost:3000/order/all`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status >= 200 && response.status < 400) {
                const filteredOrders = response.data.result.filter(order => order.MaNguoiMua === maNguoiMua);
                // console.log(filteredOrders);
                setMyOrders(filteredOrders);
            }
        } catch (error) {
            console.log('API Error:', error);
        }
    }
    useEffect(()=>{
        fetchOrders();
    },[])
  return (
    <div className='flex justify-center w-full bg-[#f5f4fb] text-slate-600'>
        <div className='w-[1200px]'>
            <div class="breadcrumb flex flex-row align-center my-auto px-auto items-center space-x-2">
                <a class="breadcrumb-item" data-view-id="breadcrumb_item" data-view-index="0" href="/" previewlistener="true">
                    <span>
                        Trang chủ
                    </span>
                </a>
                <span class="icon icon-next">
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#808089" fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z">
                        </path>
                    </svg>
                </span>
                <a href="#" class="breadcrumb-item" data-view-id="breadcrumb_item" data-view-index="1">
                    <span title="Đơn hàng của tôi">
                        Đơn hàng của tôi
                    </span>
                </a>
            </div>
            <div className='flex flex-row space-x-4 justify-between'>
                <NavigationOrderTab/>
                <div class='my-orders' className='flex flex-col space-y-4 w-full'>
                    <span className='text-xl mt-10'>Đơn hàng của tôi</span>
                    <div className='flex flex-row w-full justify-between space-x-0 bg-white'>
                    {titles.map((title, index) => (
                    <button
                        key={index}
                        className={`flex py-3 w-full justify-center ${selectedTitle === title ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                        onClick={() => handleTitleClick(title)}
                    >
                        {title}
                    </button>
                    ))}
                    </div>      
                    <div className='w-full flex'>   
                        <form className='w-full relative'>   
                            <label for="default-search" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class=" w-full">
                                <div class="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                className="block p-2 ps-12 text-sm text-gray-900 border border-gray-300 rounded-md
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                                outline-none w-full" placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm" required/>
                                <button type="submit" class="absolute top-0 end-0 p-2 text-base font-[400] border-l h-full text-blue-600 rounded-e-md  hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Tìm đơn hàng 
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class='my-orders-history' className='flex flex-col space-y-4 '>
                        {myOrders?(myOrders.map((order) => (
                            <div key={order.MaDonHang} className='order-card rounded-md flex flex-col bg-white'>
                                <div className='flex flex-row items-center space-x-4 p-4 '>         
                                    <img className='w-6' src="https://icon-library.com/images/fast-delivery-icon/fast-delivery-icon-6.jpg" alt="avatar"/>
                                    <div>
                                        {order.TinhTrangDonHang}
                                    </div>
                                </div>
                                <div className='relative flex flex-row items-center space-x-4 border-t border-b mx-4 py-5'>         
                                <img className='w-16 relative' src="https://salt.tikicdn.com/cache/200x200/ts/product/d2/76/c1/5a9bf18968aeb1f43add175f3908b961.jpg" alt="avatar"/>                            
                                    <div className='flex flex-col items-top h-full'>
                                        <div>{order.product}</div>
                                        <div className='text-sm flex flex-row items-center space-x-2'>
                                            <div>Mã đơn hàng: </div>
                                            <div>
                                                {order.MaDonHang}
                                            </div>
                                            
                                        </div>
                                        <div className='items-top h-full'>
                                        Thời gian: {order.ThoiGian}
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='flex justify-end w-full  p-4'>
                                    <div className='flex flex-col justify-right space-y-2'>
                                       <div className='flex justify-end items-center'>
                                        <p className='text-lg'>Phương thức vận chuyển</p>
                                        {`: ${order.PhuongThucVanChuyen}`}
                                        </div>
                                        <div className='flex justify-end space-x-2'>
                                            <button className='border p-2 rounded-md border-sky-600 text-sky-600'>Mua lại</button>
                                            <Link key={order.MaDonHang} order={order} to={`/orders/${order.MaDonHang}`} 
                                            className='border p-2 rounded-md border-sky-600 text-sky-600'
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                        ))):(<div>No order was found</div>)}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MyOrders