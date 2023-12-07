import React from 'react'

const NavigationOrderTab = () => {
  return (
    <div class='navigate-tab' className='flex flex-col basis-1/3'>
        <div className='flex flex-row items-center space-x-3 pl-1 py-3'>
            <img className='w-[45px] rounded-full' src="https://salt.tikicdn.com/desktop/img/avatar.png" alt="avatar"/>
            <div className='flex flex-col'>
                <div>Tài khoản của</div> 
                <div>Jame Warder</div>
            </div>
        </div>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
            <div>Thông tin tài khoản</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
            <div>Thông báo của tôi</div>
        </button>
        <button className='bg-[#eaebf1] flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></svg>                        
            <div>Quản lý đơn hàng</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img class="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/order_return.svg"/>
            <div>Quản lý đổi trả</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
            <div>Sổ địa chỉ</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>
            <div>Thông tin thanh toán </div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img class="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/account/reviewhub.png"/>
            <div>Đánh giá sản phẩm</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
            <div>Sản phẩm bạn đã xem</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
            <div>Nhận xét của tôi</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img className='w-6' src="https://salt.tikicdn.com/ts/ta/50/d3/26/9fa51b04c04851fbe4025c1c9f3111c7.png"/>
            <div>Astra Rewards</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img className="w-6" src="https://frontend.tikicdn.com/_desktop-next/static/img/share-to-earn/icon-s2e.svg"/>
            <div>Chia sẻ có lời</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img className="w-6" alt="insurance icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/account/insurance.png"/>
            <div>Hợp đồng bảo hiểm</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img className='w-6' src="https://salt.tikicdn.com/ts/tmp/95/15/2d/4b3d64b220f55f42885c86ac439d6d62.png"/>
            <div>Mua trước trả sau</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img className="w-6" src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_code.svg"/>
            <div>Mã giảm giá</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img className='w-6' src="https://salt.tikicdn.com/ts/upload/4b/4d/c3/05e31a32a296bd21da7d0403e6e2c87b.png"/>
            <div className="flex flex-col">
                <span className='justify-left flex'>Astra của bạn</span>
                <span className='justify-left flex'>3,01 ASA</span>
            </div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4502 1.04387C12.7301 0.179997 10.7547 -0.155053 8.8445 0.0662299C5.15543 0.450037 1.83253 3.08668 0.598636 6.58095C-0.25034 8.90254 -0.195333 11.5417 0.757405 13.8245C1.64114 15.9761 3.30758 17.7926 5.37158 18.8665C7.23943 19.8479 9.42581 20.208 11.5098 19.8842C13.3552 19.6116 15.1115 18.7965 16.5205 17.5776C18.1307 16.2011 19.2832 14.2983 19.7495 12.2305C20.256 10.0265 19.9897 7.65236 18.9932 5.62205C18.037 3.65176 16.4118 2.01652 14.4502 1.04387Z" fill="#FDD835"></path><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.9817 1.98661C12.4427 1.21366 10.6753 0.913881 8.96611 1.11187C5.66537 1.45528 2.69225 3.81438 1.58823 6.94083C0.828624 9.01805 0.87784 11.3794 1.73029 13.4219C2.521 15.347 4.01203 16.9723 5.85876 17.9332C7.53 18.8113 9.48624 19.1334 11.3509 18.8437C13.002 18.5999 14.5734 17.8705 15.8341 16.7799C17.2748 15.5484 18.306 13.8459 18.7233 11.9957C19.1764 10.0237 18.9381 7.89946 18.0465 6.08287C17.191 4.31998 15.7368 2.85687 13.9817 1.98661Z" stroke="#FFB500" stroke-width="0.685714"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.842 10C16.842 6.22059 13.7794 3.1579 9.99994 3.1579C6.22422 3.1579 3.15784 6.22059 3.15784 10C3.15784 13.7757 6.22422 16.8421 9.99994 16.8421C13.7794 16.8421 16.842 13.7757 16.842 10ZM15.7894 10.0082C15.7894 13.1987 13.2009 15.7895 9.99994 15.7895C6.80307 15.7895 4.21047 13.1987 4.21047 10.0082C4.21047 9.45737 4.29212 8.93105 4.43502 8.42105H15.5608C15.7078 8.93105 15.7894 9.45737 15.7894 10.0082Z" fill="#FFB500"></path></svg>
            <div>Quản lý Tiki Xu của tôi</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
            <img class="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/bookcare.svg"/>
            <div>BookCare của tôi</div>
        </button>
        <button className='flex flex-row items-center space-x-4 hover:bg-slate-100 pl-3 py-2 pr-3'>
        <svg fill="#000000" height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 390 390" xml:space="preserve">
            <path d="M357.048,232.913v-8.439v-20.858v-49.529C357.048,69.122,287.925,0,202.961,0H175.22C90.256,0,21.133,69.122,21.133,154.087 v49.529v20.858v40.894c0,29.876,24.308,54.183,54.186,54.183h29.101c10.324,0,18.693-8.37,18.693-18.695V168.127 c0-10.325-8.37-18.695-18.693-18.695H75.318c-5.854,0-11.487,0.944-16.771,2.669c1.064-63.435,52.99-114.714,116.673-114.714h27.741 c63.684,0,115.609,51.279,116.673,114.714c-5.284-1.725-10.918-2.669-16.771-2.669h-29.102c-10.323,0-18.692,8.37-18.692,18.695 v132.729c0,10.325,8.37,18.695,18.692,18.695h29.102c10.527,0,20.355-3.028,28.68-8.243v13.375 c0,15.435-12.558,27.993-27.993,27.993h-90.295c-10.307,0-18.662,8.355-18.662,18.662c0,10.307,8.355,18.662,18.662,18.662h90.295 c36.016,0,65.317-29.301,65.317-65.317v-74.421C368.867,242.374,363.966,235.643,357.048,232.913z"/>
        </svg>
            <div>Hỗ trợ khách hàng</div>
        </button>
    </div>
  )
}

export default NavigationOrderTab