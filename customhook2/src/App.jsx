
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { DisplayFetch } from './component/DisplayFetch'
function App() {


  return (
    <>
    <Routes>
<Route path='/fetch' element={<DisplayFetch/>}/>
    </Routes>
     
    </>
  )
}

export default App
