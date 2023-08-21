import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './layout/Layout.jsx'
import Dashboard from './pages/Dashboard'
import Instalasi from './pages/Instalasi'
import MasterData from './pages/MasterData'
import Report from './pages/Report'

function App() {
  return (
    <>
      <div>
        <Layout >
            <Routes>
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/master-data' element={<MasterData />}/>
                <Route path='/instalasi' element={<Instalasi />}/>
                <Route path='/report' element={<Report />}/>
            </Routes>
        </Layout>
      </div>
    </>
  )
}

export default App
