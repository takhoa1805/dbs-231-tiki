import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react';

import QuantityPicker from '../components/quantity'
import axios from 'axios';
export default function Create() {
  const [brandInfo,setBrandInfo] = useState(null)
  const [quantity, setQuantity] = useState(1); // Giá trị mặc định cho số lượng là 1

  const handleChangeQuantity = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const [productName, setProductName] = useState('');
  const [origin, setorigin] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'name':
        setProductName(value);
        break;
      case 'origin':
        setorigin(value);
        break;
      case 'price':
        // Chuyển đổi giá trị nhập vào thành số nguyên
        const parsedPrice = parseInt(value);
        if (!isNaN(parsedPrice) && parsedPrice >= 0) {
          setPrice(parsedPrice); // Cập nhật state với số nguyên đã chuyển đổi
        }
        break;
      case 'brand':
        setBrand(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'description':
        setDescription(value);
        break;
      // Add more cases for other input fields if needed
      default:
        break;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission with the collected state values
    // For example, you can send a request to the server with the form data
    console.log({
      productName,
      origin,
      price,
      brand,
      type,
      quantity,
      description,
    });
    try {
      await axios.post(`http://localhost:3000/product/create`,{
        seller_id: "112233",
        _id: "1234567",
        name: productName,
        price: price,
        description: description,
        origin: origin,
        type: type,
        brand_id: brand,
        quantity: quantity,
        relative_list:"1",
        sample_product:"10000001",
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

  useEffect(()=>{
    try {
      axios.get("http://localhost:3000/product/brand", {
        headers: {
            "Content-Type": "application/json",
        }
      })
      .then(response => {
        if (response.status >=200 && response.status<400){
            setBrandInfo(response.data.result);
        }
      })
    } catch (error) {
        console.log(error);

    }
  },[])

  return (
    <form className='p-10 m-10' onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Tạo sản phẩm</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Tên sản phẩm
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="username"
                    value={productName}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Xuất xứ
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="origin"
                    id="origin"
                    value={origin}
                    onChange={handleChange}
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
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
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              {/* <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Thương hiệu
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
              { brandInfo ? <div>

                <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">
                  Thương Hiệu:
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={brand}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled>Select a genre</option>
                  {brandInfo.map((genreItem) => (
                    <option key={genreItem.MaThuongHieu} value={genreItem.MaThuongHieu}>
                      {genreItem.TenThuongHieu}
                    </option>
                  ))}
                </select>


              </div> : <div>There is no brand</div>


              }

              

            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="type"
                  id="type"
                  value={type}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Số lượng 
              </label>
              
              <div className="mt-2">
                {/* <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> */}
                {/* <QuantityPicker></QuantityPicker> */}
                <div className="">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleChangeQuantity}
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={description}
                  onChange={handleChange}
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
          Đăng sản phẩm
        </button>
      </div>
    </form>
  )
}
