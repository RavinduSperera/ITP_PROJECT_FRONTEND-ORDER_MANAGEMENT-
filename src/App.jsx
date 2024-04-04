import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/placeOrder'
import ViewOrders from './pages/viewOrders'
import Header from './components/header'
import UpdateOrder from './pages/updateOrder'
import DeleteOrder from './pages/deleteOrder'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<PlaceOrder />} />
        <Route path="/view-orders" element={<ViewOrders />} />
        <Route path='/update-order' element={<UpdateOrder />} />
        <Route path='/delete-order' element={<DeleteOrder />} />
      </Routes>
    </BrowserRouter>
  )
}
