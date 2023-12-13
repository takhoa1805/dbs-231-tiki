import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import QuantityPicker from '../components/quantity'
export default function UpdateProduct(){
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams(); 
  const handleChangeQuantity = (value) => {
    setQuantity(value);
  };
  const [productDetail,setProductDetail] = useState(null);

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/product/findbyid/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status >= 200 && response.status < 400) {
        setProductDetail(response.data.result);
      }
    } catch (error) {
      console.log('API Error:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission with the collected state values
    // For example, you can send a request to the server with the form data
    console.log({
      id,
      price,
      quantity,
      description,
    });
    try {
      await axios.post(`http://localhost:3000/product/update`,{
        _id: id,
        price: price,
        description: description,
        quantity: quantity,
        
      }, 
      {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => {

      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className='p-10 m-10 ' onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Tạo sản phẩm</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Tên sản phẩm: {productDetail ? productDetail.TenSP : ''}
              </label>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Loại sản phẩm: {productDetail ?  productDetail.LoaiSP : ''}
              </label>
            </div>
           
            <div className="sm:col-span-2 ">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Mã Thương hiệu : {productDetail ? productDetail.MaThuongHieu:''}
              </label>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Xuất xứ: {productDetail ?productDetail.XuatXu:''}
              </label>
            </div>
            <div className="sm:col-span-2 sm:col-start-1 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Số lượng 
              </label>
              <div className="mt-2">
                <QuantityPicker value={quantity} onChange={handleChangeQuantity} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Giá
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onChange={handleChangePrice}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Mô tả sản phẩm
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={description}
                  onChange={handleChangeDescription}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Ảnh minh họa cho sản phẩm
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/jpeg, image/png" multiple />
                    </label>

                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          Hủy
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cập nhật sản phẩm
        </button>
      </div>
    </form>
  )
}
