import { useState } from 'react'
import './App.css'
import { ContextProvider } from './context/context';
import Footer from './components/footer';
import ProductList from './page/productList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './page/detailProduct';
import AnalyticsPage from './page/AnalyticsPage';
import Header from './components/Header';
import MyOrders from './page/MyOrders';
import Create from './page/createproduct';
import UpdateProduct from './page/updateproduct';
import DetailedOrder from './page/DetailedOrder';
import InfoPage from './page/InfoPage';
import SellCenter from './page/SellCenter';
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<UpdateProduct />} />
          <Route path="orders/:id" element={<DetailedOrder />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="sellcenter" element={<SellCenter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;