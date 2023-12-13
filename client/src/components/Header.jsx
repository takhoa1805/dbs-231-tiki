import React,{useContext, useState} from 'react'
import { Link} from 'react-router-dom';
import logo from '../../assets/header/logo.png';
import { Context } from '../context/context.jsx';

const Header = () => {
    const {numProduct}=useContext(Context);
    console.log(numProduct);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='w-full flex flex-row py-2 justify-center space-x-12'>
        <Link to="/" className='cursor-pointer'>
            <img className='w-[72px]' src={logo} alt='Logo' />
        </Link>
        <div className='flex flex-col justify-between text-slate-500 space-y-4'>
            <div className='w-full flex'>   
                <form>   
                    <label htmlFor="default-search" className=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                         className="block 2xl:w-[900px] xl:w-[700px] md:w-[400px] w-[300px] p-2 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg
                          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                          outline-none" placeholder="Giao nhanh 24h & đúng khung giờ" required/>
                        <button type="submit" className="absolute top-0 end-0 p-2 text-base font-[400] border-l h-full text-blue-600 rounded-e-lg  hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Tìm kiếm
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex flex-row justify-left space-x-2 text-slate-500 font-[400] text-base'>
                <button className="">khỏe đẹp</button>
                <button className="">nhà cửa</button>
                <button className="">sách</button>
                <button className="">thể thao</button>
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-end'>
                <Link to="/" className="p-2 flex flex-row space-x-2 rounded-lg hover:bg-blue-100">
                    <img className='w-6' src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="header_menu_item_home"/>
                    <div className='text-slate-500'>Trang chủ</div>
                </Link>
                <button onClick={() => setShowDropdown(!showDropdown)} 
                className="relative p-2 flex flex-row space-x-2 rounded-lg hover:bg-slate-100 ">
                    <img className='w-6' src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="header_header_account_img"/>
                    <button className='text-slate-500'>Tài khoản</button>
                    {showDropdown && (
                    <div className="absolute w-60 top-10 right-0 mt-2 bg-white border rounded-lg shadow-md z-10 flex flex-col">
                        <ul className="py-1">
                        <li>
                            <button className="block text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-200">Thông tin tài khoản</button>
                        </li>
                        <li onClick={() => setShowDropdown(false)}>
                            <Link to="/orders" className="block px-4 py-2 text-left w-full text-gray-800 hover:bg-gray-200 focus:outline-none">Đơn hàng của tôi</Link>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-left w-full text-gray-800 hover:bg-gray-200">Trung tâm hỗ trợ</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-left w-full text-gray-800 hover:bg-gray-200">Đăng xuất</button>
                        </li>
                        </ul>
                    </div>
                    )}
                </button>
                
                <div className='my-2 mx-4 border-r'></div>
                <button className="p-2 flex flex-row space-x-2 rounded-lg hover:bg-slate-100 relative">
                    <img className='w-6' src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart"/>
                    <div className='absolute right-0 bottom-6 text-white bg-red-500 rounded-full text-sm px-0.5'>
                        {numProduct}
                    </div>
                </button>
            </div>
            <div className='w-full flex flex-row space-x-2'>
                <img className='w-6' src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="header-icon-location"/>
                <div className='text-slate-500'>Giao đến: </div>
                <div className='text-slate-800 font-[500] underline'>Khánh Hội, Quận 4, Hồ Chí Minh</div>
            </div>
        </div>
    </div>
  )
}

export default Header