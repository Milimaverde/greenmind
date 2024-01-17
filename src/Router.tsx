import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Page2 } from './pages/page2'

export function Router() {
  return (
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      
    </Routes>
  )
}
