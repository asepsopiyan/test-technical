import { useState } from 'react'
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
          <Dashboard />
          <MasterData />
          <Instalasi />
          <Report />
        </Layout>
      </div>
    </>
  )
}

export default App
