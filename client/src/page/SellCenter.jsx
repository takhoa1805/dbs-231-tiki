import React from 'react'
import NavigationOrderTab from '../components/NavigationOrderTab'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

const SellCenter = () => {
    const title = "Sell Center";
    return (
        <div className='flex justify-center w-full bg-[#f5f4fb] text-slate-600'>
            <div className='w-[1200px]'>
                <BreadCrumb title={title}/>
                <div className='flex flex-row space-x-4 justify-between'>
                    <NavigationOrderTab/>
                    <div className='flex flex-col space-y-4 w-full justify-'>
                    <span className='text-xl mt-10 flex flex-row'>Sell Center</span>
                        <div className='flex flex-col bg-white space-y-4 p-4'>
                            <div>Tổng số đơn:</div>
                            <div>Số đơn đã bán thành công:</div>
                            <div>Số đơn đã bị hủy:</div>
                            <div>Tỉ lệ hủy đơn:</div>
                            <div>Tổng doanh thu:</div>
                        </div>
                        
                      </div>
                </div>
            </div>  
        </div>
  )
}

export default SellCenter
