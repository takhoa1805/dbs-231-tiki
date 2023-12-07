import React from 'react'
import logo from '../../assets/header/logo.png';
const Header = () => {
  return (
    <div className='w-full flex flex-row py-2 justify-center space-x-12'>
        <img className='w-[72px]' src={logo} alt=''/>
        <div className='flex flex-col justify-between text-slate-500 space-y-4'>
            <div className='w-full flex'>   
                <form>   
                    <label for="default-search" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                         class="block 2xl:w-[900px] xl:w-[700px] md:w-[400px] w-[300px] p-2 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg
                          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                          outline-none" placeholder="Giao nhanh 24h & đúng khung giờ" required/>
                        <button type="submit" class="absolute top-0 end-0 p-2 text-base font-[400] border-l h-full text-blue-600 rounded-e-lg  hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                <button className="p-2 flex flex-row space-x-2 rounded-lg hover:bg-blue-100">
                    <img className='w-6' src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="header_menu_item_home"/>
                    <div className='text-slate-500'>Trang chủ</div>
                </button>
                <button className="p-2 flex flex-row space-x-2 rounded-lg hover:bg-slate-100 ">
                    <img className='w-6' src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="header_header_account_img"/>
                    <button className='text-slate-500'>Tài khoản</button>
                </button>
                <div className='my-2 mx-4 border-r'></div>
                <button className="p-2 flex flex-row space-x-2 rounded-lg hover:bg-slate-100">
                    <img className='w-6' src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart"/>
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