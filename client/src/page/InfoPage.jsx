import React from 'react'
import NavigationOrderTab from '../components/NavigationOrderTab'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

const InfoPage = () => {
    const title = "Thông tin cá nhân";
    return (
        <div className='flex justify-center w-full bg-[#f5f4fb] text-slate-600'>
            <div className='w-[1200px]'>
                <BreadCrumb title={title}/>
                <div className='flex flex-row space-x-4 justify-between'>
                    <NavigationOrderTab/>
                    <div className='flex flex-col space-y-4 w-full justify-'>
                    <span className='text-xl mt-10 flex flex-row'>Thông tin tài khoản</span>
                        <div className='flex flex-col bg-white space-y-4 p-4'>
                            <div>
                                Họ tên:
                            </div>
                            <div>
                                Email:
                            </div>
                            <div>
                                Ngày sinh:
                            </div>
                            <Link to="/sellcenter"
                            className="flex mx-auto overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group align-center "
                            >
                            <div className='ml-0.5 mt-0.5'>Sell Center</div>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
                                Sell Center
                            </span>
                            </Link>
                        </div>
                        
                      </div>
                </div>
            </div>  
        </div>
  )
}

export default InfoPage
{/*  */}