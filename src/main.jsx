import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CatalogsPage from './pages/CatalogsPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import ProductCard from './components/ProductCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Routes>
  <Route index element={<App/>} />
  {/* <Route path="catalogs" element={} /> */}

  {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

  <Route path="catalogs">
    <Route index element={<CatalogsPage/>} />
    <Route path=":productId" element={<ProductPage/>} />
    <Route path="contact" element={<ContactsPage />} />
  </Route>
</Routes>

    
    </BrowserRouter>
    
  </StrictMode>,
)
