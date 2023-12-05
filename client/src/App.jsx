import { useState } from 'react'
import './App.css'
import Footer from './components/footer';
import ProductList from './page/productList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './page/detailProduct';
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
      <Routes>
        <Route path='/'>
          <Route index element={<ProductList/>}></Route>
          <Route path='products' element={<ProductList/>}/>
          <Route path='products/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App