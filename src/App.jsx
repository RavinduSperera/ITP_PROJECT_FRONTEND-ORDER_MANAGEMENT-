import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/placeOrder'
import ViewOrders from './pages/viewOrders'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceOrder />} />
        <Route path="/view-orders" element={<ViewOrders />} />
      </Routes>
    </BrowserRouter>
  )
}
