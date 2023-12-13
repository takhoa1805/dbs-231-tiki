import React,{useState,useEffect} from 'react'
import axios from "axios";
import NavigationOrderTab from '../components/NavigationOrderTab'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

const SellCenter = () => {
    const title = "Sell Center";
    const seller_id = "332211";
    const [totalOrders,setTotalOrders]=useState(null);
    const fromDate = new Date("2023-11-13");
const toDate = new Date("2023-11-23");
const fromdate = new Date(fromDate + 'T00:00:00Z');
const todate = new Date(toDate + 'T00:00:00');
const fromDateString = fromDate.toISOString();
const toDateString = toDate.toISOString();

    async function fetchTotalOrders() {
        try {
            const response = await axios.get(`http://localhost:3000/statistics/total-order/status`, 
            {params:{
                seller_id:332211,
                from: fromDate,
                to: toDate, 
            }},{
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
            const response = await axios.get(`http://localhost:3000/order/all`, 
            { params:{
                "seller_id": seller_id,
                from: fromdate,
                to: todate, 
            }},{
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status >= 200 && response.status < 400) {
                console(response.data.result)
                setRevenue(response.data.result);
            }
        } catch (error) {
            console.log('API Error:', error.data.result);
        }
    }
    useEffect(()=>{
        fetchTotalOrders();
        fetchRevenue();
    },[])
    return (
        <div className='flex justify-center w-full bg-[#f5f4fb] text-slate-600'>
            {totalOrders?(
            <div className='w-[1200px]'>
                <BreadCrumb title={title}/>
                <div className='flex flex-row space-x-4 justify-between'>
                    <NavigationOrderTab/>
                    <div className='flex flex-col space-y-4 w-full justify-'>
                    <span className='text-xl mt-10 flex flex-row'>Sell Center</span>
                        <div className='flex flex-col bg-white space-y-4 p-4'>
                            <div>Mã người bán: {seller_id}</div>
                            <div>Tổng số đơn: {totalOrders}</div>
                            <div>Số đơn đã bán thành công:</div>
                            <div>Số đơn đã bị hủy:</div>
                            <div>Tỉ lệ hủy đơn:</div>
                            <div>Tổng doanh thu:</div>
                        </div>
                        
                      </div>
                </div>
            </div>):<div>Loading ...</div>}
        </div>
  )
}

export default SellCenter
