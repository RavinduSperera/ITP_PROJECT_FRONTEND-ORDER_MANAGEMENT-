import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/placeOrder'
import ViewOrders from './pages/viewOrders'
import Header from './components/header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<PlaceOrder />} />
        <Route path="/view-orders" element={<ViewOrders />} />
      </Routes>
    </BrowserRouter>
  )
}
