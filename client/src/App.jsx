import { useState } from 'react'
import './App.css'
import Footer from './components/footer';
import ProductList from './page/productList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './page/detailProduct';
import AnalyticsPage from './page/AnalyticsPage';
import Header from './components/Header';
import MyOrders from './page/MyOrders';
import Create from './page/createproduct';
import UpdateProduct from './page/updateproduct';
function App() {

  return (
    // <>
    //   <div className='text-4xl'>
    //     VITE
    //   </div>
    //   <ProductList></ProductList>
    //   {/* <ProductDetail></ProductDetail> */}
    //   <Footer></Footer>
    // </>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'>
          <Route index element={<ProductList/>}></Route>
          <Route path='products' element={<ProductList/>}/>
          <Route path='products/:id' element={<ProductDetail/>}/>
          <Route path='analytics' element={<AnalyticsPage/>}/>
          <Route path='orders' element={<MyOrders/>}/>
          <Route path='create' element={<Create/>}/>
          <Route path='update' element={<UpdateProduct/>}/>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App