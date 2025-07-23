import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forms from './components/Forms'
import Result from './components/ResultComponent/Result'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Forms />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  )
}

export default App

