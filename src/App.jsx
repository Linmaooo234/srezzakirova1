import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import { HomePage } from './pages/homepage';
import { ProductPage } from './components/oneproductpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/tovar/:id' element={<ProductPage/>} />
    </Routes>
  )
}

export default App
