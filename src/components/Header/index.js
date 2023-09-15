import React, {useState} from 'react'
import '../../styles/Header.css'
import { CiSearch } from 'react-icons/ci'
import { GrClose, GrMenu } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const Header = ({query, setQuery}) => {
  const [status, setStatus] = useState(false)
  
  const handleQuery = (e) => {
    setQuery(e.target.value)
  }
  return (
    <>
      <div className='header_container'>
        <div className='header_body'>
          <h1>Course</h1>
          
          <div className='header_input'>
            <CiSearch/>
            <input type="text" value={query} onChange={handleQuery}/>
          </div>
          
          <div className='header_list'>
            <NavLink to = '/' exact='true' activeclassName = 'active' onClick={() => {window.scroll(0, 0)}}>
              <p>Home</p>
            </NavLink>
          
            <NavLink to='/about' exact='true' activeclassName = 'active' onClick={() => {window.scroll(0, 0)}}>
              <p>About</p>
            </NavLink>
            <NavLink to='/contact' exact='true' activeclassName = 'active' onClick={() => {window.scroll(0, 0)}}>
              <p>Contact</p>
            </NavLink>
          </div>
          
          <div onClick={() => setStatus(!status)} className='header_status'>
          { status ? 
            <GrClose /> : <GrMenu />
          }
          </div>
          
          {
            status ? (
              <>
                <div className= 'header_block'>
                  <div className='header_input_block'>
                    <CiSearch/>
                    <input type="text" value={query} onChange={handleQuery}/>
                  </div>
                
                  <div className='header_list_block'>
                    <NavLink to = '/' exact='true' activeclassName = 'active' onClick={() => {window.scroll(0, 0)}}>
                      <p>Home</p>
                    </NavLink>
                  
                    <NavLink to='/about' exact='true' activeclassName = 'active' onClick={() => {window.scroll(0, 0)}}>
                      <p>About</p>
                    </NavLink>
                    <NavLink to='/contact' exact='true' activeclassName = 'active' onClick={() => {window.scroll(0, 0)}}>
                      <p>Contact</p>
                    </NavLink>
                  </div> 
                </div>
              </>
            ) : null
          }
        </div> 
      </div>
      
    </>
  )
}

export default Header