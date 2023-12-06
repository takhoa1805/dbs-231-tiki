import { useState } from 'react'
<<<<<<< HEAD
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
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
>>>>>>> bf3e347f1203c39aff34029371c9dc5443cc113d
