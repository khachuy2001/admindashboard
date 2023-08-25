import { useContext } from 'react';
import './App.css'
import "./assets/scss/app.scss"
import Dashboard from '../pages/DashBoard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import SideBarContainer from './components/Layout/SideBarContainer';
import { MenuContext } from './context/menu';
import Users from '../pages/Users';
import Calendar from '../pages/Calendar';

function App() {
  const [{ menuClass }] = useContext(MenuContext)

  return (
    <>
      <Router>
        <div className={menuClass}>
          <Header />
          <SideBarContainer />
          <div className='main-content'>
            <div className='page-content'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/users' element={<Users />} />
                <Route path='/calendar' element={<Calendar />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
