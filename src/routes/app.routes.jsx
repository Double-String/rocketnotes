import { Routes, Route } from 'react-router-dom'

import CreateNote from '../pages/CreateNote'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Details from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}