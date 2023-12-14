import React,{useState,useEffect} from 'react'
import axios from "axios";
import NavigationOrderTab from '../components/NavigationOrderTab'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

const SellCenter = () => {
    const title = "Sell Center";
    const seller_id = "332211";
    const [totalOrders,setTotalOrders]=useState();

    async function fetchTotalOrders() {
        try {
            const response = await axios.post(`http://localhost:3000/statistics/total-order/status`, 
            {
                seller_id:"332211",
                from: "2023-11-13",
                to: "2023-11-23", 
            },{
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status >= 200 && response.status < 400) {
                console.log(response.data.result)
                setTotalOrders(response.data.result);
            }
        } catch (error) {
            console.log('API Error:', error);
        }
    }
    const [revenue,setRevenue]=useState(null)
    async function fetchRevenue() {
        try {
            const response = await axios.post(`http://localhost:3000/statistics/revenue`, 
            { 
                seller_id: "332211",
                from: "2023-11-13",
                to: "2023-11-23", 
            },{
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status >= 200 && response.status < 400) {
                console.log(response.data.result)
                setRevenue(response.data.result);
            }
        } catch (error) {
            console.log('API Error:', error.data.result);
        }
    }
    const [cancelRate,setCancelRate]=useState(null)
    async function fetchCancelRate() {
        try {
            const response = await axios.post(`http://localhost:3000/statistics/cancel-rate`, 
            { 
                seller_id: "332211",
                from: "2023-11-13",
                to: "2023-11-23", 
            },{
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status >= 200 && response.status < 400) {
                console.log(response.data.result)
                setCancelRate(response.data.result);
            }
        } catch (error) {
            console.log('API Error:', error.data.result);
        }
    }
    useEffect(()=>{
        fetchTotalOrders();
        fetchRevenue();
        fetchCancelRate();
    },[])

    return (
        <div className='flex justify-center w-full bg-[#f5f4fb] text-slate-600'>
            {totalOrders&&cancelRate&&revenue?(
            <div className='w-[1200px]'>
                <BreadCrumb title={title}/>
                <div className='flex flex-row space-x-4 justify-between'>
                    <NavigationOrderTab/>
                    <div className='flex flex-col space-y-4 w-full justify-'>
                    <span className='text-xl mt-10 flex flex-row'>Sell Center</span>
                        <div className='flex flex-col bg-white space-y-4 p-4'>
                            <div>Mã người bán: {seller_id}</div>
                            <div>Tổng số đơn: {totalOrders.TotalOrder}</div>
                            <div>Số đơn đã bán thành công: {totalOrders.SuccessfulOrder}</div>
                            <div>Số đơn đã bị hủy: {totalOrders.CancelOrder}</div>
                            <div>Tỉ lệ hủy đơn: {cancelRate.CancelRate} %</div>
                            <div>Tổng doanh thu: {revenue.Revenue} ₫</div>
                        </div>
                        
                      </div>
                </div>
            </div>):<div>Loading ...</div>}
        </div>
  )
}

export default SellCenter
