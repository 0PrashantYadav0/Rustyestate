import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile, Signin, About, SignUp} from "./pages"
import Header from './components/Header'
import ProtectedRouter from './components/ProtectedRouter'

function App() {

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<ProtectedRouter />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter> 
  )
}

export default App
