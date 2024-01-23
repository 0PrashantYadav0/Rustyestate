import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile, Signin, About, SignUp} from "./pages"

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/ >}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
