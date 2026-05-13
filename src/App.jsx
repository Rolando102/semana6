import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import List from './pages/List'
import Form from './pages/Form'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App